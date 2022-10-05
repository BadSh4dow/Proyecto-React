import React from 'react';
import './App.css';
import PokemonGrid from './PokemonGrid/PokemonGrid';

function App() {
  return (
    <main>
      <nav className="navBar">
        <div className="pokeball">
          <img src ="/Iconos-imagenes/Pokeball.png"/>
        </div>

        <h1>Pokédex</h1>

        <div className="searchBar">
          Buscador
        </div>

        <div className= "arrowFilter">
          <span>#</span> 
          <img src="/Iconos-imagenes/Arrow.svg"/>
        </div>

      </nav>
      <PokemonGrid/>
    </main>
  
  );
}

export default App;
