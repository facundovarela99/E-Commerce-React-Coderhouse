export const API_KEY = "ba6d7a277b974393b178904b06f4cf1d"

let randomNumber = Math.floor(Math.random() * 100);

const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${randomNumber}`)

export const videojuegos = await response.json();

// export class GameController {
//     static async getAll(req, res) {
//         res.header('Access-Control-Allow-Origin', '*');
//         let randomNumber = Math.floor(Math.random() * 100)
//         try {
//             const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${randomNumber}`);
//             const data = await response.json();
//             res.json(data);
//         } catch (error) {
//             console.log(`Error interno del servidor: ${error.message}`)
//         }
//     }

console.log(videojuegos.results[0])
