import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StyleProvider } from '@ant-design/cssinjs'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <App />
    </StyleProvider>
  </React.StrictMode>
)
