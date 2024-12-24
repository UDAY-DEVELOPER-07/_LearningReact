import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp from './components/comp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Comp username="Uday Singh" btn="This" />
  </StrictMode>,
)
