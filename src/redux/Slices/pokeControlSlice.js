import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   pokeList: [],
};

const pokeControlSlice = createSlice({
   name: 'mypokes',
   initialState: initialState,
   reducers: {
      addPokeToPokeList(state, action) {
         state.pokeList.push(action.payload);
      },
      removeFromPokeList(state, action) {
         state.pokeList = state.pokeList.filter(
            (pokemon) => pokemon.id !== action.payload.id
         );
      },
   },
});

export const selectAllPokes = (state) => state.mypokes.pokeList;

export const { addPokeToPokeList, removeFromPokeList } =
   pokeControlSlice.actions;

export default pokeControlSlice.reducer;
