import { useState, useEffect } from 'react';
import { ItemList } from './itemList.jsx';

let randomNumber = Math.floor(Math.random() * 100)
const API_KEY = 'ba6d7a277b974393b178904b06f4cf1d'
const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${randomNumber}`)
const videojuegos = await response.json();

export function ItemListContainer(){
  
  const [items, setItems] = useState([])
  

    const obtenerVideojuegos = async () => new Promise((res, rej) => {
      res(videojuegos.results)
      rej({error:'No se encontraron productos'})
    })

    useEffect(()=> {
      obtenerVideojuegos()
        .then(res=> setTimeout(()=>{
          setItems(res)
          console.log('Esta es LA RESPUESTA')
          console.log(res)
        }, 0))
    }, [])

    return <ItemList items={items}/>
}