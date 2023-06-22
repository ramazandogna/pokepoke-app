import React, { useEffect } from 'react';
import {
   fetchPokemonDetail,
   fetchSimilarPokemons,
} from '../redux/Slices/pokemonDetailSlice';
import { useDispatch, useSelector } from 'react-redux';

import PokeCard from '../components/PokeCard';
import { useParams } from 'react-router-dom';

function PokemonDetail() {
   const { id } = useParams();
   const dispatch = useDispatch();

   const pokemon = useSelector((state) => state.pokemonDetail.pokemon);
   const similarPokemons = useSelector(
      (state) => state.pokemonDetail.similarPokemons
   );
   const loading = useSelector((state) => state.pokemonDetail.loading);
   const error = useSelector((state) => state.pokemonDetail.error);

   useEffect(() => {
      dispatch(fetchPokemonDetail(id));
      dispatch(fetchSimilarPokemons(id));
   }, [dispatch, id]);

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error occurred: {error}</div>;
   }

   return (
      <div className="section">
         {pokemon && (
            <>
               <h2 className="section-title">{pokemon.name} 👀</h2>
               <div className="pokemon-container">
                  <div className="pokemon-img-container">
                     <img
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                        alt={`poke ${pokemon.id}`}
                        className="pokemon-image"
                     />
                  </div>
                  <div className="pokemon-details">
                     <div>{pokemon.name}</div>
                     <div>{pokemon.weight}</div>
                     <div>{pokemon.height}</div>
                     <div>{pokemon.flavor_text}</div>
                     <div>
                        {pokemon.types.map((type) => (
                           <div
                              className="pokemon-type"
                              key={type.type.url}
                           >
                              {type.type.name}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </>
         )}
         <div className="section-title">Similar Pokemons</div>
         <div className="similar-pokemons-container">
            {console.log(similarPokemons)}
            {similarPokemons.map((similarpoke) => (
               <PokeCard
                  pokemon={similarpoke}
                  key={similarpoke.id}
               />
            ))}
         </div>
      </div>
   );
}

export default PokemonDetail;
