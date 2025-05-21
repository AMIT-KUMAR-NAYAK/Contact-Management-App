# Contact Management API

This is a backend RESTful API for a Contact Management application built with Node.js, Express, and MongoDB. It supports user authentication with JWT and CRUD operations on contacts.

---

## Features

- User registration and login with JWT authentication
- Create, Read, Update, Delete (CRUD) contacts
- Protected routes for authenticated users
- Error handling middleware
- MongoDB database connection

---

## Getting Started

### Prerequisites

- Node.js installed (v14+ recommended)
- MongoDB URI (local or cloud like MongoDB Atlas)
- npm package manager

---

### Installation

1. Clone the repo

```bash```
git clone https://github.com/AMIT-KUMAR-NAYAK/Contact-Management-App.git
cd Contact-Management-App

# Install dependencies

- npm install
- Create a .env file in the root directory and add the following variables:
  PORT=5001
  MONGO_URI=your_mongodb_connection_string
  ACCESS_TOKEN_SECRET=your_jwt_secret
  Start the server
  npm start
  The server will run at http://localhost:5001

# API Endpoints
  Method / Endpoint / Description / AccessType
- POST	/api/users	Register new user	Public
- POST	/api/users/login	User login & get JWT token	Public
- GET	/api/contacts	Get all contacts	Private (Auth)
- POST	/api/contacts	Add new contact	Private (Auth)
- PUT	/api/contacts/:id	Update contact by ID	Private (Auth)
- DELETE	/api/contacts/:id	Delete contact by ID	Private (Auth)

### Authentication
- Use the /api/users/login endpoint to login and receive a JWT token.
- Pass the token in the Authorization header as Bearer <token> to access protected routes.

# Notes
- Make sure your MongoDB connection string is correct in .env.
- Tokens expires in 1 hour.
- For development, use tools like Postman or Thunder Client to test API endpoints

### License
- MIT License

Contact
For any questions or issues, please open an issue on GitHub.
---
