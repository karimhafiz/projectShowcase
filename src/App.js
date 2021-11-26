import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './app/component'
import Home from './app/pages/Home'

export default function App() {
  const countryCodeURL = process.env.REACT_APP_COUNTRY_CODE

  return (
    <>

      <Router>

        <Navbar />
      </Router>

      <Home />
    </>
  )
}
