const express = require('express');
const app = express()
const path = require('path');
const { PORT } = require('./src/config/envconfig');
const router = require('./src/routes/baseRoute');

// JSON body data access middleware
app.use(express.json());

//Public access files
app.use('/assets', express.static(path.join((__dirname, 'src/public'))));

//Routes
app.get('/', (req, res) => {
    res.send("<h1 style='color: blue'>Hello Raj...</h1>")
})
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running of http:localhost:${PORT}`)
});
