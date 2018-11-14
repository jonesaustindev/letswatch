const jwt = require('jsonwebtoken');
const db = require('../models');

exports.signin = async function (req, res, next) {
    // find a user
    try {
        let user = await db.User.findOne({
            email: req.body.email
        });
        let { id, username } = user;
        let isMatch = await user.comparePassword(req.body.password);
        // checking if password matches what was sent to the server
        if (isMatch) {
            let token = jwt.sign({
                id,
                username
            }, process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                username,
                token
            });
        } else {
            return next({
                status: 400,
                message: "Invalid Email/Password."
            });
        }
    } catch (e) {
        return next({ status: 400, message: "Invalid Email/Password." });
    }
}

exports.signup = async function (req, res, next) {
    try {
        // create a user
        let user = await db.User.create(req.body);
        let { id, username } = user;
        // create a token (signing a token)
        let token = jwt.sign({
            id,
            username
        }, process.env.SECRET_KEY);
        // process.env.SECRET_KEY
        return res.status(200).json({
            id,
            username,
            token
        });
    } catch (err) {
        // if validation fails
        if (err.code === 11000) {
            err.message = "Sorry, that username and/or email is taken";
        }
        return next({
            status: 400,
            message: err.message
        });
        // see what kind of error
        // if it is a certain error
        // respond with username/email already taken
        // otherwise just send back a generic 400
    }
}
