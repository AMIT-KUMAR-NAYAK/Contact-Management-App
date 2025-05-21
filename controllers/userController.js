const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

// @desc Register a user
// @route POST /api/users/register/
// @access public
const registerUser = asyncHandler(async(req, res)=>{
    const { username, email, password } = req.body;
    console.log("Inside usercontroller");
    
    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        throw new Error("User is already registered");
    }
    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password",hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    console.log(`User created ${user}`);
    if(user)
    {
        res.status(201).json({
            _id: user.id,
            email:user.email
        })
    }
    else
    {
        res.status(400);
        throw new Error("User data is not valid");
    }
})

// @desc Login a user
// @route POST /api/users/login/
// @access public
const loginUser = asyncHandler(async(req, res)=>{
    const { email, password } = req.body;
    if(!email || !password)
    {
        res.status(400);
        throw new Error("All fields are madatory");
    }
    const user = await User.findOne({ email });
    // Compare password with hasedPassword
    if(user && (await bcrypt.compare(password, user.password)))
    {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "1h"}
    );
        res.status(200).json({
            accessToken
        })
    }
    else
    {
        res.status(401);
        throw new Error("Email or password is not valid")
    }
})

// @desc Current user info
// @route POST /api/users/current/
// @access public
const currentUser = asyncHandler(async(req, res)=>{
    res.json(req.user)
})

module.exports = {
    registerUser, 
    loginUser,
    currentUser
}