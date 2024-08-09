import { Link } from 'react-router-dom';
import { Children } from 'react';
import styles from './Rodape.module.css';
function Rodape(
    {url,children}
){
    return (
       <footer className={styles.rodapetexto}>
       <h2>Desenvolvido por M.Parker</h2>
       </footer>
    )
}
export default Rodape;