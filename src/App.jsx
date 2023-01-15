// import { useState } from 'react'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/About/About'

// Importando o react-router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './pages/Contato/Contato'

function App() {

  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
