import '../assets/styles/pokemons.css';

import {
   addPokeToPokeList,
   removeFromPokeList,
   selectAllPokes,
} from '../redux/Slices/pokeControlSlice';
import { useDispatch, useSelector } from 'react-redux';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';
import { colors } from '../assets/cardColors';

function PokemonCard({ pokemon }) {
   const dispatch = useDispatch();

   const myPokes = useSelector(selectAllPokes);

   let storedPokes = myPokes.find((i) => i.id === pokemon.id);

   const typeColor = colors[pokemon.types[0].type.name];

   return (
      <div
         style={{ backgroundColor: typeColor }}
         className="poke-card"
      >
         <div className="pokemon-image-container">
            <img
               src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
               alt={`poke ${pokemon.id}`}
               className="pokemon-image"
            />
         </div>
         <div className="pokemon-name">{pokemon.name}</div>
         <div className="pokemon-types">
            <div
               style={{ color: typeColor }}
               className="pokemon-type"
            >
               {pokemon.types[0].type.name}
            </div>
         </div>
         <div className="pokemon-description">{pokemon.flavor_text}</div>
         <div
            onClick={() => addPokeToPokeList(pokemon)}
            className="pokemon-link-div"
         >
            {storedPokes ? (
               <button
                  className="pokemon-remove-button"
                  onClick={() => dispatch(removeFromPokeList(pokemon))}
               >
                  <div className="pokemon-button-remove">REMOVE</div>
                  <FaTimesCircle />
               </button>
            ) : (
               <button
                  className="pokemon-add-button"
                  onClick={() => dispatch(addPokeToPokeList(pokemon))}
               >
                  <div className="pokemon-button-add">ADD</div>
                  <BsFillPlusCircleFill />
               </button>
            )}

            <Link
               to={`/pokemon/${pokemon.id}`}
               className="pokemon-link"
            >
               <div className="pokemon-link-details">Details</div>
               <div className="pokemon-link-icon-div">
                  <BsFillArrowRightCircleFill />
               </div>
            </Link>
         </div>
      </div>
   );
}

export default PokemonCard;
