import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import React from 'react'
import  Register from './Pages/Register'
import Login from './Pages/Login'

function RoutesApp(){
    return(
        <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register />} />
          


        </Routes>
      </Router>
    
    )
}
export default RoutesApp