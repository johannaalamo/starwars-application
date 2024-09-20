import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({ page, search }: { page: number; search?: string }) => {
    let response;
    if (search) {
      response = await axios.get(`https://swapi.dev/api/people/?search=${search}`);
    } else {
      response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    }
    
    return {
      results: response?.data?.results,
      next: response?.data?.next,
      previous: response?.data?.previous,
    };
  }
);

interface CharacterState {
  list: { name: string; url: string }[];
  loading: boolean;
  error: string | null;
  nextPage: string | null;
  previousPage: string | null;
}

const initialState: CharacterState = {
  list: [],
  loading: false,
  error: null,
  nextPage: null,
  previousPage: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.list = action.payload.results;
        state.nextPage = action.payload.next;
        state.previousPage = action.payload.previous;
        state.loading = false;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch characters';
        state.loading = false;
      });
  },
});

export default charactersSlice.reducer;