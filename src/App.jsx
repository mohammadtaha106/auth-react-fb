import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './components/Navbar'

import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth'
function App() {
 
  return (
    <>
   <BrowserRouter>
   
<Navbar/>
   <Routes>
      
<Route path='/' element={<Auth/>}/>
<Route  path='/signup' element={<SignUp/>}/>
<Route  path='/signin' element={<SignIn/>}/>


</Routes>

   </BrowserRouter>
  

  
   
    </>
  )
}

export default App
