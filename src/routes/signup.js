const express = require('express');
const User = require('../models/user');

router = express.Router();

router.post('/', async (req, res) => {
    return res.sendStatus(200);
});

module.exports = router;