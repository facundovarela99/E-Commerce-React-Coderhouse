import {CartContext} from './CartContext.jsx'
import { useState } from 'react'

export function CartProvider({children}){
    const [cart, SetCart] = useState([])

    const addToCart = producto=>{
        const IsInCart = cart.some(prod => prod.id = producto.id);
        if (!IsInCart) {
            SetCart([...cart, producto])
        } else {
            const updatedCart = cart.map(item => {
                if (item.id === producto.id) return {...item, quantity: item.quantity + producto.quantity}
                return item
            })
            SetCart(updatedCart)
        }
    }

    const GetTotalProducts = () =>{
        const totalQuantity = cart.reduce((acc, current) => acc + current.quantity, 0);
        return totalQuantity
    }

    return(
        <CartContext.Provider value={{addToCart, GetTotalProducts}}>
            {children}
        </CartContext.Provider>
    )
}