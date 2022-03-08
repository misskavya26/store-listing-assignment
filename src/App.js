import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header'
import Restaurant from './Restaurant/Restaurant'
import Cart from './Cart/Cart';
import SingleItem from './SingleItem/SingleItem';

const App = () => {

  return (
    <>
      <Header />

      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Restaurant />} />

            <Route exact path='/product/:id' element={<SingleItem />} />

            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </>
  )
}

export default App