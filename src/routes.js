import {BrowserRouter,Router,Route} from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Home/Sobre'
import register from './Pages/register'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Router>
         
            <Route component={ register} element='register'/>
            
         </Router>
        </BrowserRouter>
    )
}
export default RoutesApp