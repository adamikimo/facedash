import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCA-7B665Z_N_f5FjcEjCJ1KwRhztJPmrk",
    authDomain: "fb-mern-backend2.firebaseapp.com",
    databaseURL: "https://fb-mern-backend2-default-rtdb.firebaseio.com",
    projectId: "fb-mern-backend2",
    storageBucket: "fb-mern-backend2.appspot.com",
    messagingSenderId: "334991999521",
    appId: "1:334991999521:web:474d9c567c11ff8ec5d960",
    measurementId: "G-XRYCV19XHF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, provider };
export default db;