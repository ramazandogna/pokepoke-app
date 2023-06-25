import { combineReducers, configureStore } from '@reduxjs/toolkit';

import categorySlice from './Slices/categorySlice'; // categorySlice'ı import etmeyi unutmayın
import darkModeSlice from './Slices/darkModeSlice';
import pokeControlSlice from './Slices/pokeControlSlice';
import pokeFetchSlice from './Slices/pokeFetchSlice';
import pokemonDetailSlice from './Slices/pokemonDetailSlice';

const rootReducer = combineReducers({
   darkMode: darkModeSlice,
   pokes: pokeFetchSlice,
   pokemonDetail: pokemonDetailSlice,
   category: categorySlice,
   mypokes: pokeControlSlice,
});

const store = configureStore({
   reducer: rootReducer,
});

export default store;
