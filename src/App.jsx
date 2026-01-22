import './App.css'
import { Navbar } from './components/navbar.jsx'
import { Footer } from './components/footer.jsx'
import { ItemListContainer } from './components/itemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/about.jsx'
import { GameDetail } from './components/gameDetail.jsx'
// import { GameContainer } from './components/gameContainer.jsx'

function App() {
  return (
    <div className='divRootHijo1'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          {/* <Route path="/game/:id" element={<GameContainer />} /> */}
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
