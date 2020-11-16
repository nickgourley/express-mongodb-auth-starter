const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    return res.json({ "message": "Hello World!" });
})

app.listen(process.env.PORT, () => {
    console.log(`${process.env.APP_NAME} listening on port ${process.env.PORT}.`);
});