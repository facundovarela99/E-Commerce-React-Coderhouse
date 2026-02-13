import styles from '../styles/Navbar.module.css'
import cartWidget from '../assets/shopping-cart.png'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext.jsx'

export function CartWidget() {
    const {GetTotalProducts} = useContext(CartContext)
    const totalProducts = GetTotalProducts();
    return (
        <>
            <button className={styles.btnCartWidget}>
                <div className={styles.divCartWidget}>{totalProducts}</div>
                <img src={cartWidget} alt="Carrito de productos agregados" style={{ width: "32px", height: "32px" }} />
            </button>
        </>
    )
}