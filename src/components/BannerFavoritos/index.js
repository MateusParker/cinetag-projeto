import styles from './BannerFavoritos.module.css'
function BannerFavoritos({imagem}){
    return (
        <div className={styles.capa} style={{backgroundImage:`url('/imagens/banner-${imagem}.png')`}}></div>
    )
}
export default BannerFavoritos;