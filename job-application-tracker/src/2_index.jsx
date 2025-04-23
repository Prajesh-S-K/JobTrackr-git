// src/2_index.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './1_App.jsx'
import './6_styles/6.1_tailwind.css' // Optional Tailwind import

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
