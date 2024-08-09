import styles from './NaoEncontrada.module.css';

function NaoEncontrada(){

    return (

        <section className={styles.contrainer}>
            <h2>Oops!</h2>
            <p>O conteúdo que você procura não foi encontrada</p>
        </section>
    )

}


export default NaoEncontrada;