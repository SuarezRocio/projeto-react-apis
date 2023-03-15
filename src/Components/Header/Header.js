import { irParaMain, irParaPokedexPage } from "../../routes/cordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { Container , Button} from "./styled";



export function Header(){
    // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
  
    switch (location.pathname) {
        case "/":
          return (
            <>
              <Button onClick={() => irParaPokedexPage(navigate)}  >
                Ver pokedex
              </Button>
              <span>Lista de pokemons</span>
            </>
          );
        case "/pokedex":
          return (
            <>
              <Button onClick={() => irParaMain(navigate)}>
                Ver lista de pokemons
              </Button>
              <span>Pokedex</span>
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
    return <Container>{renderHeader()}</Container> 
}