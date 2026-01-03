import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MaintenancePage from './components/MaintenancePage/MaintenancePage.jsx'


const isMaintenanceMode = false

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {isMaintenanceMode ? <MaintenancePage/> : <App />}
      </React.StrictMode>,
)


