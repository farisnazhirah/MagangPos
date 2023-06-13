import {create} from 'zustand';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {FIREBASE_auth} from '../Config/FirebaseConfig';

const useAuthStore = create(set => {
  const initialState = {
    user: null,
    isLoggedIn: false,
  };

  const unsubscribe = onAuthStateChanged(FIREBASE_auth, user => {
    if (user) {
      set({user, isLoggedIn: true});
    } else {
      set(initialState);
    }
  });

  return {
    ...initialState,
    login: async (email, password) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          FIREBASE_auth,
          email,
          password,
        );
        const user = userCredential.user;
        set({user, isLoggedIn: true});
        console.log('Logged In with:', user.email);
      } catch (error) {
        console.log(error);
        alert('login gagal: ' + error.message);
      }
    },
    register: async (email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          FIREBASE_auth,
          email,
          password,
        );
        const user = userCredential.user;
        console.log('Registered with:', user.email);
      } catch (error) {
        console.log(error);
        alert('register gagal!: ' + error.message);
      }
    },
    logout: () => {
      try {
        signOut(FIREBASE_auth);
        set(initialState);
        console.log('Logged Out');
      } catch (error) {
        console.log(error);
        alert('logout gagal: ' + error.message);
      }
    },
    unsubscribe: () => {
      unsubscribe();
    },
  };
});

export default useAuthStore;
