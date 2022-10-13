import React from "react";
import ProgressBar from "../ProgressBar/progressBar";
import {Link} from 'react-router-dom'

const PokemonDetail = () =>{

    
    return(
        <div className="pokeDetalle">
            <div className="BackgroundcolorGreen">
                <div className="pokemonVista">
                    <div className="navDetail">
                        <span className="nameD">Bulbasaur</span>
                        <span className="numberD">#001</span>
                        <Link to={"/"}>
                            <img  className="arrowD" src="/Iconos-imagenes/arrow-left.svg"/>
                        </Link> 
                    </div>
                    <img className="imgDetail" src={`/Iconos-imagenes/bulbasaur.png`} alt="pokemons"/>
                </div>
                <div className="pokemonDetails">
                    <div className="pokemonType">
                        <div className="typeA">
                            <span>Grass</span>
                        </div>
                        <div className="typeB">
                            <span>Poison</span>
                        </div>
                    </div>
                    <span className="about">About</span>  
                    <div className="pokemonWH">
                        <div className="weight">    
                            <span>Wheight</span>
                            <img src={`/Iconos-imagenes/Weight.svg`} alt="pokemons"/>
                        </div>
                        
                        <div className="height"> 
                            <span>Height</span>
                            <img src={`/Iconos-imagenes/Height.svg`} alt="pokemons"/>
                        </div>
                        <div className="moves"> 
                            <span>Moves</span>
                        </div>
                    </div>
                        
                    <span className="detailText">There is a plant seed on its back right from the days this Pokémon is a bom. The seed slowly grows larger</span>
                    <span className="baseStats">Base Stats</span>
                    
                    
                    <div className="pokemonStats">
                    <ProgressBar completed={60} bgcolor={'#74CB48'}/>
                    <ProgressBar completed={50} bgcolor={'#74CB48'}/>
                    <ProgressBar completed={10} bgcolor={'#74CB48'}/>
                    <ProgressBar completed={35} bgcolor={'#74CB48'}/>
                    <ProgressBar completed={45} bgcolor={'#74CB48'}/>
                    <ProgressBar completed={25} bgcolor={'#74CB48'}/>
                    </div>
                    


                        
                    
                
                </div>

            </div>
        </div>


    )
}
export default PokemonDetail