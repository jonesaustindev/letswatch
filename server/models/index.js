const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
// database connected //
mongoose.connect(process.env.MONGO_URI, {
    keepAlive: true
});

module.exports.User = require('./user');