import './register.modules.css'
function Register(){
    return(
        <main>
            <div className='cadastrar'>
                <div className='textfield'>
                <label for='Nome'>Nome Completo</label>
                <input type='text' name='Nome' placeholder='Digite seu nome'/>
                </div>
                <div className='textfield'>
                <label for='Senha'>senha</label>
                <input type='text' name='Senha' placeholder='Digite sua senha'/>
                </div>
                <div className='textfield'>
                <label for='email'>Seu Email</label>
                <input type='text' name='email' placeholder='Digite seu email'/>
                </div>
                
            </div>
        </main>

    )
}
export default Register