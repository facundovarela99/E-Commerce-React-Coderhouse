import styles from '../styles/ItemListContainer.module.css'

export function ItemListContainer({texto}){
    return(
        <div className={styles.divItemListContainer}>
            <h1>{texto}</h1>
        </div>
    )
}