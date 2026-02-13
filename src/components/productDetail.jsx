import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Product } from "./Product.jsx";

export function ProductDetail(){

    const {id} = useParams();

    const [producto, setproducto] = useState({});

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setproducto(data))
    }, [id])

    return <Product producto={producto}></Product>
}