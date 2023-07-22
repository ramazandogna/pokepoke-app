import '../assets/styles/pokelist.css';

import { Link } from 'react-router-dom';
import PokeCard from '../components/PokeCard';
import React from 'react';
import { motion } from 'framer-motion';
import { selectAllPokes } from '../redux/Slices/pokeControlSlice';
import { useSelector } from 'react-redux';

function Pokelist() {
   const pokeList = useSelector(selectAllPokes);
   return (
      <motion.div
         initial={{ opacity: 0, translateY: 30 }}
         animate={{ opacity: 1, translateY: 0 }}
         transition={{ delay: 0.1 }}
         className="section"
      >
         <h2 className="section-title"> Your Pokes: </h2>
         <div className="pokelist-container">
            {pokeList.length > 0 ? (
               pokeList.map((pokemon) => (
                  <PokeCard
                     pokemon={pokemon}
                     key={pokemon.id}
                  />
               ))
            ) : (
               <Link to="/">
                  <p className="add-pokemon">
                     Please Click and Add Some Poke from Pokedex
                  </p>{' '}
               </Link>
            )}
         </div>
      </motion.div>
   );
}

export default Pokelist;
