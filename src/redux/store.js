import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './Slices/darkModeSlice';

const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
   },
});

export default store;
