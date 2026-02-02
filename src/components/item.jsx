import styles from '../styles/ItemListContainer.module.css'
import { useNavigate } from 'react-router-dom'

export function Item({producto}) {
    const navigate = useNavigate();

    return (
        <div className={styles.divGame}>
            <figure className={styles.figure}>
                {producto 
                ? (<img className={styles.imgGame} src={producto.images[0]} alt={producto.title} />) 
                : <div className="skeleton h-32 w-32"></div>}
                
            </figure>
            <div className={styles.cardGameBody}>
                <h1 className="card-title text-2xl pt-2">{producto.title}</h1>
                <p className='pt-2'>${producto.price}</p>
                <p className='pt-2'>{producto.description}</p>
                <div className="card-actions justify-end">
                    <button className={styles.btnViewMore} onClick={()=> navigate(`/producto/${producto.id}`)}>Ver mas</button>
                </div>
            </div>
        </div>
    )
}