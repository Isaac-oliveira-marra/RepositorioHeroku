const cloudinary = require("cloudinary").v2
require('dotenv').config()

cloudinary.config({
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
});

module.exports = cloudinary;