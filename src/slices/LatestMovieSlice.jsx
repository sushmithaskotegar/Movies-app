// features/postSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUpcomingMovies = createAsyncThunk('posts/fetchUpcomingMovies', async () => {
  const response = await axios.get('http://3.17.216.66:4000/upcomingMovies');
  return response.data;
});

const latestMovieSlice = createSlice({
  name: 'latestMovies',
  initialState: {
    latestMovies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.latestMovies = action.payload;
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const selectAllUpcomingMovies = (state) => state.latestMovies.latestMovies;
export default latestMovieSlice.reducer; // Export the reducer function
