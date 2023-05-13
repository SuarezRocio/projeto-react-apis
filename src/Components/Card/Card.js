import { Link } from "react-router-dom";
import { Div, Div1, Img, Div4, Div2, Divspan, Div5, Button, Section, Pokebol } from "./styled";
import { getTypes } from "./ReturnPokemonType";
import pokebol from "../../assets/pngwing 2.png";
import { usePokedexContext } from "../../GlobalContext/globalState";


const Card = ({pokemon, loading, infoPokemon}) => {

const { addToPokedex, removeFromPokedex , isInPokedex, pokedex} = usePokedexContext();

    //console.log(pokemonResponse) 
    console.log(pokedex)
     
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                           
                            <Section>
                                <Div class="card-pokemon" className="card" >
                                    <Div1 class="card-info-pokemon">
                                        <Pokebol src={pokebol} />
                                        <Div2 class="info-pokemon">
                                            <h3>{item.id}</h3>
                                            <h2>{item.name}</h2>
                                            <Divspan>
                                                <div>
                                                    {item.types?.map((item) => (
                                                        <img
                                                            key={item.type.name}
                                                            className="w-fit-content h-fit-content"
                                                            src={getTypes(item.type.name)}
                                                            alt=""
                                                        />                                                    ))}
                                                </div>
                                            </Divspan>
                                        </Div2>
                                        <Div4 class="img-pokemon">
                                            <Img srcSet={item.sprites.other['dream_world']['front_default']} alt="" />
                                        </Div4>
                                    </Div1>
                                    <Div5 class="buttons-container">
                                        <Link to={`/pokemonDetail/${item.id}`} key={item.id}>
                                            Dathalle
                                        </Link>
                                        <div>
                                        <Button onClick={() => addToPokedex(item)}>Captcha!</Button>
                                        </div>
                                    </Div5>
                                </Div>
                            </Section>

                        )
                    })
            }
        </>
    )
}

export default Card;
