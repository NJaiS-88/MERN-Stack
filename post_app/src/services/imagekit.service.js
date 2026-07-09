const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGE_KIT_KEY, // This is the default and can be omitted
});


async function uploadImage(buffer){
    const responce = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });
    return responce;
}

module.exports = uploadImage;

