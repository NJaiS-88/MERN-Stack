const musicModel = require('../models/music.model');
const {uploadFile} = require('../services/storage.services');
const userModel = require('../models/user.model');
const albumModel = require('../models/album.model');
const jwt = require('jsonwebtoken');

async function createMusic(req, res) {
    
const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'));

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })

    res.status(201).json({
        message:"music created successfully",
        music:{
            id: music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist
        }
    })
}

async function createAlbum(req, res){
    const {title, musics} = req.body;

    const album = await albumModel.create({
        title,
        musics,
        artist: req.user.id
    })
    res.status(201).json({
        message: "Album created successfully",
        album
    })
}


async function getAllMusics(req, res){
    const musics = await musicModel.find().populate('artist', 'username email');
    res.status(200).json({
        message: "All musics fetched successfully",
        musics
    })
}



module.exports = {createMusic, createAlbum};