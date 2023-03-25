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

  if (hours > 7 && hours < 12) {
    greet = 'Good Morning everyone! 🌞'
  } else if (hours > 12 && hours < 18) {
    greet = 'Good afternoon felas! 🌇'
  } else if (hours > 18 && hours < 7) {
    greet = 'Good night fams! 🌆'
  }

  // document.title = `Hello I'm Jhon Doe. ${greet}`
  document.title = hours
}

setTitleGreet();