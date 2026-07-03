import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './framer/tokens.css'
import './framer/_responsive-runtime.css'
import './framer/overrides.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
