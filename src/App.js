import './App.css';
import PokemonDetail from './COMPONENTS/Detail/Detail';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './COMPONENTS/Home/Home';
import Detail from './COMPONENTS/Detail/Detail'


function App() {
  
  return (<BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/:id" element={<PokemonDetail/>}></Route>
             
            </Routes>
    </BrowserRouter>
  );
}

export default App;
