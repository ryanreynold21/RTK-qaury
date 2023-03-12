import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Cart from './pages/Cart'
import Navbar from './component/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </>
    )
}

export default App