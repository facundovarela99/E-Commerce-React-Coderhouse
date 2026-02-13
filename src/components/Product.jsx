import styles from '../styles/ProductDetail.module.css'
import { Counter } from "./Counter.jsx";
import { useContext, useState } from 'react'
import {CartContext} from '../contexts/CartContext.jsx'

export function Product({producto}){

    const [counter, setCounter] = useState(0);
    const {addToCart} = useContext(CartContext)
    const handlerAddToCart = () => addToCart({...producto, quantity: counter})

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
                <button className="btn btn-primary" onClick={handlerAddToCart}>Agregar al carrito</button>
                <Counter counter={counter} setCounter={setCounter}/>               
            </div>
        </div>
    )
}