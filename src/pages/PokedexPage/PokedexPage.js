import Card from "../../Components/Card/Card";
import { Container } from "./styled";
import {Header} from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";

function PokedexPage(props) {
  const { pokedex, removeFromPokedex } = props;

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

export default PokedexPage;