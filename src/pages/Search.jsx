import '../assets/styles/search.css';

import React, { useState } from 'react';

import { RiSearchEyeLine } from 'react-icons/ri';

function Search() {
   const [query, setQuery] = useState('');
   const [pokeList, setPokeList] = useState([]);

   const fetchAndFilterPokemonList = async (searchQuery) => {
      try {
         const response = await fetch(
            'https://pokeapi.co/api/v2/pokemon/?limit=1000'
         );
         const data = await response.json();
         const pokemonList = data.results.map((pokemon) => ({
            name: pokemon.name,
            url: pokemon.url,
         }));

         const filteredPokemonList =
            searchQuery === ''
               ? []
               : pokemonList
                    .filter((pokemon) =>
                       pokemon.name.toLowerCase().startsWith(searchQuery)
                    )
                    .slice(0, 5);

         setPokeList(filteredPokemonList);
      } catch (error) {
         console.error(error);
      }
   };

   const handleChange = (e) => {
      const searchQuery = e.target.value.toLowerCase();
      setQuery(searchQuery);
      fetchAndFilterPokemonList(searchQuery);
   };

   return (
      <div className="section">
         <h2 className="section-title">Search for find poke:</h2>
         <div className="input-container">
            <div className="input-wrapper">
               <RiSearchEyeLine className="input-icon" />
               <input
                  type="text"
                  className="poke-input"
                  placeholder="Search for find poke"
                  value={query}
                  onChange={handleChange}
               />
            </div>
            {pokeList.length > 0 && (
               <ul>
                  {pokeList.map((pokemon) => (
                     <li
                        key={pokemon.name}
                        className="pırt"
                     >
                        {pokemon.name}
                        {console.log(pokemon)}
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
}

export default Search;
