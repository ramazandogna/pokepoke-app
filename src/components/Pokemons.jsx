import '../assets/styles/pokemons.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';
import { FaRandom } from 'react-icons/fa';
import PokeCard from './PokeCard';
import { fetchPokeData } from '../redux/Slices/pokeFetchSlice';
import { setSelectedCategory } from '../redux/Slices/categorySlice';

function Pokemons() {
   const pokemonData = useSelector((state) => state.pokes.pokemonData);
   const selectedCategory = useSelector((state) => state.category);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchPokeData());
   }, [dispatch]);

   const handleCategoryClick = (category) => {
      dispatch(setSelectedCategory(category));
   };

   const filteredPokemonData = pokemonData.filter(
      (pokemon) =>
         selectedCategory === null ||
         pokemon.types[0].type.name === selectedCategory
   );

   const changePokemonData = () => {
      dispatch(fetchPokeData());
   };

   return (
      <div className="section">
         <h2 className="section-title">Pokemons:</h2>

         <Categories setSelectedCategory={handleCategoryClick} />
         <div
            className="section-2"
            z
         >
            <button
               className="poke-generate-button"
               onClick={changePokemonData}
            >
               <FaRandom />{' '}
               <p className="generate-button-text">Bring New Pokemons</p>
            </button>
         </div>

         <div className="poke-container">
            {filteredPokemonData.map((pokemon) => (
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
