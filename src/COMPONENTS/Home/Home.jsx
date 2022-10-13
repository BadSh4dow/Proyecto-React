import React, { useState } from 'react';
import ArrowFilter from '../ArrowFilter/ArrowFilter';
import PokemonGrid from '../PokemonGrid/PokemonGrid';
import SearchBar from '../SearchBar/SearchBar';

const Home=()=>{
    const [searchValue, setSearchValue] = useState("")
    const [sortByNumber, setSortByNumber] = useState(true)
    
    return (
        <main>
        <nav className="navBar">
        <div className="pokeball">
            <img src ="/Iconos-imagenes/Pokeball.png"/>
        </div>

        <h1>Pokédex</h1>
        <SearchBar 
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
        />

        <ArrowFilter
            sortByNumber={sortByNumber}
            setSortByNumber = {setSortByNumber}
        />

        </nav>
        <PokemonGrid
        sortByNumber={sortByNumber}
        searchValue={searchValue}
        />
    </main>
)
}


export default Home;