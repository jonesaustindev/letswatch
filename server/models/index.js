const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.Promise = Promise;
// database connected //
mongoose.connect(process.env.MONGO_URI, {
    keepAlive: true
});

module.exports.User = require('./user');