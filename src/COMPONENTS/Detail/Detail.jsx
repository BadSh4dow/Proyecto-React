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
                            <div className="typeA">
                                <span>{`${pokemon.types[0]}-title`}</span>
                            </div>
                            <div className="typeB">
                                <span>{`${pokemon.types[0]}-title`}</span>
                            </div>
                        </div>
                        <span className="about">About</span>  
                        <div className="pokemonWH">
                            <div className="weightt">    
                                <span>Wheight</span>
                                <img src={`/Iconos-imagenes/Weight.svg`} alt="pokemons"/>
                                <span>{(pokemon.weight)}</span>
                            </div>
                            
                            <div className="heightt"> 
                                <span>Height</span>
                                <img src={`/Iconos-imagenes/Height.svg`} alt="pokemons"/>
                                <span>{(pokemon.height)}</span>
                            </div>
                            <div className="moves"> 
                                <span>{pokemon.moves}</span>
                            </div>
                        </div>
                            
                        <span className="detailText">There is a plant seed on its back right from the days this Pokémon is a bom. The seed slowly grows larger</span>
                        <span className="baseStats">Base Stats</span>
                        
                        
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
                )
            }
           
        </div>


    )
}
export default PokemonDetail