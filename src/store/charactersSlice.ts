import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {  fetchPeople, fetchResource } from '../services/api';
import { AdditionalInfo, Character } from '../interfaces/types';

interface CharacterState {
  list: Character[];
  filteredList: Character[];
  loading: boolean;
  error: string | null;
  nextPage: string | null;
  previousPage: string | null;
  currentPage: number;
  searchTerm: string;
  additionalInfo: AdditionalInfo;
}

const initialState: CharacterState = {
  list: [],
  filteredList: [],
  loading: false,
  error: null,
  nextPage: null,
  previousPage: null,
  currentPage: 1,
  searchTerm: '',
  additionalInfo: {
    films: {},
    vehicles: {},
    starships: {},
    homeworld: ""
  },
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({ page, search }: { page: number; search?: string }) => {
    const data = await fetchPeople({ page, search });
    return {
      results: data?.results,
      next: data?.next,
      previous: data?.previous,
    };
  }
);

export const fetchAdditionalInfo = createAsyncThunk(
  'characters/fetchAdditionalInfo',
  async (urls: string[]) => {
    const requests = urls?.map(url => fetchResource(url));
    const responses = await Promise.all(requests);
    return responses?.map(response => response);
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action?.payload;
      state.filteredList = state?.list?.filter(character =>
        character?.name?.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action?.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = '';
      state.filteredList = state?.list;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters?.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters?.fulfilled, (state, action) => {
        state.list = action?.payload?.results;
        state.filteredList = action?.payload?.results;
        state.nextPage = action?.payload?.next;
        state.previousPage = action?.payload?.previous;
        state.loading = false;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.error = action?.error?.message || 'Failed to fetch characters';
        state.loading = false;
      })
      .addCase(fetchAdditionalInfo.fulfilled, (state, action) => {
        action.payload.forEach((item: any) => {
          if (item.url.includes('/films/')) {
            state.additionalInfo.films[item.url] = item?.title;
          } else if (item.url.includes('/vehicles/')) {
            state.additionalInfo.vehicles[item.url] = item?.name;
          } else if (item.url.includes('/starships/')) {
            state.additionalInfo.starships[item.url] = item?.name;
          } else if (item.url.includes('/planets/')) {
            state.additionalInfo.homeworld = item.name; 
          }
        });
      });
  },
});

export const { setSearchTerm, setPage, clearSearch } = charactersSlice.actions;

export default charactersSlice.reducer;
