import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800;900&display=swap';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

