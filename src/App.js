import { Route, Routes } from 'react-router-dom';

import Cart from './pages/Cart';
import Header from './components/Header';
import PokeMarket from './pages/PokeMarket';
import Pokelist from './pages/Pokelist';
import PokemonDetail from './pages/PokemonDetail';
import Pokemons from './components/Pokemons';

function App() {
   return (
      <div>
         <Header />
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
                     path="/cart"
                     element={<Cart />}
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
