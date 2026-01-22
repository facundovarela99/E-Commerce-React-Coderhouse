// import { useState, useEffect } from "react";
// import { API_KEY } from "../../api.js";
// import { GameDetail } from "./gameDetail.jsx";
// import useParams from "react-router-dom";

// export function GameContainer(){
//     const [game, setGame] = useState([])
//     const { id } = useParams()
//     const obtenerDetalleVideojuego = async(id) => new Promise((res, rej)=>{
//         res(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
//         rej({error:"No existe el videojuego"})
//     })

//     useEffect((id)=>{
//         obtenerDetalleVideojuego(id)
//             .then(res=> setTimeout(()=>{
//                 setGame(res)
//                 console.log('Este es el videojuego')
//                 console.log(res)
//             }, 0))
//     }, [])

//     return <GameDetail game={game}/>
// }