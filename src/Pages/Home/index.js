import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
            <h1>Bem Vindo a pagina Home</h1>
            <Link to='/Sobre'>Sobre</Link>

        </div>
    )
}
export default Home