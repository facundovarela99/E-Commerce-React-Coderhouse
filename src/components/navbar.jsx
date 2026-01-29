import styles from '../styles/Navbar.module.css'
import logo from "../assets/lorem-ipsum-logo-png_seeklogo-543371.png"
import cartWidget from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom'
import { obtenerVideojuegos } from '../../async.js';
import { ItemListContainer } from './itemListContainer.jsx';

export function Navbar({generos}) {

    
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><button onClick={ItemListContainer}><Link to={`/`}>Home</Link></button></li>
                        <li>
                            <a>Géneros</a>
                            <ul className="p-2">
                                {generos.map(genero => (
                                    <li key={`genero-${genero.name}`}><a>{genero.name}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li><button onClick={ItemListContainer}><Link to={`/about`}>About</Link></button></li>
                        <li className='d-flex flex-row'>
                            <input type="text" placeholder='Videojuego' name='inputVideojuego' />
                            <button type='submit'>Buscar</button>
                        </li>
                    </ul>
                </div>
                <button onClick={obtenerVideojuegos}><Link to={'/'}><img className={styles.logoNavbar} src={logo} alt="Logo página inicio"/></Link></button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><button onClick={obtenerVideojuegos}><Link to={`/`}>Home</Link></button></li>
                    <li><button><Link to={`/about`}>About</Link></button></li>
                    <li>
                        <details>
                            <summary>Géneros</summary>
                            <ul className="p-2 bg-base-100 w-40 z-1">
                                {generos.map(genero => (
                                    <li key={`genero-${genero.name}`}><a>{genero.name}</a></li>
                                ))}
                            </ul>
                        </details>
                    </li>
                    <li className='d-flex flex-row'>
                        <input type="text" placeholder='Videojuego' name='inputVideojuego' />
                        <button type='submit'>Buscar</button>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Iniciar sesión</a>
                <button className={styles.btnCartWidget}>
                     <div className={styles.divCartWidget}>3</div>
                     <img src={cartWidget} alt="Carrito de productos agregados" style={{ width: "32px", height: "32px" }}/>
                 </button>
            </div>
        </div>
    )
}