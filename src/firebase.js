// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEDzdArIYZvMFghAHr2PQVw45ujQq57-M",
    authDomain: "twitter-clone-ee3a4.firebaseapp.com",
    databaseURL: "https://twitter-clone-ee3a4.firebaseio.com",
    projectId: "twitter-clone-ee3a4",
    storageBucket: "twitter-clone-ee3a4.appspot.com",
    messagingSenderId: "120358367494",
    appId: "1:120358367494:web:c0c19b75f2bc0e374dae87",
    measurementId: "G-5J5EWXB9RL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;