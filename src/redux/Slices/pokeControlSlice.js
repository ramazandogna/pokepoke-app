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
   },
});

export const selectAllPokes = (state) => state.mypokes.pokeList;

export const { addPokeToPokeList } = pokeControlSlice.actions;

export default pokeControlSlice.reducer;
