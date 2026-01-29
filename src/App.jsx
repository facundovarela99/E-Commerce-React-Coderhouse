import './App.css'
import { Navbar } from './components/navbar.jsx'
import { Footer } from './components/footer.jsx'
import { ItemListContainer } from './components/itemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/about.jsx'
import { GameDetail } from './components/gameDetail.jsx'
import { GameSearchResult } from './components/gameContainer.jsx'
import { obtenerGeneros } from '../async.js'
import { useState, useEffect } from 'react'

function App() {

  const [generos, setGeneros] = useState([]);

  useEffect(()=>{
    obtenerGeneros()
    .then(res=>setGeneros(res))
    .catch(error => console.log('Error al obtener los géneros', error))
  })

  return (
    <div className='divRootHijo1'>
      <BrowserRouter>
        <Navbar generos={generos}/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/game-search/:name' element={<GameSearchResult/>}/> 
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/about" element={<About />} />
          {/* <ItemListContainer texto="Texto del componente ItemListContainer"></ItemListContainer> */}
        </Routes>
      </BrowserRouter>
      <Footer texto="Una promesa es un objeto asíncrono"></Footer>
    </div>
  )
}


export default App
