// 🧩 Purpose:
// This is the root component of the app. It sets up routing for all main pages and wraps them with shared layout (Navbar, global wrapper).
//
// 📌 Required: ✅ Mandatory (core entry point and router logic)
//
// 🛠️ Changes Made:
// - Verified all route imports
// - Added a catch-all route for 404 handling
// - Marked future styling areas (dark mode/theme)
// - Wrapped layout in centralized div for global styling
//
// 🧪 Test Snippet:
// ✅ Run the app and test the following:
// - Navigate to "/", "/add", "/edit/123" — they should load correctly
// - Navigate to any invalid path like "/does-not-exist" — should load the NotFound component

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// ✅ Shared layout
import Navbar from './4_components/4.1_Navbar'

// ✅ Page-level views
import Dashboard from './5_pages/5.1_Dashboard'
import AddJob from './5_pages/5.2_AddJob'
import EditJob from './5_pages/5.3_EditJob'

// 🆕 Optional: 404 page (create this in Segment 5)
import NotFound from './5_pages/5.4_NotFound' // 🔧 TODO: Done

export default function App() {
  return (
    
    <Router>
      {/* 🔁 Global Navbar visible on all routes */}
      <Navbar />

      {/* 🎨 Layout wrapper — applies background, spacing, and text color */}
      <div
        className="min-h-screen bg-gray-100 p-4" // 🎨 TODO: Upgrade to themed wrapper (e.g., dark mode)
      >
        <Routes>
          {/* 🧭 Main route for dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* ➕ Add new job */}
          <Route path="/add" element={<AddJob />} />

          {/* ✏️ Edit existing job by ID */}
          <Route path="/edit/:id" element={<EditJob />} />

          {/* 🚫 Catch-all for invalid routes */}
          <Route path="*" element={<NotFound />} /> // 🎨 TODO: Add pixel-art 404 view later
        </Routes>
      </div>
    </Router>
  )
}
