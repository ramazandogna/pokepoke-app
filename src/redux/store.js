import {
   combineReducers,
   configureStore,
   getDefaultMiddleware,
} from '@reduxjs/toolkit';

import categorySlice from './Slices/categorySlice'; // categorySlice'ı import etmeyi unutmayın
import pokeControlSlice from './Slices/pokeControlSlice';
import pokeFetchSlice from './Slices/pokeFetchSlice';
import pokemonDetailSlice from './Slices/pokemonDetailSlice';

const middleware = getDefaultMiddleware({
   serializableCheck: false, // Bu hatayı önlemek için devre dışı bırakma
   immutableCheck: false, // Gerektiğinde immutable kontrollerini devre dışı bırakma
});

const rootReducer = combineReducers({
   pokes: pokeFetchSlice,
   pokemonDetail: pokemonDetailSlice,
   category: categorySlice,
   mypokes: pokeControlSlice,
});

const store = configureStore({
   reducer: rootReducer,
   middleware,
});

export default store;
