const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY
    }),
    databaseURL: 'https://fast-feedback.firebaseio.com'
  });
}

const auth = admin.auth();
const db = admin.firestore();
export { auth, db };
