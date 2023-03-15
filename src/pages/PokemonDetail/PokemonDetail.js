import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Section, Div1, Div2, Div3, Div4, Div5, Divimagen, Img, H2 ,P, P1} from "./styled";

const url = "https://pokeapi.co/api/v2/pokemon/";
const PokemonDetail = () => {
    const { pid } = useParams()
    console.log(pid)

    const [pokemonSelect, setPokemonSelect] = useState({});
    const [loading, setLoading] = useState(false);

    const getPokemon = async () => {
        let response = await axios.get(url + pid)
        setPokemonSelect(response.data)
        console.log(response.data)
        setLoading(true)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    /**moves, sprites, stats, types */

    return (
        <>
            {!loading ? <h2>cargando</h2> :
                <>
                    <h1>Detalhes</h1>
                    <Section class="poke-detail-container">
                        <Divimagen class="containers-img">
                            <Div1 class="container-img">
                                <Img src={pokemonSelect.sprites.front_default} />
                            </Div1>
                            <Div2 class="container-img">
                                <Img src={pokemonSelect.sprites.back_default} />
                            </Div2>
                        </Divimagen>
                        <Div3 class="stats-container">
                            <H2>Base Stats</H2>
                            {pokemonSelect.stats.map((stat) => (
                                <p key={Math.random()}>{stat.stat.name}: {stat.base_stat}</p>
                            ))}
                        </Div3>
                        <Div4 class="info-pokemon">
                            
                            {pokemonSelect.types.map((type) => (
                                <>
                                    <P1 key={Math.random()}>{type.type.name}</P1>
                                </>
                            ))}
                        </Div4>

                        <Div5 class="move-container">
                            <H2>Atacks</H2>
                            {pokemonSelect.moves.map((move) => (
                                <P key={Math.random()}>{move.move.name}</P>
                            ))}
                        </Div5>
                    </Section>
                </>
            }
        </>
    )
}


/*
        <h1>Detalles</h1>
        <section class="poke-detail-container">
            <div class="containers-img">
                <div class="container-img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="">
                </div>
                <div class="container-img">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" alt="">
                </div>
            </div>
            <div class="stats-container">
                <h2>
                    Base Stats
                </h2>
                <div class="stat">
                    <p>Hp: </p>
                    <p>45</p>
                    <meter min="0" max="100" value="45"></meter>
                </div>
                <div class="stat">
                    <p>Hp: </p>
                    <p>45</p>
                    <meter min="0" max="100" value="45"></meter>
                </div>
                <div class="stat">
                    <p>Hp: </p>
                    <p>45</p>
                    <meter min="0" max="100" value="45"></meter>
                </div>
            </div>
            <div class="info-pokemon">
                <div class="info">
                    <h3>#01</h3>
                    <h2>Bulbasur</h2>
                    <div>
                        <span>Grass</span>
                        <span>Poison</span>
                    </div>
                </div>
                <div class="move-container">
                    <h2>Move:</h2>
                    <p class="move">Razor Wind</p>
                    <p class="move">Sword Dance</p>
                    <p class="move">Cut</p>
                    <p class="move">Wine Whip</p>
                </div>
            </div>
            <div class="poke-img">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" alt="">
            </div>
        </section>*/
export default PokemonDetail;