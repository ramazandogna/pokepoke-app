import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

// Pokemon Detayı için veri çekme asenkron eylemi
export const fetchPokemonDetail = createAsyncThunk(
   'pokemonDetail/fetchPokemonDetail',
   async (id) => {
      try {
         const pokemonResponse = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}/`
         );
         const pokemonData = pokemonResponse.data;
         pokemonData.id = id;

         const speciesResponse = await axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${id}/`
         );
         const flavorTextEntries = speciesResponse.data.flavor_text_entries;
         const englishEntry = flavorTextEntries.find(
            (entry) => entry.language.name === 'en'
         );
         pokemonData.flavor_text = englishEntry.flavor_text;

         return pokemonData;
      } catch (error) {
         throw Error('Failed to fetch Pokémon detail');
      }
   }
);

// Benzer Pokemonları çekme asenkron eylemi
export const fetchSimilarPokemons = createAsyncThunk(
   'pokemonDetail/fetchSimilarPokemons',
   async (id, { getState }) => {
      try {
         const state = getState();
         const pokemonData = state.pokemonDetail.pokemon;
         const type = pokemonData.types[0].type.name;

         const similarPokemonsResponse = await axios.get(
            `https://pokeapi.co/api/v2/type/${type}`
         );

         const similarPokemonsData = similarPokemonsResponse.data.pokemon.slice(
            0,
            4
         );

         const similarPromises = similarPokemonsData.map(async (poke) => {
            const response = await axios.get(poke.pokemon.url);
            const pokemonData = response.data;
            return pokemonData;
         });

         const similarResults = await Promise.all(similarPromises);
         return similarResults;
      } catch (error) {
         throw Error('Failed to fetch similar Pokémons');
      }
   }
);

const pokemonDetailSlice = createSlice({
   name: 'pokemonDetail',
   initialState: {
      pokemon: null,
      similarPokemons: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchPokemonDetail.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemon = action.payload;
         })
         .addCase(fetchPokemonDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
         .addCase(fetchSimilarPokemons.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchSimilarPokemons.fulfilled, (state, action) => {
            state.loading = false;
            state.similarPokemons = action.payload;
         })
         .addCase(fetchSimilarPokemons.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export default pokemonDetailSlice.reducer;
