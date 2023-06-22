import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './Slices/darkModeSlice';
import pokeCardSlice from './Slices/pokeCardSlice';
import pokemonDetailSlice from './Slices/pokemonDetailSlice';

const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
      pokeCard: pokeCardSlice,
      pokemonDetail: pokemonDetailSlice,
   },
});

export default store;
