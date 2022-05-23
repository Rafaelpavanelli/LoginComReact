import firebase from "../FirebaseConnection"
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import { collection, getDocs, query, where, doc, setDoc} from "firebase/firestore";
import { db } from '../FirebaseConnection';
import { v4 as uuidv4 } from 'uuid';

const Cadastro = async (props) => {
    console.log(props)

    await setDoc(doc(db, "Users", uuidv4()), props)
    .then(()=>{
        toast.success('Cadastro Realizado')
             
    })
    .catch((error)=>{
        toast.error('Cadastro mal sussedido')
        console.log(`Erro: ${error}`);    
    })

    // await firebase.firestore().collection('Teste')
    // .doc('Teste')
    // .set({
    //     Nome:props.name,
    //     Senha:props.senha,
    //     Email:props.email,
    //     user:props.usuario

    // })

}
export default Cadastro