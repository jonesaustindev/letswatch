require('dotenv').load();
const jwt = require('jsonwebtoken');

// make sure the user is logged in
exports.loginRequired = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer token:lkasdjfl;jasdf
        jwt.verify(token, process.env.SECRET_KEY, function (err, payload) {
            if (payload) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Please log in first"
                });
            }
        });
    } catch (e) {
        return next({
            status: 401,
            message: "Please log in first"
        });
    }
};

// make sure it is the correct user
exports.ensureCorrectUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY, function (err, payload) {
            if (payload && payload.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Unauthorized"
                });
            }
        });
    } catch (error) {
        return next({
            status: 401,
            message: "Unauthorized"
        });
    }
};