import React from 'react';
import { colors } from '../assets/cardColors';

function CategoryBox({ pokemon }) {
   const typeColor = colors[pokemon.types[0].type.name];

   return (
      <div
         key={pokemon.id}
         className="category-box"
         style={{ backgroundColor: typeColor }}
      >
         {pokemon.types[0].type.name}
      </div>
   );
}

export default CategoryBox;
