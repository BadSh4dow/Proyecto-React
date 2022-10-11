import React from "react";

const PokemonDetail = () =>{
    return(
        <div className="BackgroundcolorGreen">
            <span>Bulbasaur</span>
            <span>#001</span>
            <img src="/Iconos-imagenes/Arrow.svg"/>
            <div className="">
                <div>
                    <span>Grass</span>
                    <span>Poison</span>
                </div>  
                <div>
                    <span>Wheight</span>
                    <img src="/Imagenes-iconos/Weight.svg"/>
                    <span>Height</span>
                    <img src="/Imagenes-iconos/Height.svg"/>
                    <span>Moves</span>
                </div>    
                <p>There is a plant seed on its back right from the days this Pokémon is a bom. The seed slowly grows larger</p>
                <div>
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