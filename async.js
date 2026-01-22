import { API_KEY } from "./api.js";

export async function obtenerDetalleVideojuego(id) {
    const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const data = await response.json()
    return data
}

const juego = await obtenerDetalleVideojuego(13926);
console.log(juego);