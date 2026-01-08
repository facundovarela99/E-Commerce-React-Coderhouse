import styles from '../styles/Navbar.module.css'
import logo from "../assets/lorem-ipsum-logo-png_seeklogo-543371.png"
import cartWidget from '../assets/shopping-cart.png'

export function Navbar(){
   return(
        <ul className={styles.ulCategorias}>
            <li><a href=""><img className={styles.logoNavbar} src={logo} alt="Logo página inicio"/></a></li>
            <li><a href=''>Accion</a></li>
            <li><a href=''>Aventura</a></li>
            <li><a href=''>Terror</a></li>
            <li><a href=''>Estrategia</a></li>
            <li>
                <button className={styles.btnCartWidget}>
                    <div className={styles.divCartWidget}>3</div>
                    <img src={cartWidget} alt="Carrito de productos agregados" style={{ width: "32px", height: "32px" }}/>
                </button>
            </li>
        </ul>
   ) 
}