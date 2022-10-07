import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const RenderCartas= () =>{

    const [pokemonsBank,setPokemonsBank] = useState([])


    useEffect(() => {
        fetch('http://localhost:3004/pokemons')
        .then(function(response){
          return response.json();
        })
        .then((result) => {
            setPokemonsBank(result)
        })
      },[])

    return(
        
    <React.Fragment>

        {pokemonsBank.map((pokemon, number) =>{

            return(
                <div key={number}>
                    <div className="numberOfPokemon">
                        <span>{pokemon.number}</span>
                    </div>
                    <div className="pokemonImgOne">
                        <img className="grassImg" src={`/Iconos-imagenes/${pokemon.name.toLowerCase()}.png`} alt="pokemons"/>
                    </div>
                    <div className={`pokemonTxtOne ${pokemon.types[0]}-title`}>
                        <span className="grassTxt">{pokemon.name}</span>
                    </div>    
                </div>
            )
        })}

    </React.Fragment>
             
    )
}
export default RenderCartas