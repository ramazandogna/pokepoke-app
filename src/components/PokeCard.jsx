// import FavoriteIcon from './FavoriteIcon'; // Favori ikonu için kullanılacak bileşen
import '../assets/styles/pokemons.css'; // PokeCard bileşeninin stillerini içeren CSS dosyası

import React from 'react';

function PokeCard() {
   const pokemon = {
      name: 'Pikachu',
      types: ['Electric'],
      description:
         'Pikachu is an Electric-type Pokémon known for its electrical powers.',
   };

   const handleFavorite = () => {
      // Favori işareti tıklama işlemi
   };

   return (
      <div className="poke-card">
         <div
            className="favorite-icon"
            onClick={handleFavorite}
         >
            .{/* <FavoriteIcon /> */}
         </div>
         <div className="pokemon-image">img</div>
         <div className="pokemon-name">{pokemon.name}</div>
         <div className="pokemon-types">{pokemon.types.join(', ')}</div>
         <div className="pokemon-description">{pokemon.description}</div>
      </div>
   );
}

export default PokeCard;
