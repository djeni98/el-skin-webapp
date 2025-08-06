import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: {
      payload: string;
      type: string;
    }) => {
      state.searchTerm = action.payload;
    }
  }
});

export default searchSlice.reducer;
export const { setSearchTerm } = searchSlice.actions;