const router = (require('express')).Router();
const sendMailRoutes = require('./sendMail');
router.use('/mail', sendMailRoutes);

// Error Handling Middleware 
router.use((err, req, res, next) => {
    console.error(err.stack);

    return res.status(500).json({
        error: true,
        message: err.message
    }).end();
})

//404 handle
router.use((req, res) => {
    console.log("404")
    return res.status(404).json({
        error: true,
        message: "Not Found."
    })
})

module.exports = router;