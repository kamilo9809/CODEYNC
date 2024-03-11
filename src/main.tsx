import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './../node_modules/primereact/resources/themes/lara-light-indigo/theme.css'
import './../node_modules/primereact/resources/primereact.min.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
