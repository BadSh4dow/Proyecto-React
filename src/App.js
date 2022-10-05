import './App.css';

function App() {
  return (
    <main>
      <nav className="navBar">
        <div className="pokeball">
          <img src ="/Iconos-imagenes/Pokeball.png"/>
        </div>

        <h1>Pokedex</h1>

        <div className="searchBar">
          Buscador
        </div>

        <div className= "arrowFilter">
          <span>#</span> 
          <img src="/Iconos-imagenes/Arrow.svg"/>
        </div>

      </nav>
    
      <div className="pokemonView">
        grilla
      </div>

    </main>
  
  );
}

export default App;
