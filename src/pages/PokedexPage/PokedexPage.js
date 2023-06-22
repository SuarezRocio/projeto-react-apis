import React from "react"
import { H1, DivMain } from "./styled";
import { usePokedexContext } from "../../GlobalContext/globalState";
import PokemonItem from "../../Components/PokemonItem/PokemonItem";


function PokedexPage(props) {
  const { pokedex, removeFromPokedex } = usePokedexContext();

  return (
    <DivMain>

      {pokedex.length === 0 && <H1>Pokemon não adicionado, adicione seu pokemon</H1>}
      {pokedex.map((pokemon) => (
        <PokemonItem item={pokemon} key={pokemon.id} />
      ))}

    </DivMain>
  )
}

export default PokedexPage;