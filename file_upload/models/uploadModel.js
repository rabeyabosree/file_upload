const mongoose = require("mongoose");


const uploadShema = new mongoose.Schema({
    singleImg: {
        type: String,
    },
    multipleImg: {
        type: [String]
    },
    video: {
        type: String
    }

})


const UploadFile = mongoose.model("UploadFile", uploadShema);
module.exports = UploadFile;