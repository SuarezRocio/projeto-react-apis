import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card"
//import Pokeinfo from '../Pokeinfo/Pokeinfo';
import axios from 'axios';
import { Div1, Div2, Div4, Button, Section , Container} from "./styled";
//import { useState } from "react";
//import { useState } from "react";
import pokemonImg from "../../assets/pokemonImagen.png"

const Main = ({ pokemonImagen }) => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [addToPokedex, setAddToPokedex] = useState();
    const [removeFromPokedex, setRemoveFromPokedex] = useState();
    const [ pokelist, setPokeList] = useState();
    const [ pokedex, setPokedex] = useState();
    
    const pokemonImg1 = pokemonImg
    const getPokemon = async (res) => {


        res.map(async (item) => {
            const result = await axios.get(item.url)
            //console.log(item.url)
            //console.log(result.data)
            // console.log(pokeData)
            setPokeData(state => {
                console.log(result)

                if (!state.some(pokemon => pokemon.id == result.data.id)) {

                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return [...state, result.data]
                } else {
                    return state
                }
            })
            //setLoading(false)
        })
    }

    // não mostrar pokemons que estão na pokedex
    const filteredPokelist = () =>
        pokelist.filter(
            (pokemonInList) =>
                !pokedex.find(
                    (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
                )
        );


    const pokeFun = async () => {
        //setLoading(true)
        const res = await axios.get(url);
        //console.log(res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        await getPokemon(res.data.results);
        setLoading(false);
        //console.log(pokeData);
    }



    useEffect(() => {
        pokeFun();
        // console.log(pokeData)
    }, [url])
    console.log(pokeData)
    return (
        <>
            <Div4>
                <h1>
                    <img src={pokemonImg1} alt="pokemon logo" />

                </h1>
            </Div4>

            <Container>
                <section>
                    {filteredPokelist().map((pokemon) => (
                        <Card
                            key={pokemon.url}
                            pokemonUrl={pokemon.url}
                            addToPokedex={addToPokedex}
                        />
                    ))}
                </section>
            </Container>
                <Div1 className="container">
                    <Section>
                        <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
                    </Section>

                    {/* <Pokeinfo data={pokeDex}/>*/}
                </Div1>
                <Div2 className="btn-group">
                    {prevUrl && <Button onClick={() => {
                        setPokeData([])
                        setUrl(prevUrl)
                    }}>Previous</Button>}
                    {nextUrl && <Button onClick={() => {
                        setPokeData([])
                        setUrl(nextUrl)
                    }}>Next</Button>}
                </Div2>
            </>
            )
}

/**
        <Div4>
            </Div4>
            <Div1 className="container">
                <Div3 className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
                </Div3>

                <Pokeinfo data={pokeDex} />
            </Div1>
            <Div2 className="btn-group">
                {prevUrl && <Button onClick={() => {
                    setPokeData([])
                    setUrl(prevUrl)
                }}>Previous</Button>}
                {nextUrl && <Button onClick={() => {
                    setPokeData([])
                    setUrl(nextUrl)
                }}>Next</Button>}
            </Div2> */

            export default Main;
