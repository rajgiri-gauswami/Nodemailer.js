const router = (require('express')).Router();
const { sendOTP } = require('../controllers/sendMail')

router.post('/send-otp', sendOTP);

module.exports = router;