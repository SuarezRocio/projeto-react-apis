import  React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Main from "../pages/Main/Main";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";
import PokedexPage from "../pages/PokedexPage/PokedexPage"



export function  Router() {
    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);
  
    useEffect(() => {
      fetchPokelist();
    }, []);
  
    const fetchPokelist = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokelist(response.data.results);
      } catch (error) {
        console.log("Erro ao buscar lista de pokemons");
        console.log(error.response);
      }
    };
  
    const addToPokedex = (pokemonToAdd) => {
      const isAlreadyOnPokedex = pokedex.find(
        (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
      );
  
      if (!isAlreadyOnPokedex) {
        const newPokedex = [...pokedex, pokemonToAdd];
        setPokedex(newPokedex);
      }
    };
  
    const removeFromPokedex = (pokemonToRemove) => {
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
      );
  
      setPokedex(newPokedex);
    };
  

    return(
        <BrowserRouter>
        <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/pokemonDetail/:pid"} element={<PokemonDetail/>}/>
        <Route path={"/pokedex"} element={<PokedexPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}




//export default Router;

/**pokedex={pokedex} removeFromPokedex={removeFromPokedex} */