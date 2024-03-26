// features/postSlice.js
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('http://3.17.216.66:4000/latest');
  console.log('response', response)
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export default postSlice.reducer;
export const selectPostById = createSelector(
  // First argument: array of posts
  state => state.posts.posts,
  // Second argument: ID of the post to find
  (_, postId) => postId,
  // Function to return the post object with matching ID
  (posts, postId) => posts.find(post => post.id === postId)
);
