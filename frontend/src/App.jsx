import React from 'react';
import { CartProvider } from "./context/CartContext";
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import CheckOut from './pages/CheckOut/CheckOut'
import Menu from'./pages/Menu/Menu'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'

const App = () => {
  return (
    <CartProvider>
      <div className='app'> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<CheckOut/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </CartProvider>
  )
}

export default App;
