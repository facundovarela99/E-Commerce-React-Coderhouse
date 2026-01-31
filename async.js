import { API_KEY } from "./api.js";

let randomNumber = Math.floor(Math.random() * 100);

export async function obtenerVideojuegos(){
  const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${randomNumber}`)
  const videojuegos = await response.json();
  return videojuegos.results
}

export async function obtenerDetalleVideojuego(id) {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const data = await response.json()
    return data
}

export async function busquedaPorNombre(nombre) {
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${nombre}`)
    const data = await response.json();
    return data
}

export async function obtenerGeneros(){
    const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const generos = await response.json();
    return generos.results;
}

export async function obtenerDetalleGenero(id){
    const response = await fetch(`https://api.rawg.io/api/genres/${id}?key=${API_KEY}`);
    const data = await response.json();
    return data;
}

fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
//Generar un GenreContainer, que dentro tenga la lógica que llame al genero clickeado en la navbar, traiga su descripción, y en lo posible, los juegos de ese género.

// const genero = await obtenerDetalleGenero(1);
// console.log(genero);

// const generos = await obtenerGeneros();