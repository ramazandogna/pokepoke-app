import React from 'react';
import { colors } from '../assets/cardColors';

function CategoryBox({ pokemon, onClick }) {
   const typeColor = colors[pokemon.types[0].type.name];

   const handleClick = () => {
      onClick(pokemon.types[0].type.name);
   };

   return (
      <div
         key={pokemon.id}
         className="category-box"
         style={{ backgroundColor: typeColor }}
         onClick={handleClick}
      >
         {pokemon.types[0].type.name}
      </div>
   );
}

export default CategoryBox;
