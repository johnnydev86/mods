import React from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../AppPages/Dashboard'
import Modslist from '../AppPages/Modslist'

export default function AppLayout() {
    return (
        <div>
            <Navbar />
            <SideNav />
            <Router>
      <Routes>
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/modslist' element={<Modslist />} />
     </Routes>
    </Router>  
            
        </div>
    )
}
