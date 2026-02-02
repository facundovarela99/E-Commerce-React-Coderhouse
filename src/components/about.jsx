import styles from '../styles/about.module.css'

export function About() {
    return (
        <section className={styles.sectionAbout}>
            <div className="place-self-center">
                <h1 className="text-5xl">Sobre nosotros</h1>
            </div>
            <div className="place-self-center">
                <h1 className="w-75 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe recusandae neque rerum libero! Esse mollitia labore temporibus consequatur, alias vero. Esse in tempore nostrum soluta nobis aperiam consequuntur incidunt?</h1>
                <h2 className="w-75 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad impedit sequi delectus nesciunt inventore ullam eaque? At doloremque praesentium nemo! Esse doloribus quam libero commodi nam id praesentium impedit.</h2>
            </div>
        </section>
    )
}