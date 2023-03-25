import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const setTitleGreet = () => {
  const hours = new Date().getHours();
  let greet;

  if (hours >= 0 && hours <= 9) {
    greet = 'Good Morning everyone! 🌞'
  } else if (hours >= 10 && hours <= 15) {
    greet = 'Good afternoon felas! 🌇'
  } else {
    greet = 'Good night fams! 🌆'
  }

  document.title = greet
}

setTitleGreet();