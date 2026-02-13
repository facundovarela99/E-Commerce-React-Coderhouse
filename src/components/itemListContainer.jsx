import { ItemList } from './ItemList.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export function ItemListContainer(){
    
  const [items, setItems] = useState([]);

  const {nombreCategoria} = useParams();

  useEffect(()=>{

    const url_productos = 'https://dummyjson.com/products'
    const url_categorias = `https://dummyjson.com/products/category/${nombreCategoria}`

    fetch(nombreCategoria ? url_categorias : url_productos)
    .then(res => res.json())
    .then(data => setItems(data.products));
  }, [nombreCategoria])

    return <ItemList items={items}/>
}