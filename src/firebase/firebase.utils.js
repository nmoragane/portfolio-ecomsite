// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW6wwbyxAiCkSHBcuXQ9qo3Ny9uUJMQS8",
  authDomain: "clothingstore-57ad4.firebaseapp.com",
  projectId: "clothingstore-57ad4",
  storageBucket: "clothingstore-57ad4.appspot.com",
  messagingSenderId: "903200728585",
  appId: "1:903200728585:web:15d9ffa8adf4f30fd0fad8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase;


