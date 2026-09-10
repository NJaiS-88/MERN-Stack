const express = require('express');
const musicController = require('../controllers/music.controller');
const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middlewares');

const upload = multer({
    storage: multer.memoryStorage()
})

router = express.Router();

router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
router.post("/album", authMiddleware.authArtist, musicController.createAlbum);

router.get('/', authMiddleware.authUser, );

module.exports = router;