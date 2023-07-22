import '../assets/styles/pokemons.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';
import { FaRandom } from 'react-icons/fa';
import PokeCard from './PokeCard';
import { fetchPokeData } from '../redux/Slices/pokeFetchSlice';
import { motion } from 'framer-motion';
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

   const container = {
      visible: {
         transition: {
            delayChildren: 1,
            staggerChildren: 1,
         },
      },
   };

   const item = {
      hidden: {
         opacity: 0,
         translateX: -80,
      },

      visible: {
         opacity: 1,
         translateX: 0,
      },
   };

   return (
      <motion.div
         initial={{ opacity: 0, translateY: 30 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ delay: 0.05 }}
         className="section"
      >
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

         <motion.div
            className="poke-container"
            variants={container}
            initial="hidden"
            animate="visible"
         >
            {filteredPokemonData.map((pokemon) => (
               <motion.div
                  key={pokemon.id}
                  variants={item}
               >
                  <PokeCard pokemon={pokemon} />
               </motion.div>
            ))}
         </motion.div>
      </motion.div>
   );
}

export default Pokemons;
