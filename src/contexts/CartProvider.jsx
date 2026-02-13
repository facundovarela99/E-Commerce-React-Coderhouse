import {CartContext} from './CartContext'
import { useState } from 'react'

export function CartProvider({children}){
    const [cart, SetCart] = useState([])

    const addToCart = producto=>{
        const IsInCart = cart.some(prod => prod.id = producto.id);
        if (!IsInCart) {
            SetCart([...cart, producto])
        } else {
            const updatedCart = cart.map(item => {
                if (item.id === producto.id) return {...item, quantity: item.count + producto.quantity}
                return item
            })
            SetCart(updatedCart)
        }
        console.log('Carrito: ', cart);
        console.log('Producto: ', producto)
    }

    return(
        <CartContext.Provider value={{addToCart}}>
            {children}
        </CartContext.Provider>
    )
}