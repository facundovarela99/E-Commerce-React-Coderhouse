import { useState, useEffect } from 'react';
import { ItemList } from './itemList.jsx';

const videojuegos = [
  {
    id:1,
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Acción",
    plataforma: ["Nintendo Switch", "Wii U"],
    lanzamiento: 2017,
    desarrollador: "Nintendo",
    modo: "Un jugador"
  },
  {
    id:2,
    titulo: "Red Dead Redemption 2",
    genero: "Acción / Mundo abierto",
    plataforma: ["PlayStation 4", "Xbox One", "PC"],
    lanzamiento: 2018,
    desarrollador: "Rockstar Games",
    modo: "Un jugador / Multijugador"
  },
  {
    id:3,
    titulo: "The Witcher 3: Wild Hunt",
    genero: "RPG / Mundo abierto",
    plataforma: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    lanzamiento: 2015,
    desarrollador: "CD Projekt Red",
    modo: "Un jugador"
  },
  {
    id:4,
    titulo: "Elden Ring",
    genero: "RPG / Acción",
    plataforma: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    lanzamiento: 2022,
    desarrollador: "FromSoftware",
    modo: "Un jugador / Multijugador online"
  },
  {
    id:5,
    titulo: "Minecraft",
    genero: "Sandbox / Supervivencia",
    plataforma: ["PC", "Consolas", "Móvil"],
    lanzamiento: 2011,
    desarrollador: "Mojang Studios",
    modo: "Un jugador / Multijugador"
  },
  {
    id:6,
    titulo: "God of War",
    genero: "Acción / Aventura",
    plataforma: ["PlayStation", "PC"],
    lanzamiento: 2018,
    desarrollador: "Santa Monica Studio",
    modo: "Un jugador"
  },
  {
    id:7,
    titulo: "Hollow Knight",
    genero: "Metroidvania / Plataformas",
    plataforma: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    lanzamiento: 2017,
    desarrollador: "Team Cherry",
    modo: "Un jugador"
  },
  {
    id:8,
    titulo: "Grand Theft Auto V",
    genero: "Acción / Mundo abierto",
    plataforma: ["PC", "PlayStation", "Xbox"],
    lanzamiento: 2013,
    desarrollador: "Rockstar Games",
    modo: "Un jugador / Multijugador"
  }
];

export function ItemListContainer(){

    const [items, setItems] = useState([])

    const obtenerVideojuegos = async () => new Promise((res, rej) => {
      res(videojuegos)
      rej({error:'No se encontraron productos'})
    })

    useEffect(()=> {
      obtenerVideojuegos()
        .then(res=> setTimeout(()=>{
          setItems(res)
        }, 1200))
    }, [])

    return <ItemList items={items}/>
}