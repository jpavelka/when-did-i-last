import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo8BDIF3Ds5t8WHC_FKOTyWPEihv8wDio",
  authDomain: "playground-255411.firebaseapp.com",
  projectId: "playground-255411",
  storageBucket: "playground-255411.appspot.com",
  messagingSenderId: "421955161008",
  appId: "1:421955161008:web:c7b455c75f3c7530eca475",
  measurementId: "G-WJB49PQFR7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signOutFunc = () => signOut(auth).then(() => {
    console.log('signed out');
}).catch((error) => {
    console.log('oops, could not sign out', error);
});

export const signInFunc = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
      console.log(error);
  });
}