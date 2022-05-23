import firebase from "../FirebaseConnection"
import {Link} from 'react-router-dom'
import { toast} from 'react-toastify';


async function Cadastro(nome,email,usuario,senha){
    await firebase.firestore().collection('Teste')
    .doc('Teste')
    .set({
        Nome:nome,
        Senha:senha,
        Email:email,
        usuario:usuario

    })
    .then(()=>{
        <Link to='/' />
        {toast.success('Cadastro Realizado')}

    })
    .catch(()=>{
        {toast.fail('Cadastro mal sussedido')}

    })

}
export default Cadastro