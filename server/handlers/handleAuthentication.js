'use strict';

const admin = require('firebase-admin');
const {
  getUser,
  queryDatabase,
} = require('../utils/authUtils');

require('dotenv').config({path: '../.env'});

admin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
  }),
  databaseURL: process.env.FB_DATABASE_URL,
});

const db = admin.database();

const createUser = async (req, res) => {
  const returningUser = (await getUser(req.body.email, db));
  const appUsersRef = db.ref('appUsers');

  if (returningUser) {
    res.status(200).json({
      status: 200,
      data: req.body,
      message: 'returning user',
    });
  }
  else {
    appUsersRef.push(req.body).then(() => {
      res.status(200).json({
        status: 200,
        data: req.body,
        message: 'new user',
      });
    });
  }
};

async function authenticateAdmin(req, res) {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)

    if (decodedToken.admin) {
      res.status(201).json({ status: 201, decodedToken });
    }
    else {
      res.status(401).json({ status: 401, message: 'Invalid User' });
    }
  }
  catch (error) {
    res.status(401).json({ status: 401, message: error });
  }
}

async function updateUser(data) {
  const { email } = data;
  const user = (await getUser(email, db));
  const appUsersRef = db.ref('appUsers');

  appUsersRef.child(user.userID).update(data);
}

module.exports = {
  createUser,
  updateUser,
  authenticateAdmin,
};
