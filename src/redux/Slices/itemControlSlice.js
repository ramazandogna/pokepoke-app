import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   itemList: [],
};

const itemControlSlice = createSlice({
   name: 'items',
   initialState: initialState,
   reducers: {
      addItemToCart(state, action) {
         state.itemList.push(action.payload);
      },
      removeFromCart(state, action) {
         state.itemList = state.itemList.filter(
            (item) => item.id !== action.payload.id
         );
      },
   },
});

export const selectAllItems = (state) => state.item.itemList;

export const { addItemToCart, removeFromCart } = itemControlSlice.actions;

export default itemControlSlice.reducer;
