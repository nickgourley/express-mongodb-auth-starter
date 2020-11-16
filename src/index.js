const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const login = require('./routes/login');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1/testDB2', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/login', login);

app.get('/', (req, res) => {
    return res.json({ "message": "Hello World!" });
})

app.listen(process.env.PORT, () => {
    console.log(`${process.env.APP_NAME} listening on port ${process.env.PORT}.`);
});