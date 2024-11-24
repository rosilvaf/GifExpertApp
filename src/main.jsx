import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GifExpert } from './GifExpertApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> nos ayuda a identificar componentes con unsafe lifecycles, legacy code, etc. These checks and warnings can catch things like:
// Components with side effects
// Deprecated or unsafe lifecycle methods
// Unsafe use of certain built in functions
// Duplicate keys in lists
    <GifExpert />
  /* </React.StrictMode>, */
)
