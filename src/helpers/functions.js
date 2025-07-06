const nodemailer = require('nodemailer');
const { mailConfig } = require('../config/envconfig')


// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: mailConfig
});

const sendMail = async ({ to, subject, text, html }) => {
    try {
        console.log("mailConfig ==>", mailConfig)
        const info = await transporter.sendMail({
            from: '"From Raj" <dell75374@gmail.com>',
            to,
            subject,
            text, // plain‑text body
            html, // HTML body
        });

        console.log("Message sent:", info.messageId);
    } catch (error) {
        throw error;
    }

};

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};



module.exports = {
    sendMail,
    generateOTP
}