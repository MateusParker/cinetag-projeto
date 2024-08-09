import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import styles from './Player.module.css';
import videos from "../../json/db.json";
import NaoEncontrada from '../NaoEncontrada';
import { useEffect, useState } from 'react';

function Player(){
    
    const[video, setVideo] = useState();
    const parametros = useParams();
    useEffect(() =>{
        fetch(`https://my-json-server.typicode.com/MateusParker/cinetag/videos?id=${parametros.id}`)
        .then(resposta =>resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    },[])
    console.log(video)
    if(!video){
        return(
            <NaoEncontrada></NaoEncontrada>
        )
    }
    return (

        <>
        <Banner imagem="player"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <h2>{video.titulo}</h2>
        <p>{video.sinopse}</p>
        <section className={styles.container}>
        <iframe 
        width="100%" 
        height="100%" 
        src={video.link}
        title={video.titulo}
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>
        </section>
        </>
    )
}
export default Player;