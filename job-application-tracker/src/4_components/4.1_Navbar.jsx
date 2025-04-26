// src/4_components/4.1_Navbar.jsx

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold hover:text-gray-200">
        JobTrackr
      </Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/add" className="hover:text-gray-300">Add Job</Link>
      </div>
    </nav>
  )
}
