import React from "react";
import { Link } from "react-router-dom";
import { Div, Div1,Img , Div4, Div2, Span, Div5, Button, Section} from "./styled";


const Card = ({ pokemon, loading, infoPokemon }) => {

    return (
        <>

            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                          
                        <Section>
                            <Div class="card-pokemon" className="card" onClick={() => infoPokemon(item)}>
                                <Div1 class="card-info-pokemon">
                                    <Div2 class="info-pokemon">
                                        <h3>{item.id}</h3>
                                        <h2>{item.name}</h2>
                                        <div>
                                            <Span class="type">Grass</Span>
                                            <Span class="type">Poison</Span>
                                        </div>
                                    </Div2>
                                    <Div4 class="img-pokemon">
                                        <Img srcSet={item.sprites.front_default} alt="" />
                                    </Div4>
                                </Div1>
                                <Div5 class="buttons-container">
                                    <Link to={`/pokemonDetail/${item.id}`} key={item.id}>
                                        Dathalle
                                    </Link>
                                    <Button>Capturar!</Button>
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

/**{
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                            <Link to={`/pokemonDetail/${item.id}`} key={item.id}>    
                                <Div className="card" onClick={()=>infoPokemon(item)}>
                                    <H2>{item.id}</H2>
                                    <Img srcSet={item.sprites.front_default} alt=""  />
                                    <H2>{item.name}</H2>
                                </Div>
                            </Link>    
                            </>
                        )
                    })
            } */