import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './4_components/4.1_Navbar'
import Dashboard from './5_pages/5.1_Dashboard'
import AddJob from './5_pages/5.2_AddJob'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddJob />} />
      </Routes>
    </Router>
  )
}

export default App