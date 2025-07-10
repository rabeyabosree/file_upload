const express = require("express");
const upload = require("../utilis/multer")

const router = express.Router();

router.post("/upload", upload.fields([{ name: "multipleImg", maxCount: 2 }, { name: "singleImg", maxCount: 1 }, { name: "video", maxCount: 1 }]), (req, res) => {
    try {

        const multipleImg = req.files.multipleImg
        const singleImg = req.files.singleImg?.[0]
        const video = req.files.video?.[0]
        console.log(multipleImg)
        res.status(200).json({ message: "Img file uploaded successfully" })
    }
    catch (error) {
        res.status(500).json({ message: "server error" }, error)
    }
})


module.exports = router