import '../assets/styles/categories.css';

import { useDispatch, useSelector } from 'react-redux';

import CategoryBox from './CategoryBox';
import React from 'react';
import { setSelectedCategory } from '../redux/Slices/categorySlice';

function Categories() {
   const dispatch = useDispatch();
   const pokemonData = useSelector((state) => state.pokes.pokemonData);

   const handleCategoryClick = (category) => {
      dispatch(setSelectedCategory(category));
   };

   return (
      <div className="category-boxes">
         <div
            onClick={() => handleCategoryClick(null)}
            className="category-box"
         >
            All
         </div>
         {pokemonData.map((pokemon) => (
            <CategoryBox
               key={pokemon.id}
               pokemon={pokemon}
               onClick={handleCategoryClick}
            />
         ))}
      </div>
   );
}

export default Categories;
