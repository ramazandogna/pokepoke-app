import '../assets/styles/pokemons.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';
import PokeCard from './PokeCard';
import { fetchPokeData } from '../redux/Slices/pokeFetchSlice';

function Pokemons() {
   const pokemonData = useSelector((state) => state.pokes.pokemonData);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchPokeData());
   }, [dispatch]);
   return (
      <div className="section">
         <h2 className="section-title">Pokemons:</h2>
         <Categories />
         <div className="poke-container">
            {pokemonData &&
               pokemonData.map((pokemon) => (
                  <PokeCard
                     key={pokemon.id}
                     pokemon={pokemon}
                  />
               ))}
         </div>
      </div>
   );
}

export default Pokemons;
