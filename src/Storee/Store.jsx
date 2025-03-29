import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from '../Slice/Homeslice'; // Correct import path

const store = configureStore({
  reducer: {
    Home: HomeReducer, // Add Home slice reducer
  },
});

export default store;
