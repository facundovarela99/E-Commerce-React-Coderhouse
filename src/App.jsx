import './App.css'
import { Navbar } from './components/navbar.jsx'
import { ItemListContainer } from './components/itemListContainer.jsx'

function App() {
  return(
    <div className='divRootHijo1'>
      <Navbar></Navbar>
      <ItemListContainer texto="Texto del componente ItemListContainer"></ItemListContainer>
    </div>
  )
}


export default App
