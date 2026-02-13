import { useEffect } from "react";
import { useContext, useState } from 'react'
import {CartContext} from '../contexts/CartContext.jsx'

export function Counter({producto}){

    const [counter, setCounter] = useState(0);
    const {addToCart} = useContext(CartContext);

    const handlerAddToCart = () => addToCart({...producto, quantity: counter})

    const handlerSuma = ()=> setCounter(counter + 1);
    
    const handlerResta = ()=> setCounter(counter - 1);

    useEffect(()=>{
        return ()=>{
        }
    }, [counter])

    return (
        <div className="flex flex-col w-75">
            <p className="text-center text-2xl">{counter}</p>
            <div className="flex place-content-evenly">
            <button onClick={handlerSuma} className="bg-green-500 px-8 py-3"><strong>+</strong></button>
            <button onClick={handlerResta} className="bg-red-500 px-8 py-3"><strong>-</strong></button>
            <button className="btn btn-primary" onClick={handlerAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}