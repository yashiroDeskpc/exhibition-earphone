import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, } from 'react-router';
import App from './App.jsx'
import Toppage from './component/Toppage';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

