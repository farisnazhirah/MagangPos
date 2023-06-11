import { create } from 'zustand';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {FIREBASE_auth} from '../Config/FirebaseConfig';

const useAuthStore = create(set => ({
  user: null,
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_auth,
        email,
        password,
      );
      const user = userCredential.user;
      set({user});
      console.log('Logged In with:', user.email);
    } catch (error) {
      console.log(error);
      alert('login gagal!: ' + error.message);
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
      alert('register berhasil! silahkan ke halaman login');
    } catch (error) {
      console.log(error);
      alert('register gagal!: ' + error.message);
    }
  },
}));

export default useAuthStore;
