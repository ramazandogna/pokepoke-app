import '../assets/styles/categories.css';

import { AiOutlineArrowRight } from 'react-icons/ai';
import CategoryBox from './CategoryBox';
import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
   const pokemonData = useSelector((state) => state.pokes.pokemonData);

   return (
      <div className="category-boxes">
         <div className="category-box">
            <AiOutlineArrowRight />.
         </div>
         {pokemonData.map((pokemon) => (
            <CategoryBox
               key={pokemon.id}
               pokemon={pokemon}
            />
         ))}
      </div>
   );
}

export default Categories;
