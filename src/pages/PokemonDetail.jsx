import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

function Pokemondetail() {
   const { id } = useParams();
   const [pokemon, setPokemon] = useState(null);

   useEffect(() => {
      const fetchPokemon = async () => {
         try {
            const response = await axios.get(
               `https://pokeapi.co/api/v2/pokemon/${id}/`
            );
            const pokemonData = response.data;
            setPokemon(pokemonData);
         } catch (error) {
            console.error(error);
         }
      };

      fetchPokemon();
   }, [id]);

   if (!pokemon) {
      return <div>Loading...</div>;
   }
   console.log(pokemon);

   return (
      <div className="section">
         <h2 className="section-title">{pokemon.name} 🔥 </h2>
         <div></div>
      </div>
   );
}

export default Pokemondetail;
