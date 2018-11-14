require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const db = require('./models');
const authRoutes = require('./routes/auth');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Headers: Content-Type');
// })

// routes //
app.use(
    '/api/auth', 
    authRoutes
);
app.use(
    '/api/users/:id/likes',
    loginRequired,
    ensureCorrectUser
);

// errors //
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Let's Watch server started on port ${PORT}`);
});