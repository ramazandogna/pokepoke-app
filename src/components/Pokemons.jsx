import '../assets/styles/pokemons.css';

import Categories from './Categories';
import PokeCard from './PokeCard';
import React from 'react';

function Pokemons() {
   return (
      <div className="section">
         <h2 className="section-title">Categories</h2>
         <Categories />
         <div className="pokemon-boxes">
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
         </div>
      </div>
   );
}

export default Pokemons;
