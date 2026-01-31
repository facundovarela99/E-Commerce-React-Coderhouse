import styles from '../styles/ItemListContainer.module.css'
import { Item } from './item.jsx'

export function ItemList({items}){
    return(
    <div className={styles.divItemListContainer}>
            <div className={styles.divGames}>
                {items.map(producto => (
                    <Item producto={producto} key={producto.id}></Item>
                ))}
            </div>
        </div>
        )
} 