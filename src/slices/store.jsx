// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../slices/MovieSlice'
import latestMovieReducer from '../slices/LatestMovieSlice';
import nearbyEventsReducer from '../slices/NearbyEventsSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    latestMovies:latestMovieReducer,
    nearbyEvents:nearbyEventsReducer
  },
});
