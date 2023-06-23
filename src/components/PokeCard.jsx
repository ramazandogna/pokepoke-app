import '../assets/styles/pokeCard.css';

import { Link } from 'react-router-dom';
import React from 'react';

function PokemonCard({ pokemon }) {
   return (
      <div className="poke-card">
         <div className="pokemon-image-container">
            <img
               src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
               alt={`poke ${pokemon.id}`}
               className="pokemon-image"
            />
         </div>
         <div className="pokemon-name">{pokemon.name}</div>
         <div className="pokemon-types">
            {pokemon.types.map((type) => (
               <div
                  className="pokemon-type"
                  key={type.type.url}
               >
                  {type.type.name}
               </div>
            ))}
         </div>
         <div className="pokemon-description">{pokemon.flavor_text}</div>
         <Link
            to={`/pokemon/${pokemon.id}`}
            className="pokemon-link"
         >
            Detayları görüntüle
         </Link>
      </div>
   );
}

export default PokemonCard;
