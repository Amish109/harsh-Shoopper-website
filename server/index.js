const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());


// Database connection with MongoDb
mongoose.connect("mongodb+srv://harshdev:Harsh%407781@cluster0.rpcl3.mongodb.net/shopper-website")

// API CREATION


app.get("/",(req,res)=>{
    res.send("Express app is running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    console.log("req",req)
  try {
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
  } catch (error) {
   res.send(error) 
  }
})

app.listen(port,(error)=>{
    if (!error) {
        console.log("Server running on port " + port)
    }
    else{
        console.log("Error : "+error);
        
    }
})