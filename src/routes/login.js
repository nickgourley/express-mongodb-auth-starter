const express = require('express');

router = express.Router();

router.get('/', (req, res) => {
    return res.send('Login route');
});

module.exports = router;