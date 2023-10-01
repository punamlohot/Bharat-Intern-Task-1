const express = require("express");
const router = express.Router();

const {imageUpload} = require('../Controllers/fileUpload');

//api routes
router.post("/Imageupload", imageUpload);

module.exports = router;