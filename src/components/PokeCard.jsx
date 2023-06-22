import '../assets/styles/pokeCard.css';

// import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchPokeData } from '../redux/Slices/pokeCardSlice';

function PokeCard() {
   // const [favorite, setFavorite] = useState(false);
   const dispatch = useDispatch();
   const pokemonData = useSelector((state) => state.pokeCard.pokemonData);
   const loading = useSelector((state) => state.pokeCard.loading);
   const error = useSelector((state) => state.pokeCard.error);

   useEffect(() => {
      dispatch(fetchPokeData());
   }, [dispatch]);

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error occurred: {error}</div>;
   }

   return (
      <div className="poke-container">
         {pokemonData &&
            pokemonData.map((pokemon) => (
               <div
                  key={pokemon.id}
                  className="poke-card"
               >
                  {/* <div
                  className="favorite-icon"
                  onClick={handleFavorite}
               >
                  {favorite === false ? <MdFavorite /> : <MdFavoriteBorder />}
               </div> */}
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

                  <div className="pokemon-description">
                     {pokemon.flavor_text}
                  </div>
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
