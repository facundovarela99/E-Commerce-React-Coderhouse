import styles from '../styles/ItemListContainer.module.css'
import { Item } from './item.jsx'

export function ItemList({items}){
    return(<div className={styles.divItemListContainer}>
            <div className={styles.divGames}>
                <h1 class="text-3xl font-bold underline m-5">
                    Hello world!
                </h1>
                {items.map(videojuego => (
                    <Item videojuego={videojuego} key={videojuego.id}></Item>
                ))}
            </div>
        </div>)
} 