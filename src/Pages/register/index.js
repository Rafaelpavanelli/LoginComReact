import './register.modules.css'
import '../../routes'
import {Link} from 'react-router-dom'
import Icon from './Milestones of business projects-amico.png'
function Register(){
    return(
        
           <main>
            <div className='left-login'>
                <h1> 
                  Cadastro
                </h1>
              <img src={Icon} className='login-image'/>
            </div>
            <div className='right-login'>
                <div className='card-login'>
                    <h1>Cadastro</h1>
                    <div className='textfield'>
                        <label for='nome'>Nome</label>
                        <input type='text' name='nome' placeholder='Nome Completo'/>
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
                
                    <button className='btn-login' onClick={''}>Cadastrar</button>
                    <p className='p-cadastro'>Ja tem login</p>
                    <Link to='/'>Login</Link>
                </div>
            </div>
        </main>
        
           
        

    )
}
export default Register