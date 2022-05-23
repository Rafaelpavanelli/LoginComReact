import firebase from "firebase/compat/app";
import "firebase/compat/auth";  
import "firebase/compat/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBcTBmEx7qR5qv_bIxVc0p13aYD7rf-iWo",
    authDomain: "betadev-e39d6.firebaseapp.com",
    projectId: "betadev-e39d6",
    storageBucket: "betadev-e39d6.appspot.com",
    messagingSenderId: "587797521936",
    appId: "1:587797521936:web:ab019d0f432d4e40748c95",
    measurementId: "G-XF2ZN5KECD"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase;
 
