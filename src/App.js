import React from 'react'
import './App.css';
import AppNavbar from './components/AppNavbar.jsx'
import Main from './components/Main.jsx'
import AppFooter from './components/AppFooter.jsx'


const App = () => {
  return (
    <div>
      <AppNavbar/>
      <Main/>
      <AppFooter/>
    </div>
  )
}

export default App