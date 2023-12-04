import { useState } from 'react'
import { Header } from '../header/Header.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from '../home/Home.jsx'
import {Store} from '../store/Store.jsx'
import {Footer} from '../footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/store" element={<Store />}> </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

/*
  
*/

export default App
