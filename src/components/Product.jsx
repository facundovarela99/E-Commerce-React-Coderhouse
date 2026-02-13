import styles from '../styles/ProductDetail.module.css'
import { Counter } from "./Counter.jsx";

export function Product({producto}){
    return(
        <div className={styles.divProductoDetail}>
            {producto
            ? (<img className={styles.imgProductDetail} src={producto.thumbnail} alt={producto.title}/>)
            : <div className="skeleton h-32 w-32"></div>
            }
            <h1 className="text-3xl">{producto.title}</h1>
            <h2 className="text-3xl">{producto.description}</h2>
            <h2 className="text-3xl">{producto.price}</h2>
            <div className={styles.divBotonesCarrito}>
                <Counter producto={producto}/>               
            </div>
        </div>
    )
}