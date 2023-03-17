import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card"
import axios from 'axios';
import { Div1, Div2, Div4, Button, Section } from "./styled";
import pokemonImg from "../../assets/pokemonImagen.png"
//import { GlobalContext } from "../../GlobalContext/globalState";
//import { useContext } from "react";
import {BASE_URL} from "../../Constants/url"

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    //const [addToPokedex, setAddToPokedex] = useState();
    //const [removeFromPokedex, setRemoveFromPokedex] = useState();
    //const [pokedex, setPokedex] = useState();
    //const [pokemon, setPokemon] = useState();
    //const { filteredPokelist, setFilteredPokelist } = useState()
    //const [ pokelist, setPokeList] = useState();
    //const [ pokedex, setPokedex] = useState();
    //const [location, setLocation] = useState();
    //const { pokemonMain, pokedex} = useContext(GlobalContext)
    
    const pokemonImg1 = pokemonImg
    const getPokemon = async (res) => {

        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                console.log(result)
                if (!state.some(pokemon => pokemon.id === result.data.id)) {
                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return [...state, result.data]
                } else {
                    return state
                }
            })
            //setLoading(false)
        })
    }
              
    const pokeFun = async () => {
        //setLoading(true)
        const res = await axios.get(BASE_URL);
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
    }, [BASE_URL])

    //console.log(pokeData)

    /*const filterPokemon= () =>
    pokemonMain.filter(
            (pokemonInMain) =>
                !pokedex.find(
                    (pokemonInPokedex) => pokemonInMain.name === pokemonInPokedex.name
                )
        );*/
{/* removeFromPokedex={removeFromPokedex} addToPokedex={addToPokedex}*/}
    return (
        <>
            <Div4>
                <h1>
                    <img src={pokemonImg1} alt="pokemon logo" />
                </h1>
            </Div4>
               <Div1 className="container">
                    <Section>      
                   {/* {filterPokemon().map((pokemon) => (*/}
                        <Card pokemon={pokeData} loading={loading}  infoPokemon={poke => setPokeDex(poke)} />
                    {/*))}*/}
                    </Section>
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



export default Main;
