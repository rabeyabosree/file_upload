const multer = require("multer");
const cloudinary = require("../utilis/cloudinary")
const { CloudinaryStorage } = require('multer-storage-cloudinary')


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: "Education",
        resurceType: 'auto'
    }
})

const upload = multer({ storage: storage})
module.exports = upload;