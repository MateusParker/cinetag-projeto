import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabacalhoLink from "./CabecalhoLink";
function Cabecalho(){
    return (
        <header className={styles.cabecalho}>

            <Link to="./">
            <img src={logo} alt="Logo do Cinetag"/>
            </Link>


            <nav>
            <CabacalhoLink url="./">Home</CabacalhoLink>
            <CabacalhoLink url="./Favoritos">Favoritos</CabacalhoLink>
            </nav>

        </header>
    )
}
export default Cabecalho;