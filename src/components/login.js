import firebase from "../FirebaseConnection"
import { db } from '../FirebaseConnection';
import {Link, Redirect} from 'react-router-dom'
import { collection, getDocs, query, where, doc, setDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import Users from "../Pages/Users";
import { toast} from 'react-toastify';



 



 export default Login