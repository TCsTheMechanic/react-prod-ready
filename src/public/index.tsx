import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from '../routes/AppRoutes'

export function App() {
  return (
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  )
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)
