import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyANxma0sci-CsmxoVDr6eNc13PETmdBYc0",
    authDomain: "foro-de-quejas-b7f58.firebaseapp.com",
    projectId: "foro-de-quejas-b7f58",
    storageBucket: "foro-de-quejas-b7f58.appspot.com",
    messagingSenderId: "1022503813242",
    appId: "1:1022503813242:web:dbffeac8ffd7fb17a8fbc3"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
