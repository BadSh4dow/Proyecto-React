import React from "react";

const RenderCartas= () =>{
    return(
        
    <React.Fragment>
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
            
        <div className="containerPuto">
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
    </React.Fragment>
        

        
    )
}
export default RenderCartas