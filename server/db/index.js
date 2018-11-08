const admin = require('firebase-admin');

const serviceAccount = require('../let-s-watch-abc3f2a07b7d.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin;

module.exports = db;