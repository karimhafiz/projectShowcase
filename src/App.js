import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './app/component'
import Home from './app/pages/Home'
import Forum from './app/pages/Forum'
import Comments from './app/pages/Comments'
export default function App() {


  return (
    <>

      <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/comments" element={<Comments />} />

        </Routes>

      </Router>


    </>
  )
}
