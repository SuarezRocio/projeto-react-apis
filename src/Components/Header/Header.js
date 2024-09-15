import { NavLink } from "react-router-dom";
import { H1 , Button1 , Div} from "./styled";
import pokemonImg from "../../assets/pokemonImagen.png"

export function Header() { 

return(
<Div>
<H1>
      <img src={pokemonImg} alt="pokemon logo" />
</H1>
<Button1>
<NavLink to={"/pokedex"}>Pokedex</NavLink>
</Button1>
<br/> 
<Button1>
<NavLink to={"/"}>Home</NavLink>
</Button1>
</Div>

)}
