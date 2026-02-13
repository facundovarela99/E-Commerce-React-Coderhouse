import styles from '../styles/Navbar.module.css'
import cartWidget from '../assets/shopping-cart.png'

export function CartWidget() {
    
    return (
        <>
            <button className={styles.btnCartWidget}>
                <div className={styles.divCartWidget}>0</div>
                <img src={cartWidget} alt="Carrito de productos agregados" style={{ width: "32px", height: "32px" }} />
            </button>
        </>
    )
}