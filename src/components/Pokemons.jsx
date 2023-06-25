import '../assets/styles/pokemons.css';

import React, { useEffect, useRef } from 'react';
import {
   fetchMorePokeData,
   fetchPokeData,
} from '../redux/Slices/pokeFetchSlice';
import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';
import PokeCard from './PokeCard';
import { setSelectedCategory } from '../redux/Slices/categorySlice';

function Pokemons() {
   const pokemonData = useSelector((state) => state.pokes.pokemonData);
   const selectedCategory = useSelector((state) => state.category);
   const loading = useSelector((state) => state.pokes.loading);
   const dispatch = useDispatch();
   const containerRef = useRef(null);

   useEffect(() => {
      dispatch(fetchPokeData());
   }, [dispatch]);

   useEffect(() => {
      const handleObserver = (entries) => {
         const target = entries[0];
         if (target.isIntersecting && !loading) {
            dispatch(fetchMorePokeData());
         }
      };

      const observerOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 1.0,
      };

      const observer = new IntersectionObserver(
         handleObserver,
         observerOptions
      );

      const currentContainerRef = containerRef.current;
      if (currentContainerRef && !loading) {
         // loading durumu kontrolü eklendi
         observer.observe(currentContainerRef);
      }

      return () => {
         if (currentContainerRef) {
            observer.unobserve(currentContainerRef);
         }
      };
   }, [dispatch, loading]); // loading durumu eklendi

   const handleCategoryClick = (category) => {
      dispatch(setSelectedCategory(category));
   };

   const filteredPokemonData = pokemonData.filter(
      (pokemon) =>
         selectedCategory === null ||
         pokemon.types[0].type.name === selectedCategory
   );

   return (
      <div className="section">
         <h2 className="section-title">Pokemons:</h2>
         <Categories setSelectedCategory={handleCategoryClick} />
         <div
            className="poke-container"
            ref={containerRef}
         >
            {filteredPokemonData.map((pokemon) => (
               <PokeCard
                  key={pokemon.id}
                  pokemon={pokemon}
               />
            ))}
            {loading && <div>Loading... {console.log(loading)} </div>}
         </div>
      </div>
   );
}

export default Pokemons;
