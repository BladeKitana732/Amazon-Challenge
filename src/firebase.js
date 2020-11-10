// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBKgXEXCN7Z3yM5MXgpYn3U2o6rmfAk6ps",
    authDomain: "clone-1a35a.firebaseapp.com",
    databaseURL: "https://clone-1a35a.firebaseio.com",
    projectId: "clone-1a35a",
    storageBucket: "clone-1a35a.appspot.com",
    messagingSenderId: "601210558595",
    appId: "1:601210558595:web:ece94a3af418fe5ba263b6",
    measurementId: "G-NRVZ8ED9D2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// db = database
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth};