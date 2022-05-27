import firebase from "../FirebaseConnection"
import { db } from '../FirebaseConnection';
import { collection, getDocs, query, where, doc, setDoc} from "firebase/firestore";
import { useEffect } from "react";



async function Login(user){
   await firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then((props)=>
       console.log(props.user.uid)
    )
    .catch((error)=>
       console.log(error)
    )
    }

 export default Login