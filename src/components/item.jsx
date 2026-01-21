import styles from '../styles/ItemListContainer.module.css'

// const placeholder = 'https://tse4.mm.bing.net/th/id/OIP.Pneh22uyXw_rJ8leBae8VwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'


export function Item({videojuego}) {
    return (
        <div className={styles.divGame}>
            <figure className={styles.figure}>
                <img className={styles.imgGame}
                    src={videojuego.background_image}
                    alt={videojuego.titulo} />
            </figure>
            <div className={styles.cardGameBody}>
                <h2 className="card-title text-2xl">{videojuego.name}</h2>
                <p>{videojuego.id}</p>
                <p>{videojuego.released}</p>
                <p>{videojuego.rating}</p>
                <div className="card-actions justify-end">
                    <button className={styles.btnViewMore}>Ver mas</button>
                </div>
            </div>
        </div>
    )
}