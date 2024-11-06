import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Careers from './Pages/Careers/Careers'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import Incubation from './Pages/Incubation/Incubation'
import Events from './Pages/Events/Events'
import Resources from './Pages/Resources/Resources'

function App() {

  return (
    <>
      {/* HOME PAGE */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/events' element={<Events />} />
        <Route path='/incubation' element={<Incubation />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App
