const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {
    connect: () => {
    try{
        //transporter 
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        return transporter;
    }
    catch(error){
        console.log(error);
    }
}
}

