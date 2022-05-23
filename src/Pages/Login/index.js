import './login.modules.css'
import '../../routes'
import {Link} from 'react-router-dom'
import firebase from '../../FirebaseConnection'
import Icon from './Business merger-amico.png'
import { useState } from 'react'

function Login(){
    const [user,setUser]=useState('')
    const [senha,setSenha]=useState('')
   
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
                        <input type='text' name='usuario' value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Usuario'/>
                    </div>
                    <div className='textfield'>
                        <label for='senha'>Senha</label>
                        <input type='password' name='senha' value={senha} onChange={(e)=>setSenha(e.target.value)}placeholder='Senha'/>
                    </div>
                    <button className='btn-login' onClick={''}>Login</button>
                    <p className='p-cadastro'>Não é cadastrado?</p>
                    <Link className='link-login' name='login' to='/register'>cadastrar-se</Link>
                </div>
            </div>
        </main>
        
      
        
               
                
            
       
    )
    
}
export default Login