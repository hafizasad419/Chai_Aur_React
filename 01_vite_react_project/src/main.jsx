import React from 'react'
import ReactDOM from 'react-dom/client'
import { Wrestlers, App } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Wrestlers />
  </React.StrictMode>,
)
