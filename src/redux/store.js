import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './Slices/darkModeSlice';
import pokeControlSlice from './Slices/pokeControlSlice';
import pokeFetchSlice from './Slices/pokeFetchSlice';
import pokemonDetailSlice from './Slices/pokemonDetailSlice';

const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
      pokes: pokeFetchSlice,
      pokemonDetail: pokemonDetailSlice,
      mypokes: pokeControlSlice,
   },
});

export default store;
