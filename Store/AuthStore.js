import { create } from "zustand";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_app, FIREBASE_auth} from '../Config/FirebaseConfig';
import { alert } from "antd-mobile/es/components/dialog/alert";

const auth = FIREBASE_auth;

const useAuthStore = create((set)=>({
    user: null, 

    register: (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=> {
            const user = userCredentials.user
            set(() => ({user}))
        })
        .catch((error)=> {
            console.log(error)
            alert('register gagal: ' + error.message)
        })

    //     try {
    //       const response = createUserWithEmailAndPassword(
    //         auth,
    //         email,
    //         password,
    //       );
    //       console.log(response);
    //       alert('Check email!');
    //     } catch (error) {
    //       console.log(error);
    //       alert('register gagal!: ' + error.message);
    //     }
    },

    login: (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=> {
            const user = userCredentials.user
            set(() => ({user}))
        })
        .catch((error)=> {
            console.log(error)
            alert('login gagal!: ' + error.message);
        })
    }
}))

export  {useAuthStore}