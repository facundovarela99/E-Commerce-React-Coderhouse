import { useState, useEffect } from 'react';
import { ItemList } from './itemList.jsx';
import { API_KEY } from '../../api.js';
import { obtenerVideojuegos } from '../../async.js';

export function ItemListContainer(){
    
  const [items, setItems] = useState([]);

    useEffect(()=> {
      obtenerVideojuegos()
        .then(res=> setItems(res))
        .catch(error => console.log(error))
    }, [])

    return <ItemList items={items}/>
}