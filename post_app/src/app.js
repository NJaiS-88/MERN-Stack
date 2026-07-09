const express = require('express');
const multer = require("multer");
const postModel = require("./models/post.model");
const uploadImage = require("./services/imagekit.service");

const app = express();
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage()
});

app.post('/create-post',upload.single("image"), async (req, res)=>{
    const result = await uploadImage(req.file.buffer);
    await postModel.create({
        image: result.url,
        postdesc: req.body.postdesc
    });
    res.status(200).json({ message: "post created successfully" });
})

app.get("/get-post", async (req, res)=>{
    const val = await postModel.find();
    res.status(200).json({
        "message": "data fetched successfully",
        "data": val
    });
})

module.exports = app;