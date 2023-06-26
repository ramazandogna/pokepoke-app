import {
   combineReducers,
   configureStore,
   getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import categorySlice from './Slices/categorySlice';
import itemControlSlice from './Slices/itemControlSlice';
import pokeControlSlice from './Slices/pokeControlSlice';
import pokeFetchSlice from './Slices/pokeFetchSlice';
import pokemonDetailSlice from './Slices/pokemonDetailSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['pokes'], // pokeFetchSlice'i depolama işleminden hariç tutar
};

const rootReducer = combineReducers({
   pokes: pokeFetchSlice,
   pokemonDetail: pokemonDetailSlice,
   category: categorySlice,
   mypokes: pokeControlSlice,
   item: itemControlSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: false, // SerializableStateInvariantMiddleware'i devre dışı bırakır
   }),
});

const persistor = persistStore(store);

export { store, persistor };
