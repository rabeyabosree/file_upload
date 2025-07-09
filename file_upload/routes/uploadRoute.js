const express = require("express");
const upload = require("../utilis/multer")

const router = express.Router();

router.post("/upload", upload.array("multipleImg", 2), (req, res) => {
    try {
        const { singleImg } = req.file;
        

        res.status(200).json({ message: "Img file uploaded successfully" })
    }
    catch (error) {
        res.status(500).json({ message: "server error" }, error)
    }
})


module.exports = router