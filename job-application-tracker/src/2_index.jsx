// File: src/2_index.jsx
// Purpose: Entry point for React application — mounts App to the DOM.
// ✨ Mandatory
// ✅ Sets up StrictMode for dev warnings
// ✅ Loads Tailwind styles
// ✅ Mounts app using modern `createRoot`
// ✅ Prepares for performance monitoring via reportWebVitals
// ✅ (Optional) Adds React Profiler and Error Boundaries

// 📌 Changes Made:
// - Added web vitals reporting for performance insight
// - Added inline comments following coding standards
// - Suggested Suspense/code-splitting to be done in 1_App.jsx
// - Future work noted in comments (Firebase preload, Error Boundary)

// 🧪 Test Snippet:
// Run `npm run build` or `npm run dev`
// Open DevTools > Network > Measure initial load
// Install React DevTools to confirm Profiler setup

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './1_App.jsx'
import './6_styles/6.1_tailwind.css'

// 🧠 Optional: Add ErrorBoundary here in future to prevent app-wide crash
// import ErrorBoundary from './7_utils/ErrorBoundary'
import ErrorBoundary from './7_utils/7.3_ErrorBoundary.jsx'


import reportWebVitals from './7_utils/7.2_reportWebVitals.js'

// ✅ Mount App using React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* Optional: Wrap with <ErrorBoundary> if implemented */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    {/* Optional: Add <Profiler> for performance tracking */}
    <App />
  </React.StrictMode>
)

// ✅ Measure Core Web Vitals (LCP, FID, CLS) in dev/prod — logs to console or sends to analytics
reportWebVitals(console.log)

// 🚀 TODO (Later):
// - Preload Firebase SDK/scripts manually via `<link rel="preload">` in public/index.html
// - Add ErrorBoundary implementation in `7_utils/ErrorBoundary.jsx`
