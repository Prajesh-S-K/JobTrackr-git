// File: src/7_utils/7.2_reportWebVitals.js
// Purpose: Measure and optionally report key performance metrics like LCP, FID, CLS
// ✨ Optional but highly recommended for real-world deployments

// 📌 Changes Made:
// - Uses `web-vitals` package to report performance metrics
// - Supports both console logging and custom analytics reporting
// - Exports a function for easy plug-in into `index.jsx`

// 🧪 Test Snippet:
// 1. Install web-vitals: `npm install web-vitals`
// 2. Run the app, open DevTools > Console, and observe vitals logging

import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  }
}

export default reportWebVitals

// 🚀 TODO (Later):
// - Pass a real analytics function like `reportToAnalytics()`
//   Example:
//     reportWebVitals(metric => {
//       fetch('/analytics', {
//         method: 'POST',
//         body: JSON.stringify(metric),
//       })
//     })
