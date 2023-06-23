import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchPokeData = createAsyncThunk(
   'pokes/fetchPokeData',
   async () => {
      try {
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

         const promises = pokemonIds.map(async (id) => {
            const response = await axios.get(
               `https://pokeapi.co/api/v2/pokemon/${id}/`
            );
            const pokemonData = response.data;
            pokemonData.id = id; // ID değerini Pokémon verisine ekliyoruz

            const speciesResponse = await axios.get(
               `https://pokeapi.co/api/v2/pokemon-species/${id}/`
            );
            const flavorTextEntries = speciesResponse.data.flavor_text_entries;
            const englishEntry = flavorTextEntries.find(
               (entry) => entry.language.name === 'en'
            );
            pokemonData.flavor_text = englishEntry.flavor_text;

            return pokemonData;
         });

         const results = await Promise.all(promises);
         return results;
      } catch (error) {
         throw Error('Failed to fetch Pokémon data');
      }
   }
);

const pokeFetchSlice = createSlice({
   name: 'pokes',
   initialState: {
      pokemonData: [],
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchPokeData.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchPokeData.fulfilled, (state, action) => {
            state.loading = false;
            state.pokemonData = action.payload;
         })
         .addCase(fetchPokeData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export default pokeFetchSlice.reducer;
