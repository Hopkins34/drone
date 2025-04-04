import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="fixed w-screen h-screen top-0">
      <App />
    </div>
  </StrictMode>,
)
