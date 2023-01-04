import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import ErrorPage from './ErrorPage'
import Rupam1 from './Rupam1'
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          <Route path='/rupamsaha' element={<Rupam1/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
