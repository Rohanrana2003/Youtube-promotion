const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // You'll get this from Firebase console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://promotion-data-86210.firebaseio.com"
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };
