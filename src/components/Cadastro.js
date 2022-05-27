import firebase from "../FirebaseConnection"
import {Link} from 'react-router-dom'
import { Firestore } from "firebase/firestore";
import { toast } from 'react-toastify';
import { collection, getDocs, query, where, doc, setDoc} from "firebase/firestore";
import { db } from '../FirebaseConnection';
import { v4 as uuidv4 } from 'uuid';
import { wait } from "@testing-library/user-event/dist/utils";

const Cadastro = async (props) => {
        if(props.nome!="" && props.userName!="" &&props.email!=""&&props.password!=""){
    console.log(props)
    await firebase.auth().createUserWithEmailAndPassword(props.email,props.password)
    .then((newUser)=>{
        console.log("cadastro no auth feito");
         firebase.firestore().collection('users')
        .doc(newUser.user.uid)
        .set({
            nome:props.name,
            userName:props.userName,
            senha:props.password,
            email:props.email

            
        })
       
    
    
    })  .catch((error)=>{
        if(error.code=='auth/weak-password'){
         toast.error('Senha Muito fraca')
         console.log(`Erro: ${error}`);  
        }
        else if(error.code=='auth/email-already-in-use'){
            toast.error('Senha Muito fraca')
         console.log(`Erro: ${error}`);  
        }
         else{
            toast.error('email incorreto')
             console.log(error);
         }})
     }

    }
   
    
    // await firebase.firestore().collection('Teste')
    // .doc('Teste')
    // .set({
    //     Nome:props.name,
    //     Senha:props.senha,
    //     Email:props.email,
    //     user:props.usuario

    // })


export default Cadastro