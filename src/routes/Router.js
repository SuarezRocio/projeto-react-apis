import  React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Main from "../pages/Main/Main";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";
//import PokedexPage from "../pages/PokedexPage/PokedexPage"
//import { Header } from '../Components/Header/Header';


export function  Router() {

    return(
        <BrowserRouter>
       {/*<Header>*/}
        <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/PokemonDetail/:pid"} element={<PokemonDetail/>}/>
        {/*<Route path={"/pokedex"} element={<PokedexPage/>}/>*/}
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        {/*</Header>*/}
        </BrowserRouter>
    )
}




//export default Router;

/**pokedex={pokedex} removeFromPokedex={removeFromPokedex} */