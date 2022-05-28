import {FaUserAstronaut} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { toast} from 'react-toastify';
import logout from '../../../components/logout';


import Login from '../../Login'

import './Navbar.modules.css'
function Navbar(user){
    return(
            <header>
                <h1>BetaDev</h1>
                <div className="User">
                    <p>`{user.nome}`</p>
                    <button onClick={()=>{
                        <logout />
                        toast.success('Logout Realizado')}}>Logout</button>
                    
                     </div>
            </header>
    )
}
export default Navbar