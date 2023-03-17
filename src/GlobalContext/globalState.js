/*import { createContext } from "react";
//import { BASE_URL } from "../Constants/url";
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { useRequestData } from "../Hooks/useRequesData";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchMain();
  }, []);

  const fetchMain = async () => {
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
  return (
    <GlobalContext.Provider value={{ pokedex, pokelist, addToPokedex, removeFromPokedex }}>
      {children}
    </GlobalContext.Provider>
  )
}*/

/** pokemonList, isLoading, isLoaded, error,  */
//export default GlobalContextProvider;
