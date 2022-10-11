import React from "react";

const PokemonDetail = () =>{
    return(
        <div className="BackgroundcolorGreen">
            <span>Bulbasaur</span>
            <span>#001</span>
            <img src="/Iconos-imagenes/Arrow.svg"/>
            <div className="pokemonDetails">
                <div className="pokemonType">
                    <span>Grass</span>
                    <span>Poison</span>
                </div>  
                <div className="pokemonWH">
                    <span>Wheight</span>
                    <img src={`/Iconos-imagenes/Weight.svg`} alt="pokemons"/>
                    <span>Height</span>
                    <img src={`/Iconos-imagenes/Height.svg`} alt="pokemons"/>
                    <span>Moves</span>
                </div>    
                <p>There is a plant seed on its back right from the days this Pokémon is a bom. The seed slowly grows larger</p>
                <div className="pokemonStats">
                    <div>
                        <ul>HP...</ul>
                    </div>
                    <div>
                        <ul>60...</ul>
                    </div>
                    <div>
                        Barra Verde
                    </div>
                </div>
            
            </div>

        </div>

    )
}
export default PokemonDetail