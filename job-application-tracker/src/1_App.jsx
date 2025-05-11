import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './4_components/4.1_Navbar'
import Dashboard from './5_pages/5.1_Dashboard'
import AddJob from './5_pages/5.2_AddJob'
import EditJob from './5_pages/5.3_EditJob'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddJob />} />
          <Route path="/edit/:id" element={<EditJob />} />
        </Routes>
      </div>
    </Router>
  )
}
