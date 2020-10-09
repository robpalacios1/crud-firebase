import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDC_dVI3C23R79QTR0SRQt5D5a6QLnh8Y",
    authDomain: "crud-firestore-91a1f.firebaseapp.com",
    databaseURL: "https://crud-firestore-91a1f.firebaseio.com",
    projectId: "crud-firestore-91a1f",
    storageBucket: "crud-firestore-91a1f.appspot.com",
    messagingSenderId: "947777666357",
    appId: "1:947777666357:web:4ec5f849380935e58b207c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}