/*import Card from "../../Components/Card/Card";
import { Container } from "./styled";
import {Header} from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { GlobalContext } from "../../GlobalContext/globalState";
import { useContext } from "react";

function PokedexPage(props) {
  const { pokedex, removeFromPokedex } = useContext(GlobalContext);
 
  return (
    <Container>
      <Header />
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;*/