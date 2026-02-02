import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import styles from '../styles/ProductDetail.module.css'
import { Counter } from "./Counter";

export function ProductDetail(){

    const {id} = useParams();

    const [producto, setproducto] = useState({});

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setproducto(data))
    }, [id])

    return (
        <div className={styles.divProductoDetail}>
            {producto
            ? (<img className={styles.imgProductDetail} src={producto.thumbnail} alt={producto.title}/>)
            : <div className="skeleton h-32 w-32"></div>
            }
            <h1 className="text-3xl">{producto.title}</h1>
            <h2 className="text-3xl">{producto.description}</h2>
            <h2 className="text-3xl">{producto.price}</h2>
            <div className={styles.divBotonesCarrito}>
                <button className="btn btn-primary">Agregar al carrito</button>
                <Counter/>               
            </div>
        </div>
    )
}