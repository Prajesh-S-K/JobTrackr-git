// 🧩 Purpose:
// This page handles unknown or invalid routes (404 error).
//
// 📌 Required: ✅ Optional (but strongly recommended for UX)
//
// 🛠️ Changes Made:
// - Created a simple placeholder page for unmatched routes
// - Will be styled and themed in Segment 5 (arcade 404 look)
//
// 🧪 Test Snippet:
// ✅ Navigate to a fake route like `/xyz` and you should see "Page Not Found"

import React from 'react'

export default function NotFound() {
  return (
    <div className="text-center mt-32">
      <h1 className="text-3xl font-extrabold text-red-500">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-400">The page you're looking for doesn't exist.</p>
    </div>
  )
}
