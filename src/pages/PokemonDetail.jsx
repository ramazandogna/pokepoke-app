import '../assets/styles/pokemonDetails.css';

import React, { useEffect } from 'react';
import {
   fetchPokemonDetail,
   fetchSimilarPokemons,
} from '../redux/Slices/pokemonDetailSlice';
import { useDispatch, useSelector } from 'react-redux';

import { FaWeightHanging } from 'react-icons/fa';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import PokeCard from '../components/PokeCard';
import { RiLineHeight } from 'react-icons/ri';
import { addPokeToPokeList } from '../redux/Slices/pokeControlSlice';
import { colors } from '../assets/cardColors';
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
      dispatch(fetchPokemonDetail(id)).then((action) => {
         const pokemonData = action.payload;
         const type = pokemonData.types[0].type.name;
         dispatch(fetchSimilarPokemons(type, id)); // id parametresini iletiyoruz
      });
   }, [dispatch, id]);

   const handleAddPoke = () => {
      dispatch(addPokeToPokeList(pokemon));
   };

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error occurred: {error}</div>;
   }

   if (!pokemon) {
      return null;
   }

   const typeColor = colors[pokemon.types[0].type.name];

   return (
      <div className="section">
         {pokemon && (
            <>
               <h2
                  style={{ backgroundColor: typeColor }}
                  className="section-title"
               >
                  {pokemon.name} 👀
               </h2>
               <div
                  style={{ backgroundColor: typeColor }}
                  className="pokemon-detail-container"
               >
                  <div className="pokemon-detail-image-container">
                     <img
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                        alt={`poke ${pokemon.id}`}
                        className="pokemon-detail-image"
                     />
                  </div>
                  <div className="pokemon-details-container">
                     <div className="pokemon-detail-name">{pokemon.name}</div>
                     <div className="pokemon-detail-type-container">
                        <ul className="pokemon-detail-ul">
                           {pokemon.types.map((type) => (
                              <li
                                 style={{ color: typeColor }}
                                 className="pokemon-detail-type"
                                 key={type.type.url}
                              >
                                 {type.type.name}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="pokemon-detail-weight">
                        <FaWeightHanging className="pokemon-detail-icons" />{' '}
                        Weight: {pokemon.weight / 10}kg
                     </div>
                     <div className="pokemon-detail-height">
                        <RiLineHeight className="pokemon-detail-icons" />{' '}
                        Height: {pokemon.height / 10}m
                     </div>
                     <div className="pokemon-detail-flavor-text">
                        {pokemon.flavor_text}
                     </div>
                     <div
                        onClick={handleAddPoke}
                        className="pokemon-detail-fav-container"
                     >
                        <button className="poke-add-button">
                           {' '}
                           <MdOutlineCatchingPokemon className="pokemon-detail-fav-icon" />
                           <p>Add to Pokelist</p>
                        </button>
                     </div>
                  </div>
               </div>
            </>
         )}
         <div
            style={{ backgroundColor: typeColor }}
            className="section-title"
         >
            Similar Pokemons
         </div>
         <div className="similar-pokemons-container">
            {console.log(similarPokemons)}
            {similarPokemons.map((similarPoke) => (
               <PokeCard
                  pokemon={similarPoke}
                  key={similarPoke.id}
               />
            ))}
         </div>
      </div>
   );
}

export default PokemonDetail;
