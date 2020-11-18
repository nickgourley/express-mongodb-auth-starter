const express = require('express');
const User = require('../models/user');

router = express.Router();

router.post('/', async (req, res) => {
    if(!req.body.username || !req.body.password) {
        return res.sendStatus(400);
    }
    try {
        user = await User.findOne({
            username: req.body.username,
        });
        if(user) {
            return res.sendStatus(400);
        }
        var newUser = new User({
            "username": req.body.username,
        });
        newUser.password = newUser.generateHash(req.body.password);
        newUser.save();
        return res.json({ "_id": newUser._id, "username": newUser.username });
    }
    catch(e) {
        console.log(e);
        return res.sendStatus(500);
    }
});

module.exports = router;