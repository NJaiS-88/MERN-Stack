const express = require('express');

const app = express();
app.use(express.json());

let notes=[];
app.post('/notes', (req, res)=>{
    let val = req.body;
    notes.push(val);
    res.status(201).json({
        "message": "note created successfully"
    });
})

app.get('/notes', (req, res)=>{
    res.status(200).json({
        notes
    });
})

app.delete('/notes/:index', (req, res)=>{
    let index = req.params.index;
    delete notes[index];

    res.status(200).json({
        "message":"note deleted successfully"
    });
})


app.put('/notes/:index', (req, res)=>{
    let index = req.params.index;
    let desc = req.body.description;
    notes[index].description =  desc;
    res.status(201).json({
        "message":`${index} note updated successfully`
    });
})


module.exports = app;