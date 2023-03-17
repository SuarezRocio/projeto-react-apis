import React from "react";
import { Link } from "react-router-dom";
import { Div, Div1, Img, Div4, Div2, Divspan, Div5, Button, Section, Pokebol } from "./styled";
import { getTypes } from "./ReturnPokemonType";
import pokebol from "../../assets/pngwing 2.png";
//import { useState } from "react";
import {useLocation , useNavigate} from "react-router-dom"
//import axios from "axios";
//import {useRequestData} from "../../Hooks/useRequesData"
//import { GlobalContext } from "../../GlobalContext/globalState";
//import { useContext } from "react";
//import { irPokemonDetail } from "../../routes/cordinator";
//import { irParaPokedexPage } from "../../routes/cordinator";

const Card = ({pokemon, loading, infoPokemon}) => {

//const { addToPokedex, removeFromPokedex} = useContext(GlobalContext);

    //console.log(pokemonResponse) 
    //console.log(pokemon)
    //,location
    // hook para saber nosso path atual
    const location = useLocation();

    // hook para redirecionar
    const navigate = useNavigate();  
    
    //const [pokemon, loading, infoPokemon] = useRequestData({}, `/${pokemon.name}`)

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
                                    <Div5>
                                    <Link to={`/pokemonDetail/${item.id}`} key={item.id}>
                                            Dathalle
                                        </Link>
                                    <Button>Captcha!</Button></Div5>
                                    {/*<Div5 class="buttons-container">
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
                                    </Div5>*/}
                                </Div>
                            </Section>

                        )
                    })
            }
        </>
    )
}

export default Card;
