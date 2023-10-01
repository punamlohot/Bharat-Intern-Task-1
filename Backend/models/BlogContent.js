const mongoose = require("mongoose");
const nodemailer = require("../db/nodemailer"); // Import nodemailer

const FileSchema = new mongoose.Schema({
    imageFile: {
        type: String,
        required: [true, 'image is required']
    },
    desc: {
        type: String,
        require: [true, 'desc is required'],
    },
    blogbody: {
        type: String,
        require: [true, 'blogbody is required'],
    },
},
    { timestamps: true }
);

// post middleware
FileSchema.post("save", async function (doc) {
    try {
        console.log("DOC", doc)

        // connecting to nodemailer
        const transporter = nodemailer.connect();

        //send mail 
        let info = await transporter.sendMail({
            from: `lohotpm512@gmail.com`,
            to: doc.email,
            subject: "New File Uploaded on Cloudinary",
            html: `<h2>Hello ${doc.name} </h2> 
            <p>File has been successfully Uploaded </p>
            <p>View here: <a href="${doc.url}">${doc.url}</a></p>
            `,
        });

        console.log("INFO of mail", info);


    }
    catch (error) {
        console.error(error);
    }
})

const File = mongoose.model("File", FileSchema);
module.exports = File;