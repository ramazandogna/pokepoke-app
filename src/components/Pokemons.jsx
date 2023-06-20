import '../assets/styles/pokemons.css';

import Categories from './Categories';
import PokeCard from './PokeCard';
import React from 'react';

function Pokemons() {
   return (
      <div className="section">
         <h2 className="section-title">Types:</h2>
         <Categories />
         <PokeCard />
      </div>
   );
}

export default Pokemons;
