// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
export const FIREBASE_app = initializeApp(firebaseConfig);
export const FIREBASE_auth = getAuth(FIREBASE_app);

//Detect auth state
onAuthStateChanged(FIREBASE_auth, user => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No User')
  }
});
