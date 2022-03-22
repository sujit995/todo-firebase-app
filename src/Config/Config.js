import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBk4I-kg18KHrcirZL99rfstsnKnBiKDDQ",
    authDomain: "todoapp-a2ca7.firebaseapp.com",
    projectId: "todoapp-a2ca7",
    storageBucket: "todoapp-a2ca7.appspot.com",
    messagingSenderId: "853010328540",
    appId: "1:853010328540:web:7cdde985092f886301fd19",
    measurementId: "G-53MWS7JW1N"
  };

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 