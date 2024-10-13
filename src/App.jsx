import React from 'react'
import './App.css'
import { Home } from './Componenet/Home'
import { Route, Routes } from 'react-router-dom'
import { About } from './Componenet/About'
import { Service } from './Componenet/Service'
import { Contact } from './Componenet/Contact'
import { Navbar } from './Componenet/Navbar'


function App() {

  return (
      <>
       <Navbar/>
       
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
      
      </>
    )
}

export default App
