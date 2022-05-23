import {FaUserAstronaut} from 'react-icons/fa'
import './Navbar.modules.css'
function Navbar(){
    return(
            <header>
                <h1>BetaDev</h1>
                <div className="User">
                    <p>Nome do Usuario</p>
                    <FaUserAstronaut/>
                    
                </div>
            </header>
    )
}
export default Navbar