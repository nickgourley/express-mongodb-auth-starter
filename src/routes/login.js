const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { validate, loginValidation, ValidationError } = require('../utils/sanitize');
router = express.Router();



router.post('/', validate(loginValidation, {}, {}),
    async (req, res) => {
        if(!req.body.username || !req.body.password) {
            return res.sendStatus(403);
        }
        try {
            user = await User.findOne({
                username: req.body.username,
            });
            if(!user) {
                return res.sendStatus(403);
            }
            if(!user.validPassword(req.body.password)) {
                return res.sendStatus(403);
            }
            const token = jwt.sign({ "_id":user._id,"username":user.username }, process.env.JWT_SECRET)
            return res.json({ token });
        }
        catch(e) {
            console.log(e);
            return res.sendStatus(500);
        }
    }
);

router.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
});

module.exports = router;