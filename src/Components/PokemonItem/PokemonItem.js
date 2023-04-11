import React from "react";
import {DivMain, Div, Div1, Img, Div4, Div2, Divspan, Div5, Button, Section, Pokebol } from "./styled";
import { usePokedexContext } from "../../GlobalContext/globalState";
import { Link } from "react-router-dom";
import pokebol from "../../assets/pngwing 2.png";

const PokemonItem = ({item}) => {


const { addToPokedex, removeFromPokedex , isInPokedex, pokedex} = usePokedexContext();

return(
   
   <DivMain>   
    <Section>
    <Div class="card-pokemon" className="card">
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
            { !isInPokedex (item) ? (                                           
            <Button onClick={() => addToPokedex(item)}>Captcha!</Button>

            ) : (
                <Button onClick={() => removeFromPokedex(item.id)}>Remover da Pokedex</Button>
            )}
            </div>
        </Div5>
    </Div>
</Section>
</DivMain> 

)}


export default PokemonItem;