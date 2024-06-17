// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';


// Replace with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail' or 'yahoo'
    auth: {
        user: 'choutsav77@gmail.com',
        pass: 'qrcm jxpz dnqz xhpr'
    }
});


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// const htmlTemplet = fs.readFileSync('otpTemplateWhite.html', 'utf-8')
const htmlTemplate = fs.readFileSync(path.join(__dirname, 'invoice.html'), 'utf-8');
// Email options
const mailOptions = {
    from: 'choutsav77@gmail.com',
    to: 'vchovatiya992@gmail.com',
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email sent using Node.js and Nodemailer!',
    html: htmlTemplate,
    attachments: [
        {
            filename: 'logo.png',
            path: './images/logo.png',
            cid: 'logo.png', //same cid value as in the html img src
        },
        {
            filename: 'facebook-icon.png',
            path: './images/facebook-icon.png',
            cid: 'facebook-icon.png', //same cid value as in the html img src
        },
        {
            filename: 'twitter-icon.png',
            path: './images/twitter-icon.png',
            cid: 'twitter-icon.png', //same cid value as in the html img src
        },
        {
            filename: 'instagram-icon.png',
            path: './images/instagram-icon.png',
            cid: 'instagram-icon.png', //same cid value as in the html img src
        },
        {
            filename: 'phone-icon.png',
            path: './images/phone-icon.png',
            cid: 'phone-icon.png', //same cid value as in the html img src
        },
        {
            filename: 'email-icon.png',
            path: './images/email-icon.png',
            cid: 'email-icon.png', //same cid value as in the html img src
        },
        {
            filename: 'web-icon.png',
            path: './images/web-icon.png',
            cid: 'web-icon.png', //same cid value as in the html img src
        },
    ]
    // attachments: [
    //     {
    //         filename: 'logo.png', // Filename to be displayed in the email
    //         content: imageAttachment, // Content of the logo image
    //         encoding: 'base64', // Encoding of the image content
    //         cid: 'uniqueImageCID' // Content-ID for cid embedding
    //     }
    // ]
};


// Send email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
