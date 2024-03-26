// features/postSlice.js
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNearbyEvents = createAsyncThunk('posts/fetchNearbyEvents', async () => {
  const response = await axios.get('http://3.17.216.66:4000/events');
  console.log('response', response)
  return response.data;
});

const nearbyEventsSlice = createSlice({
  name: 'nearbyEvents',
  initialState: {
    nearbyEvents: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearbyEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNearbyEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.nearbyEvents = action.payload; // Updated to assign payload to nearbyEvents
        state.error = null;
      })
      .addCase(fetchNearbyEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllNearbyEvents = (state) => state.nearbyEvents.nearbyEvents;

export default nearbyEventsSlice.reducer;

export const selectPostById = createSelector(
  // First argument: array of posts
  state => state.nearbyEvents.nearbyEvents, // Updated to access nearbyEvents
  // Second argument: ID of the post to find
  (_, postId) => postId,
  // Function to return the post object with matching ID
  (posts, postId) => posts.find(post => post.id === postId)
);
