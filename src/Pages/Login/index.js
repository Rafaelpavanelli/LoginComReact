
import './login.modules.css'
import '../../routes'
import {FcGoogle} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import firebase from '../../FirebaseConnection'
import Icon from './Business merger-amico.png'

import { useState } from 'react'
import Users from '../Users'


       
       
       
       

 
function Login(){
    const[usuario,setUsuario]=useState({})
   async function login(user){
   await firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(async(value)=>{
        await firebase.firestore().collection('users')
        .doc(value.user.uid)
        .get()
        .then((snapshot)=>{
            console.log("Login Realizado");
            setUsuario({
                nome:snapshot.data().nome
            })
            
        })
    })

    }
   
    const[user, setUser] = useState({
        email: 'gvxvvfbgx@gmail.com',
        password: 'rafael330',
    })
   
    return(
      
        <main>
            <div className='left-login'>
                <h1> 
                   BetaDev
                </h1>
              <img src={Icon} className='login-image'/>
            </div>
            <div className='right-login'>
                <div className='card-login'>
                    <h1>Login</h1>
                    <div className='textfield'>
                        <label htmlFor='usuario' onChange={setUser}>Usuário</label>
                        <input type='text' name='usuario' value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} placeholder='Usuario'/>
                    </div>
                    <div className='textfield'>
                        <label htmlFor='senha'>Senha</label>
                        <input type='password' name='senha' value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}placeholder='Senha'/>
                    </div>
                    <button className='btn-login' onClick={()=>login(user)}>Login</button>
                    <p className='p-cadastro'>Não é cadastrado?</p>
                    <Link className='link-login' name='login' to='/register'>cadastrar-se</Link>
                </div>
            </div>
        </main>
        
      
        
               
                
            
       
    )
    
}
export default Login