import Banner from "../../components/Banner";

import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import videos from "../../json/db.json";
import styles from "./Inicio.module.css";
import { useEffect, useState } from "react";



function Inicio() {

    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/MateusParker/cinetag/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])
    return (
        <>
            <Banner imagem="home"></Banner><Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes! </h1>
            </Titulo><section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}></Card>;
                })}
            </section></>



    )
}
export default Inicio;