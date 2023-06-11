// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDbYMo_orSr9cNRE8aalgEUZlaI_I_5Yvg',
  authDomain: 'fir-auth-ca86b.firebaseapp.com',
  projectId: 'fir-auth-ca86b',
  storageBucket: 'fir-auth-ca86b.appspot.com',
  messagingSenderId: '541028192658',
  appId: '1:541028192658:web:58a893bcefcdc1a67c714b',
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
