import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom'

 const PokemonGrid = (props)=>{

    
    const [pokemonsBank,setPokemonsBank] = useState([])
    function addZero(number){
        return number.toString().padStart(3,"0")

        
    }


    useEffect(() => {
        fetch('http://localhost:3004/pokemons')
        .then(function(response){
          return response.json();
        })
        .then((result) => {
            setPokemonsBank(result)
        })
      },[])
    return (

    <div className="pokemonView" >
        {pokemonsBank.sort((a,b) =>{
            if(props.sortByNumber) 
                return a.number - b.number
            else {
                return (a.name.localeCompare(b.name))
            }
        }).filter((pokemon)=>pokemon.name.toLowerCase().includes(props.searchValue.toLowerCase())).map((pokemon, number) =>{


            
        return(
            <Link to={"/"+pokemon.number} style={{ textDecoration: 'none' }}>
            <div className={`containerPokemon ${pokemon.types[0].toLowerCase()}`} key={number}>
                <div className="numberOfPokemon">
                    <span>#{addZero(pokemon.number)}</span>
                </div>
                <div className="pokemonImgOne">
                    <img className="grassImg" src={`/Iconos-imagenes/${pokemon.name.toLowerCase()}.png`} alt="pokemons"/>
                </div>
                <div className={`pokemonTxtOne ${pokemon.types[0].toLowerCase()}`}
>
                    <span className="grassTxt">{pokemon.name}</span>
                </div>    
            </div>
            </Link>
        )
        })}
    </div> 
    ); 
}
export default PokemonGrid;