require("@dotenvx/dotenvx").config();

const PORT = process.env.PORT;

//Mail confg
const mailConfig = {
    user: process.env.MAIL_USER,
    pass: process.env.PASS_KEY
}


module.exports = {
    PORT,
    mailConfig
}
