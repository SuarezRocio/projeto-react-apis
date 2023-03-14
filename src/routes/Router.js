import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Main from "../pages/Main/Main";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

export const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/pokemonDetail/:pid"} element={<PokemonDetail/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

