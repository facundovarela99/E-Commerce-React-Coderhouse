import './App.css'
import { Navbar } from './components/navbar.jsx'
import { Footer } from './components/footer.jsx'
import { ItemListContainer } from './components/itemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <div className='divRootHijo1'>
      <Navbar></Navbar>
      <ItemListContainer texto="Texto del componente ItemListContainer"></ItemListContainer>
      <Footer texto="Una promesa es un objeto asíncrono"></Footer>
    </div>
  )
}


export default App
