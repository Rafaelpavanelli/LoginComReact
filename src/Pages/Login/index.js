import './login.modules.css'
import RoutesApp from '../../routes';
import {Router,Link} from 'react-router-dom'
import Register from '../register';
import Icon from './Business merger-amico.png'

import { FaUserAstronaut } from 'react-icons/fa';


function Login(){
    
   
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
                        <label for='usuario'>Usuário</label>
                        <input type='text' name='usuario' placeholder='Usuario'/>
                    </div>
                    <div className='textfield'>
                        <label for='senha'>Senha</label>
                        <input type='password' name='senha' placeholder='Senha'/>
                    </div>
                    <button className='btn-login' onClick={''}>Login</button>
                    <p className='p-cadastro'>Não é cadastrado?</p>
                    <button className='btn-cadastro' onClick={<Link to="/register"/>}>Registrar</button>
                </div>
            </div>
        </main>
        
      
        
               
                
            
       
    )
    
}
export default Login