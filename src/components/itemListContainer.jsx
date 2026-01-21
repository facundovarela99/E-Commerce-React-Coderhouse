import { useState, useEffect } from 'react';
import { ItemList } from './itemList.jsx';
import { videojuegos } from '../../api.js';

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