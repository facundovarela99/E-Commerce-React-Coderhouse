import { Link } from 'react-router-dom'
import styles from '../styles/ItemListContainer.module.css'

// const placeholder = 'https://tse4.mm.bing.net/th/id/OIP.Pneh22uyXw_rJ8leBae8VwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'


export function Item({producto}) {
    return (
        <div className={styles.divGame}>
            <figure className={styles.figure}>
                <img className={styles.imgGame}
                    src={producto.images[0]}
                    alt={producto.title} />
            </figure>
            <div className={styles.cardGameBody}>
                <h2 className="card-title text-2xl">{producto.title}</h2>
                <p>{producto.id}</p>
                <p>{producto.price}</p>
                <div className="card-actions justify-end">
                </div>
                    <button className={styles.btnViewMore}><Link className='p-5' to={`/producto/${producto.id}`}>Ver mas</Link></button>
            </div>
        </div>
    )
}