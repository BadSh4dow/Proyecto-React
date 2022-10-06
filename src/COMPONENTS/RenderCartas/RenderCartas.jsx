import React from "react";

const RenderCartas= () =>{
    return(
        <div className="containerGrass">
            <div className="numberOfPokemon">
                <span>#001</span>
            </div>
            <div className="pokemonImgOne">
                <img className="grassImg" src="/Iconos-imagenes/bulbasaur.png"/>
            </div>
            <div className="pokemonTxtOne">
                <span className="grassTxt">Bulbasaur</span>
            </div>    
        </div>
    )
}
export default RenderCartas