import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Section_1 from './section_1';
import './section_1.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Section_1 />
  </StrictMode>
)
