import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext(); /*Criando variavel*/
FavoritosContext.displayName = "Favoritos";  /*Nomenclatura*/

export default function FavoritosProvider ({children}){
    const [favorito, setFavorito] = useState([]); /*favorito é  o valor inicial, setFavorito é a variavel que será atualizada*/


    return (
        <FavoritosContext.Provider
        value={{favorito,setFavorito}}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){

    const {favorito,setFavorito} = useContext(FavoritosContext); /*Utilizado para puxar o contexto do favorito*/
    function adicionarFavorito(novofavorito){

        const favoritoRepetido =favorito.some(item => item.id ===novofavorito.id);  /*Verificar se tem um favorito repetido*/
        let novaLista = [...favorito]; /*nova lista que recebe a lista antiga*/

        if(!favoritoRepetido){
            novaLista.push(novofavorito)
            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novofavorito),1); 
        return setFavorito(novaLista);
    }
    return {
        favorito, adicionarFavorito
    }
}