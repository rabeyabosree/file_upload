const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// mongodb connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Mongodb Connected Successfully")
})
.catch((err)=>{
    console.log("mongodb connection error", err)
})

// import route file
const uploadRoute = require("./routes/uploadRoute")

app.use("/api", uploadRoute)

app.get("/", (req, res)=>{
    res.send("welcome to server")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})