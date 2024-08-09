import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/Favoritos";
import Container from "./components/Container";
import FavoritosProvider from "./Contextos/favoritos";
import Player from "./pages/Player"
import NaoEncontrada from "./pages/NaoEncontrada";
import PaginaBase from "./pages/PaginaBase";
function AppRoutes(){

    return(
        <BrowserRouter> 
       
        <Routes> 
            <Route path="/" element={<PaginaBase/>}>
            <Route index element ={<Inicio></Inicio>}></Route> 
            <Route path="favoritos" element ={<Favoritos></Favoritos>}></Route> 
            <Route path=":id" element ={<Player/>}></Route> 
            <Route path="*" element={<NaoEncontrada/>}></Route>
            </Route>
        </Routes>
      
        </BrowserRouter>

    )

}
export default AppRoutes;


