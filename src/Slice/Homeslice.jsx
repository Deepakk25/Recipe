import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [], // Corrected the syntax
};

const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    search(state, action) {
      // Filter users based on the action payload
      state.user = state.user.filter((id) => id === action.payload);
    },
  },
});

// Export the action and reducer
export const { search } = HomeSlice.actions;
export default HomeSlice.reducer;
