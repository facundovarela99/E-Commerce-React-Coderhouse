import './App.css'
import { Navbar } from './components/navbar.jsx'
import { Footer } from './components/footer.jsx'
import { ItemListContainer } from './components/itemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/about.jsx'
import { ProductDetail } from './components/productDetail.jsx'
// import { useState, useEffect } from 'react'

function App() {
  return (
    <div className='divRootHijo1'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path='/categoria/:nombreCategoria' element={<ItemListContainer/>}/> 
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/Sobre nosotros" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer texto="Una promesa es un objeto asíncrono"></Footer>
    </div>
  )
}


export default App
