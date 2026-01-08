import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChurchDataProvider } from './contexts/ChurchDataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChurchDataProvider>
      <App />
    </ChurchDataProvider>
  </StrictMode>,
)
