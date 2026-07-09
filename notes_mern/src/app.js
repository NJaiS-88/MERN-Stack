const express = require("express");
const noteModel = require('./models/note.model');
const app = express();
app.use(express.json());

app.post('/notes', async (req, res)=>{
    let val = req.body;
    await noteModel.create({
        title: val.title,
        description: val.description
    });

    res.status(200).json({
        "message": "note created successfully"
    });
})

app.get('/notes', async (req, res)=>{
    const result = await noteModel.find();
    res.status(200).json({
        "message":"notes fetched successfully",
        "notes":result
    }) ;
})

app.delete("/notes/:id", async (req, res)=>{
    const index = req.params.id;
    await noteModel.findOneAndDelete({
        _id: index
    });
    res.status(201).json({
        "message":"note deleted successfully"
    });
})

app.put("/notes/:id", async (req, res)=>{
    const index = req.params.id;
    const { title, description } = req.body;
    await noteModel.findOneAndUpdate({
        _id: index
    },{
        title, description
    });
    res.status(200).json({
        "message":"note updated successfully"
    });
})

module.exports = app;