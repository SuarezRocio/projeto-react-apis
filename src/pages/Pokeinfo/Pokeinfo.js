import React from "react";
/*import { Div1 , H1, Img, Div3, Div4, Div2} from "./styled";*/

const Pokeinfo = ({ data }) => {
    console.log(data)
    return (
        <>
            {
                data && (
                    <div1>
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" srcset="" />
                        <div2 className="abilities">
                            {
                                data.abilities.map(poke => {
                                    return (
                                            <div3 className="group">
                                                <h2>{poke.ability.name}</h2>
                                            </div3>
                                    )
                                })
                            }
                        </div2>
                        <div4 className="base-stat">
                              {
                                data.stats.map(poke=>(
                                    <h3 key={poke.stat.name}>{poke.stat.name} :
                                    {poke.base_stat}
                                    </h3>
                                ))
                              }  
                        </div4>
                    </div1>
    )
}
                            
{/**className="rigthContent"*/}

                            {/**<h3>Hp:30</h3>
                            <h3>attack:52</h3>
                            <h3>defense:43</h3>
                            <h3>special-attack:50</h3>
                            <h3>Speed</h3> */}
        </>
    )
}
export default Pokeinfo;