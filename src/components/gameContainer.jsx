import { useState, useEffect } from "react";
import { API_KEY } from "../../api.js";

export function GameContainer(){
    const [game, setGame] = useState([])

    const obtenerDetalleVideojuego = async(id) => new Promise((res, rej)=>{
        res(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        rej({error:"No existe el videojuego"})
    })

    useEffect((id)=>{
        obtenerDetalleVideojuego(id)
            .then(res=> setTimeout(()=>{
                setGame(res)
                console.log('Este es el videojuego')
                console.log(res)
            }, 0))
    }, [])

    return <GameRender game={game}/>
}