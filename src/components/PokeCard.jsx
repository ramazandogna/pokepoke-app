import '../assets/styles/pokemons.css'; // PokeCard bileşeninin stillerini içeren CSS dosyası

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function PokeCard() {
   const [favorite, setFavorite] = useState(false);
   const [pokeData, setPokeData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const getRandomIds = () => {
            const ids = [];
            while (ids.length < 8) {
               const randomId = Math.floor(Math.random() * 898) + 1;
               if (!ids.includes(randomId)) {
                  ids.push(randomId);
               }
            }
            return ids;
         };

         const pokemonIds = getRandomIds();

         try {
            const promises = pokemonIds.map(async (id) => {
               const response = await axios.get(
                  `https://pokeapi.co/api/v2/pokemon/${id}/`
               );
               const pokemonData = response.data;
               pokemonData.id = id; // ID değerini Pokémon verisine ekliyoruz

               const speciesResponse = await axios.get(
                  `https://pokeapi.co/api/v2/pokemon-species/${id}/`
               );
               const flavorTextEntries =
                  speciesResponse.data.flavor_text_entries;
               const englishEntry = flavorTextEntries.find(
                  (entry) => entry.language.name === 'en'
               );
               pokemonData.flavor_text = englishEntry.flavor_text;

               return pokemonData;
            });

            const results = await Promise.all(promises);
            setPokeData(results);
         } catch (e) {
            console.error(e);
         }
      };

      fetchData();
   }, []);

   const handleFavorite = () => {
      setFavorite(!favorite);
   };

   return (
      <div className="poke-container">
         {pokeData.map((pokemon) => (
            <div
               key={pokemon.id}
               className="poke-card"
            >
               <div
                  className="favorite-icon"
                  onClick={handleFavorite}
               >
                  {favorite === false ? <MdFavorite /> : <MdFavoriteBorder />}
               </div>
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
         ))}
      </div>
   );
}

export default PokeCard;
