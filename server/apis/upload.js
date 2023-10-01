const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

//------MongoDB Initialization------->
var mongoDB =
    "mongodb+srv://moeezramay1:police15SA@cluster0.a68rgqy.mongodb.net/PetFinder";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

var Schema = mongoose.Schema;

var UploadSchema = new Schema({
    fullname: String,
    catName: String,
    image: String,
});

var UploadData = mongoose.model("UploadData", UploadSchema, "UploadData");

const KEY = "asfasfgasghhgewgwedsgawsdg";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//-----------------Using multer for image storage---------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/Images");
    },
    filename: (req, file, cb) => {
        console.log(file);
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    },
});
const upload = multer({ storage });

//------------------^^^^^^^^^^^^^^^^^^^-----------------------------

module.exports = app.post(
    "/uploadedData",
    upload.single("petImage"),
    async (req, res) => {
        console.log("function called for upload reqest BODY:");

        if (!req.body) {
            res.status(400).json({ error: "Invalid request" });
            return;
        }
        return res.json({ message: "Checked" });
        // const { cat, owner, img } = req.body;

        // console.log("cat: " + cat + " owner: " + owner + "img: " + img);

        // var dataCreate = new UploadData({
        //     fullname: owner,
        //     catName: cat,
        //     image: imag,
        // });
        // try {
        //     await dataCreate.save();
        //     res.json({
        //         message: "Data sent!",
        //     });
        // } catch (error) {
        //     console.error("Error saving data:", error);
        //     res.status(500).json({ error: "Internal server error" });
        // }
    }
);
