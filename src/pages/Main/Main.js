import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card"
import axios from 'axios';
import { Div1, Div2,  Button, Section } from "./styled";
import {BASE_URL} from "../../Constants/url"

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [pokemon, setPokemon] = useState();
    const getPokemon = async (res) => {

        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
             //   console.log(result)
                if (!state.some(pokemon => pokemon.id === result.data.id)) {
                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return [...state, result.data]
                } else {
                    return state
                }
            })
        })
    }
              
    const pokeFun = async (url) => {
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        await getPokemon(res.data.results);
        setLoading(false);
    }
    
    useEffect(() => {
        pokeFun(BASE_URL);
    }, [])

    return (
        <>
    
               <Div1 className="container">
                    <Section>      
                        <Card pokemon={pokeData} loading={loading}  infoPokemon={poke => setPokeDex(poke)} />
                    </Section>
                </Div1>
                <Div2 className="btn-group">
                    {prevUrl && <Button onClick={() => {
                        setPokeData([])
                        setUrl(prevUrl)
                        pokeFun(prevUrl)
                    }}>Previous</Button>}
                    {nextUrl && <Button onClick={() => {
                        setPokeData([])
                        pokeFun(nextUrl)
                    }}>Next</Button>}
                </Div2>
            
            </>
            )
}



export default Main;
