import React, { useState } from 'react';
import './App.css';
import ArrowFilter from './COMPONENTS/ArrowFilter/ArrowFilter';
import PokemonDetail from './COMPONENTS/Detail/Detail';
import PokemonGrid from './COMPONENTS/PokemonGrid/PokemonGrid';
import SearchBar from './COMPONENTS/SearchBar/SearchBar';

function App() {
  
  const [searchValue, setSearchValue] = useState("")
  const [sortByNumber, setSortByNumber] = useState(true)
  
  
  return (<>
    <PokemonDetail />
    {
      /*
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

      */
    }
    
    </>
  );
}

export default App;
