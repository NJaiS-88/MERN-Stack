import User from '../models/user.model.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

async function register(req, res) {
    const { username, email, password } = req.body;

    const isAlreadyRegistered = await User.findOne({ 
        $or:[
            { username: username },
            { email: email }
        ]
    });
    if (isAlreadyRegistered) {
        return res.status(400).json({ message: 'User already registered' });
    }

    const hashedPassword = await crypto.createHash('sha256').update(password).digest('hex');
    try {
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JSON_WEB_TOKEN_SECRET, { expiresIn: '7d' });
        res.status(201).json({ message: 'User registered successfully', user: newUser, token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default { register };