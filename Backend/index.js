//Setting express app
const express = require('express');
const app = express();
require("dotenv").config();//setting env file


//Importing model schema
const User = require('./models/users');
const Blogcontent = require("./models/BlogContent");

//Middlewares 
const bodyParser = require('body-parser');
const cors = require('cors');
const Jwt = require('jsonwebtoken');

// Middleware for parsing JSON in the request body
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

// const EventEmitter = require('eventemitter3');
// const emitter = new EventEmitter();
//emitter.setMaxListeners();


//Register user POST API working successfully...
app.post('/api/v1/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
    console.log({ result: "i am a working register api" });
});

//Login user Working Successfully
app.post('/api/v1/login', async (req, res) => {

    if (req.body.password && req.body.email) {

        let user = await User.findOne(req.body).select("-password");

        if (user) {
            Jwt.sign({ user }, process.env.JWT_KEY, (err, token) => {
                if (err) {
                    console.log({ result: "error while getting token" });
                }
                else {
                    res.send({ user, auth: token });
                }
            });

            console.log({ result: "i am a working login api" });
            //console.log(user, "User Logged In");
        }
        else {
            res.send({ result: "User not found" });
            //console.log("User Not Found");
        }
    }
    else {
        res.send({ result: "Check username and password" });
        //console.log("User Not Found");
    }
})

//Adding Blog content Successfully...
app.post('/api/v1/blogdata', async (req, res) => {
    let blogdata = new Blogcontent(req.body);
    let result = await blogdata.save();
    res.send(result);
    console.log("Blogdata stored successfully");
})

//Reading Blog data From database Successfully...
app.get('/api/v1/readblogdata', async (req, res) => {
    let blogres = await Blogcontent.find();
    if (blogres.length > 0) {
        res.send(blogres);
    }
    else {
        res.send({ result: "No Blogs Found" });
    }
    console.log("Blogdata read and displayed successfully");
})

//DeleteBlog Successfully
app.delete('/api/v1/deleteblog/:id', async (req, res) => {

    const result = await Blogcontent.deleteOne({ _id: req.params.id });
    res.send(result);
})

//Middlewares for cloudinary file upload
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// function Verifytoken(req, res, next) {

//     let token = req.headers['Authorization'];
//     if (token) {
//         console.log("middleware called", token)
//         token = token.split(' ')[1];
//         Jwt.verify(token, jwt_key, (err, valid) => {
//             if (err) {
//                 res.status(401).send("Please provide valid token");
//             }
//             else {
//                 next();
//             }
//         })
//     }
//     else {
//         res.status(403).send("Please Add token with header");
//     }
//     next();
// }

// connecting to DB
const db = require("./db/config");
db.connect();

// Activating Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App is running at PORT ${PORT}`);
})







