const mongoose = require('mongoose');

const albumSchema = new mongoose.createSchema({
    title:{
        type:String,
        required:true
    },
    musics:[{
        type: mongoose.Schema.Types.objectId,
        ref:"music"
    }],
    artist:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"user",
        required:true
    }
})

const albumModel = mongoose.model("album", albumSchema);

module.exports = albumModel;