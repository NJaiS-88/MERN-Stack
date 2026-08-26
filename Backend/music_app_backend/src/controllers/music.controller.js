const musicModel = require('../models/music.model');
const {uploadFile} = require('../services/storage.services');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function createMusic(req, res) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try{
        const decoded_1 = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded_1);
        const decoded = await userModel.findOne({
            _id : decoded_1.id
        });
        console.log(decoded);

        if (decoded.role!="artist"){
            return res.status(403).json({
                message: "You dont have access to create music"
            })
        }
        const {title} = req.body;
        const file = req.file;

        const result = await uploadFile(file.buffer.toString('base64'));

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: decoded._id
        })

        res.status(201).json({
            message:"mysic created successfully",
            music:{
                id: music._id,
                uri:music.uri,
                title:music.title,
                artist:music.artist
            }
        })

    }catch(err){
        console.log(err);
        return res.status(401).json({

            message : "Unauthorized"
        })
    }
}

module.exports = {createMusic};