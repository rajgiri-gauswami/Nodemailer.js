const { sendMail, generateOTP } = require('../helpers/functions');
const fs = require('fs');
const ejs = require('ejs');
const { PORT } = require('../config/envconfig');
const { log } = require('console');


const sendOTP = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        const emailTemplate = fs.readFileSync(`${__dirname}/../template/nodeMailer/sendOTP.ejs`, 'utf8');

        const renderTamplate = ejs.render(emailTemplate, {
            logoUrl: `https://0591-2409-40c1-315e-e4e9-303c-9974-dd3d-4d01.ngrok-free.app/assets/logo.png`,
            name,
            otpCode: generateOTP()
        })

        const sendMailData = {
            to: email,
            subject: "OTP Verification.",
            text: "Test Mail",
            html: renderTamplate
        }

        await sendMail(sendMailData);

        res.status(200).json({
            error: false,
            message: "OTP Send Successfuly.."
        }).end();

    } catch (error) {
        next(error);
    }
};

module.exports = {
    sendOTP
}