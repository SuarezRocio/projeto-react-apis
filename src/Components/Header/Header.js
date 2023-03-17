/*import { irParaMain, irParaPokedexPage, irParaPokemonDetail } from "../../routes/cordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button } from "./styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../../GlobalContext/globalState";
import { useContext } from "react";


export function Header() {

  const [deletePokemonFromPokedex, addPokemonToPokedex , name] = useContext(GlobalContext);

  const [pokemon, setPokemon] = useState({});
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();


  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const renderHeader = () => {


    switch (location.pathname) {
      case "/":
        return (
          <>
            <Button onClick={() => irParaMain(navigate)}>
              Ver lista de pokemons
            </Button>
            <span>Pokedex</span>
          </>
        );
      case `/PokemonDetail/${name}`:
        return (
          <>
            <Button onClick={() => irParaPokemonDetail(navigate)}  >
              Ver Dathalle
            </Button>
            <span>Lista de Dethalle</span>
          </>
        );

      case "/pokedex":
        return (
          <>
            <Button onClick={() => irParaPokedexPage(navigate)} />
            {location.pathname === `/pokedex` ?
              fetchPokemon(name) ?
                <deleteFromPokedexButton onClick={() => deletePokemonFromPokedex(fetchPokemon(name))} >Delete from Pokedéx</deleteFromPokedexButton>
                : <button onClick={() => addPokemonToPokedex(fetchPokemon(name))} >Add to Pokedex</button>
              : ""}
              <span>Ver pokemons adicionados</span>   
            <Button />
          </>
        );
      default:
        return (
          <>
            <Button onClick={() => irParaMain(navigate)}>
              Voltar para página inicial
            </Button>
            <span>Página inexistente</span>
          </>
        )
    }

  }
 
  return <Container>{renderHeader()}
  <h1>{location.pathname}</h1>
  </Container>
}*/