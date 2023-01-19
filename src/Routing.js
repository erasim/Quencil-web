import React from 'react'
import {Routes, Route } from 'react-router-dom'
import NavLink from './pages/NavLink'
import Home from './pages/Home'
import Career from './pages/Career'
import Training from './pages/Training'
import TechCourse from './pages/TechCourse'
import NonTechCourse from './pages/NonTechCourse'
import Contact from './pages/Contact'

function Routing() {
  return (
    <div>

      
<NavLink/>
<Routes>
           <Route path="/" element={<Home/>} />
          <Route path="/career" element={<Career />} />
          <Route path="/training" element={<Training/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/tech-course" element={<TechCourse/>} />
          <Route path="/non-tech-course" element={<NonTechCourse/>} />
          </Routes>
  

</div>
   
  )
}

export default Routing