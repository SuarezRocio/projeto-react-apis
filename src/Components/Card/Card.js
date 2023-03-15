import React from "react";
import { Link } from "react-router-dom";
import { Div, Div1, Img, Div4, Div2, Divspan, Div5, Button, Section, Pokebol } from "./styled";
import { getTypes } from "./ReturnPokemonType";
import pokebol from "../../assets/pngwing 2.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ pokemon, loading, infoPokemon, addToPokedex, removeFromPokedex }) => {
    //console.log(pokemonResponse) 
    console.log(pokemon)
    
    
  const [pokemon, setPokemon] = useState({});
    // hook para saber nosso path atual
    const location = useLocation();

    // hook para redirecionar
    const navigate = useNavigate();  

    useEffect(() => {
        fetchPokemon();
      }, []);
    
      const fetchPokemon = async () => {
        try {
          const response = await axios.get(pokemonUrl);
          setPokemon(response.data);
        } catch (error) {
          console.log("Erro ao buscar lista de pokemons");
          console.log(error);
        }
      };

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (

                            <Section>
                                <Div class="card-pokemon" className="card" onClick={() => infoPokemon(item)}>
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
                                                        />
                                                    ))}
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
                                        {location.pathname === "/" ? (                                           
                                        <Button onClick={() => addToPokedex(pokemon)}>Captcha!</Button>

                                        ) : (
                                            <Button onClick={() => removeFromPokedex(pokemon)}>Remover da Pokedex</Button>
                                        )}
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
