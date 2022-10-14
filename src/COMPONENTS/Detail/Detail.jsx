import React, {useEffect} from "react";
import ProgressBar from "../ProgressBar/progressBar";
import {Link, useParams} from 'react-router-dom'
import { useState } from "react";

const PokemonDetail = () =>{
    const [pokemon,setPokemon] = useState()
    const id = useParams().id

    function addZero(number){
        return number.toString().padStart(3,"0")  
    }

    useEffect(() => {
        fetch('http://localhost:3004/pokemons')
        .then(function(response){
          return response.json();
        })
        .then((result) => {
           setPokemon(result.find((poke)=>poke.number==id))
        })
      },[])

      const mapColors = new Map();
      mapColors.set("Fire", "#F57D31")
      mapColors.set("Steel", "#8789B0")
      mapColors.set("Grass", "#74CB48")
      mapColors.set("Bug",  "#A78723")
      mapColors.set("Normal", "#AAA67F")
      mapColors.set("Ghost", "#70559B")
      mapColors.set("Psychic", "#FB5584")
      mapColors.set("Electric", "#F9CF30")
      mapColors.set("Water", "#6493EB")

    
    return(
        <div className="pokeDetalle">
            {
                pokemon &&
                (
                    <div className={`backgroundCard ${pokemon.types[0]}-title`}>
                    <div className="pokemonVista">
                            <img className="pokeFoto" src="/Iconos-imagenes/Pokeball.png"/>
                        <div className="navDetail">
                            <span className="nameD">{pokemon.name}</span>
                            <span className="numberD">#{addZero(pokemon.number)}</span>
                            <Link to={"/"}>
                                <img  className="arrowD" src="/Iconos-imagenes/arrow-left.svg"/>
                            </Link> 
                        </div>
                        <img className="imgDetail" src={`/Iconos-imagenes/${pokemon.name.toLowerCase()}.png`} alt="pokemons"/>
                    </div>
                    <div className="pokemonDetails">
                        <div className="pokemonType">
                            <div className={`typeA ${pokemon.types[0]}-title`}>
                                <span>{`${pokemon.types[0]}`}</span>
                            </div>
                            <div className={`typeB ${pokemon.types[1]}-title`}>
                                <span>{`${pokemon.types[1]}`}</span>
                            </div>
                        </div>
                        <span className="about">About Puto</span>  
                        <div className="pokemonWH">
                            <div className="weightt">    
                                <div className="imgAndW">
                                    <img src={`/Iconos-imagenes/Weight.svg`} alt="pokemons"/>
                                    <p>{(pokemon.weight)}kg</p>
                                </div>
                                <span>Wheight</span>
                            </div>
                            
                            <div className="heightt">
                                <div className="imgAndH">
                                    <img src={`/Iconos-imagenes/Height.svg`} alt="pokemons"/>
                                    <p>{(pokemon.height)}m</p>
                                </div> 
                                <span>Height</span>
                            </div>
                            <div className="moves"> 
                                <div className="pokemonMoves">
                                    <span className="moveOne">{pokemon.moves[0]}</span>
                                    <span className="moveTwo">{pokemon.moves[1]}</span>
                                </div>
                                
                                <span className="movesSpan">Moves</span>
                            </div>
                        </div>
                            
                        <span className="detailText">{pokemon.description}</span>
                        <span className="baseStats">Base Stats</span>

                        <div className="statsGrid">
                            <div className="statsNames">
                                <p>HP</p>
                                <p>ATK</p>
                                <p>DEF</p>
                                <p>SATK</p>
                                <p>SDEF</p>
                                <p>SPD</p>
                            </div>
                            <div className="statsNumbers">
                                <p>{pokemon.stats.hp}</p>
                                <p>{pokemon.stats.atk}</p>
                                <p>{pokemon.stats.def}</p>
                                <p>{pokemon.stats.satk}</p>
                                <p>{pokemon.stats.sdef}</p>
                                <p>{pokemon.stats.spd}</p>
                            </div>
                            <div className="pokemonStats">
                            <ProgressBar completed={pokemon.stats.hp} bgcolor={mapColors.get(pokemon.types[0])}/>
                            <ProgressBar completed={pokemon.stats.atk} bgcolor={mapColors.get(pokemon.types[0])}/>
                            <ProgressBar completed={pokemon.stats.def} bgcolor={mapColors.get(pokemon.types[0])}/>
                            <ProgressBar completed={pokemon.stats.satk} bgcolor={mapColors.get(pokemon.types[0])}/>
                            <ProgressBar completed={pokemon.stats.sdef} bgcolor={mapColors.get(pokemon.types[0])}/>
                            <ProgressBar completed={pokemon.stats.spd} bgcolor={mapColors.get(pokemon.types[0])}/>
                            </div>

                        </div>

                        
                        
    
    
                            
                        
                    
                    </div>
    
                </div>
                )
            }
           
        </div>


    )
}
export default PokemonDetail