import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import styles from '../styles/GameDetail.module.css'

export function ProductDetail(){

    const {id} = useParams();

    const [producto, setproducto] = useState({});

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setproducto(data))
    }, [id])

    return (
        <div>
            <h1 className="text-3xl">{producto.title}</h1>
            <img className={styles.imgGameDetail} src={producto.images} alt={producto.title} />
        </div>
    )
}