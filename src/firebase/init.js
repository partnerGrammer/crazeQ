import firebase from 'firebase/app'

require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')
require('firebase/functions')

var firebaseConfig = {
    apiKey: "AIzaSyAXJ748gJgKC1O66r1rraIhMHixIBe8VnI",
    authDomain: "testdiegofirebaseyvuejs.firebaseapp.com",
    databaseURL: "https://testdiegofirebaseyvuejs.firebaseio.com",
    projectId: "testdiegofirebaseyvuejs",
    storageBucket: "testdiegofirebaseyvuejs.appspot.com",
    messagingSenderId: "902674652341",
    appId: "1:902674652341:web:9039351a07c8ef552a72fc",
    measurementId: "G-DZ85B0YF1G"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth()
    const db = firebase.firestore()
    const storage = firebase.storage()
    const functions = firebase.functions()
    const realdb = firebase.database()
  export { firebase, auth, db, storage, functions, realdb }
 