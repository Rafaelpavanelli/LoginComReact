
import './login.modules.css'
import '../../routes'
import {FcGoogle} from 'react-icons/fc'
import {Link} from 'react-router-dom'
import firebase from '../../FirebaseConnection'
import Icon from './Business merger-amico.png'
import login from '../../components/login'
import { useState } from 'react'

function Login(){
   
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
                        <label for='usuario' onChange={setUser}>Usuário</label>
                        <input type='text' name='usuario' value={user.name} onChange={(e)=>setUser({...user, email: e.target.value})} placeholder='Usuario'/>
                    </div>
                    <div className='textfield'>
                        <label for='senha'>Senha</label>
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