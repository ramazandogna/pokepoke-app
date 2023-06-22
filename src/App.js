import { Route, Routes } from 'react-router-dom';

import Banner from './components/Banner';
import Header from './components/Header';
import PokeMarket from './pages/PokeMarket';
import Pokelist from './pages/Pokelist';
import PokemonDetail from './pages/PokemonDetail';
import Pokemons from './components/Pokemons';
import Search from './pages/Search';

function App() {
   return (
      <div>
         <Header />
         <Banner />
         <div className="main-section">
            <div className="container">
               <Routes>
                  <Route
                     path="/"
                     element={<Pokemons />}
                  />
                  <Route
                     path="/pokelist"
                     element={<Pokelist />}
                  />
                  <Route
                     path="/search"
                     element={<Search />}
                  />
                  <Route
                     path="/market"
                     element={<PokeMarket />}
                  />
                  <Route
                     exact
                     path="/pokemon/:id"
                     element={<PokemonDetail />}
                  />
               </Routes>
            </div>
         </div>
      </div>
   );
}

export default App;
