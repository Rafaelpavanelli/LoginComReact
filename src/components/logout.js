import firebase from "../FirebaseConnection"
import { db } from '../FirebaseConnection';
import { collection, getDocs, query, where, doc, setDoc} from "firebase/firestore";

async function logout(){
    await firebase.auth().signOut();
}
export default logout