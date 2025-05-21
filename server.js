require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDb();
const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});