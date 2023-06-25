import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
   name: 'category',
   initialState: null,
   reducers: {
      setSelectedCategory: (state, action) => {
         return action.payload;
      },
   },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
