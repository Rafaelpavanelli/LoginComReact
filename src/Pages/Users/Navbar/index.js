import {FaUserAstronaut} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { toast} from 'react-toastify';


import Login from '../../Login'

import './Navbar.modules.css'
function Navbar(){
    return(
            <header>
                <h1>BetaDev</h1>
                <div className="User">
                    <p>Nome do Usuario</p>
                    <FaUserAstronaut/>
                    <Link to= '/ '><button onClick={()=>{toast.success('Logout Realizado')}}>Logout</button></Link>
                    
                     </div>
            </header>
    )
}
export default Navbar