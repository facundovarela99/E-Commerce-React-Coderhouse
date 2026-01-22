import { useState, useEffect } from "react"
import { obtenerDetalleVideojuego } from "../../async.js"
import { useParams } from "react-router-dom";
import styles from '../styles/GameDetail.module.css'

export function GameDetail(){

    const {id} = useParams();

    const [videojuego, setVideojuego] = useState({});

    useEffect(()=>{
        obtenerDetalleVideojuego(id).then(juego=>setVideojuego(juego))
    }, [id])

    return (
        <div>
            <h1 className="text-3xl">{videojuego.name}</h1>
            <h2 className="text-2xl">{videojuego.id}</h2>
            <div dangerouslySetInnerHTML={{ __html: videojuego.description }} />
            <img className={styles.imgGameDetail} src={videojuego.background_image} alt={videojuego.name} />
        </div>
    )
}