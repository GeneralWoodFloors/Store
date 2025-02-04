import react from 'react'
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import GalleryPage from './pages/Gallery'
import SingleImagePage from './pages/SingleImage'
import ProtectedRoute from './components/ProtectedRoute'
// import Admin from './pages/Admin'
import Navbar from './components/NavBar'
import About from './pages/About'
import Payment from './pages/Payment'
import UserProfile from './pages/UserProfile'
import Bookings from './pages/Booking'
import ContactUs from './pages/Contact'

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
      <Navbar element={<Navbar/>}/>
      <Routes>
        <Route path='/user' element= { 
          <ProtectedRoute> 
            <UserProfile/>
            {/* Include routes that will only be available when a person is logged in; example: user profiles, admin create*/}
          </ProtectedRoute>
          }/>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/logout' element= {<Logout/>}/>
          <Route path='/register' element= {<RegisterAndLogout/>}/>
          <Route path='/gallery' element= {<GalleryPage/>}/>
          <Route path='/gallery/:id' element= {<SingleImagePage/>}/>
          {/* <Route path='/admin' element={<Admin/>}/> */}
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/booking' element={<Bookings/>}/>
          <Route path='*' element= {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

// anything inside the protected route can not be accessed unless they have access
// * -> if anything else; will redirect to the NotFound
 

export default App
