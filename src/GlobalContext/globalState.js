import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";


export const GlobalContext = createContext({});
export const usePokedexContext = () => useContext(GlobalContext)

export const GlobalContextProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const isInPokedex =  (pokemonToFind) => {
  return pokedex.find((pokemon) => pokemon.id  === pokemonToFind.id)
  }
  
  //console.log("te añadiste")

  const addToPokedex = (pokemonToAdd) => {
    //console.log(pokedex)
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
      );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      Swal.fire({title: 'Gotcha! O Pokémon foi adicionado a sua Pokédex',
      })
    }
  };
  const removeFromPokedex = (pokemonId) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== pokemonId
    )
    Swal.fire('Oh, no!O Pokémon foi removido da sua Pokedéx'
    );
    
  console.log(newPokedex)
    setPokedex(newPokedex);
  };
  return (
    <GlobalContext.Provider value={{ pokedex,  addToPokedex, removeFromPokedex , isInPokedex}}>
      {children}
    </GlobalContext.Provider>
  )
}

