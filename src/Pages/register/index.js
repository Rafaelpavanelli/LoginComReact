import './register.modules.css'
import '../../routes'
import {Link} from 'react-router-dom'
import Icon from './Milestones of business projects-amico.png'
import { useState } from 'react'
import Cadastro from '../../components/Cadastro'
function Register(){
    const[nome,setNome]=useState('')
    const[email,setEmail]=useState('')
    const[user,setUser]=useState('')
    const[senha,setSenha]=useState('')
    return(
           
           <main>
               
            <div className='left-register'>
                <h1> 
                  Cadastro
                </h1>
              <img src={Icon} className='register-image'/>
            </div>
            <div className='right-register'>
                <div className='card-register'>
                    <h1>Cadastro</h1>
                    <div className='textfield'>
                        <label for='nome'>Nome</label>
                        <input type='text' name='nome' value={user} onChange={(e)=>setUser(e.target.value)}placeholder='Nome Completo'/>
                    </div>
                    <div className='textfield'>
                        <label for='usuario'>Usuário</label>
                        <input type='text' name='usuario' placeholder='Usuario'/>
                    </div>
                    <div className='textfield'>
                        <label for='email'>Email</label>
                        <input type='email' name='email' placeholder='Email'/>
                    </div>
                    <div className='textfield'>
                        <label for='senha'>Senha</label>
                        <input type='password' name='senha' placeholder='Senha'/>
                    </div>
                
                    <button className='btn-register' 
                    onClick={()=>{<Cadastro 
                    nome={nome}
                     usuario={user} email={email} senha={senha}  />}}>Cadastrar</button>
                    <label for='login' className='p-cadastro'>Ja tem login</label>
                    <Link className='link-login' name='login' to='/'>Login</Link>
                </div>
            </div>
        </main>
        
           
        

    )
}
export default Register