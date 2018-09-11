require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// firebase testing //

// const docRef = db.collection('users').doc('alovelace');

// const setAda = docRef.set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
// });

// const aTuringRef = db.collection('users').doc('aturing');

// const setAlan = aTuringRef.set({
//   'first': 'Alan',
//   'middle': 'Mathison',
//   'last': 'Turing',
//   'born': 1912
// });

// const addUser = db.collection('users').doc();

// const setJoeBob = addUser.set({
//     'first': 'Joe',
//     'last': 'Bob',
//     'born': 1985
// });

// // const setJohnDoe = userDB.set({
// //     'first': 'John',
// //     'last': 'Doe',
// //     'born': 1980
// // });

// const userRef = db.collection('users');
// const query = userRef.where('first', '==', 'John').get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             console.log(doc.id, '=>', doc.data());
//         });
//     })
//     .catch(err => {
//         console.log('Error getting documents', err);
//     });

// const query2 = userRef.where('first', '==', 'Joe').get()
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             console.log(doc.id, '=>', doc.data());
//         });
//     })
//     .catch(err => {
//         console.log('Error getting documents', err);
//     });

const email = 'email@email.com';
const pass = '1234';

db.auth.createUserWithEmailAndPassword(email, pass)
    .catch(err => {
        console.log(err.message);
    });

db.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
    }
})


// end testing //

// routes //

// app.use('/api/auth', authRoutes);

// end routes //

// errors //
// app.use(function (req, res, next) {
//     let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Let's Watch server started on port ${PORT}`);
});