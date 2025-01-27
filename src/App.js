import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Cart from './Cart'
import SingleProduct from './SingleProduct'
import ErrorPage from './ErrorPage'
import  {GlobalStyle} from './GlobalStyle'
import './App.css'
import { ThemeProvider } from 'styled-components'

const App = () => {

  const theme ={
    colors:{
      heading: "              ",
      tesxt:"rgba(29, 29, 29,.8)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      bg:"#F6F8Fa",
      footer_bg:"#0a1435",
      btn:"rgb(98,84,243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg, rgb(132,144,255) 0%, rgba(98,189,252),100%)",
      shadow:"rgba(0,0,0,0.2) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile:"768px",
      tab:"998px"
    }
  }

  return (
    <div>
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    </div>
  )
}

export default App
