// File: src/7_utils/7.3_ErrorBoundary.jsx
// Purpose: Catch and gracefully handle JavaScript errors in the component tree
// ✨ Mandatory if you want app-level stability during runtime crashes
// ✅ Catches render/constructor/lifecycle errors in child components
// ✅ Shows a fallback UI instead of breaking the entire app
// ✅ Logs error details for diagnostics

import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can log this to a remote server or analytics platform later
    this.setState({ error, errorInfo })
    console.error('[ErrorBoundary]', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI - you can customize this or extract it into its own component
      return (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600">Something went wrong.</h1>
          <p className="mt-2 text-gray-600">
            Please refresh the page or contact support if this issue persists.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
