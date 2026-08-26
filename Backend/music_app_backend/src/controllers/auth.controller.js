const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
async function registerUser(req, res) {
    const { username,email, password, role="user" } = req.body;
    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    });

    if(isUserAlreadyExists){
        return res.json(409).json({
            message: "User already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "user cretaed successfully",
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    })
}

async function loginUser(req, res){
    const {username, email, password} = req.body;
    const user = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    });
    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        res.status(401).json({
            message: "Invalid credentials"
        });
    }
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        message: "User successfully logged in",
        user:{
            id: user._id,
            username: user.username,
            email : user.email,
            role: user.role
        }
    });    
}

async function logoutUser(req, res){
    res.clearCookie('token')
    res.status(200).json({
        message: "User logged out successfully"
    })
}

module.exports = {registerUser, loginUser, logoutUser};