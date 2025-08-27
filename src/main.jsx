import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import './index.css'
import App from './App.jsx'
import { ContextApi } from './components/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <ContextApi>
    <App />
  </ContextApi>,
)
