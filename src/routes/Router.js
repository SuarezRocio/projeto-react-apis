import  React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Main from "../pages/Main/Main";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";
import PokedexPage from "../pages/PokedexPage/PokedexPage"

export function  Router() {

    return(
        
    
        <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/PokemonDetail/:pid"} element={<PokemonDetail/>}/>
        <Route path={"/pokedex"} element={<PokedexPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        
    )
}


