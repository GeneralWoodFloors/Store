import react from 'react'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Gallery from './pages/Gallery'
import ProtectedRoute from './components/ProtectedRoute'

function Logout () {
   localStorage.clear()
   return <Navigate to="/login"/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register/>
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { 
          <ProtectedRoute> 
            <Home/>
          </ProtectedRoute>
          }/>

          <Route path='/login' element= {<Login/>}/>
          <Route path='/logout' element= {<Logout/>}/>
          <Route path='/register' element= {<RegisterAndLogout/>}/>
          <Route path='/gallery' element= {<Gallery/>}/>
          <Route path='*' element= {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

// anything inside the protected route can not be accessed unless they have access
// * -> if anything else; will redirect to the NotFound
 

export default App
