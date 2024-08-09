
import BannerFavoritos from '../../components/BannerFavoritos';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import { useFavoritoContext } from '../../Contextos/favoritos';
import styles from './Favoritos.module.css';
//import styles from './Favoritos.module.css';
function Favoritos({imagem}){

    const {favorito} = useFavoritoContext();

    return (
        <><BannerFavoritos imagem="favoritos"></BannerFavoritos><Titulo>Meus Favoritos</Titulo>
        <section className={styles.container}>
            {favorito.map((fav) =>{
                return <Card {...fav} key={fav.id}/>
            })}
        </section></>
        
    )
}
export default Favoritos;