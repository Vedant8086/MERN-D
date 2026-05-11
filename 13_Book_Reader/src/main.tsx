import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>React is working!</h1>
  </StrictMode>,
)
