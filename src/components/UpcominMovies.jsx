import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import './PostList.css';
import { Link } from "react-router-dom";
import { fetchUpcomingMovies, selectAllUpcomingMovies } from "../slices/LatestMovieSlice";

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllUpcomingMovies);
  console.log('posts for upcoming movies', posts )
  const loading = useSelector((state) => state.latestMovies.loading);

  const error = useSelector((state) => state.latestMovies.error);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="post-list-container">
      <div className="sections">
        <div className="post-list">
          <h2>Latest Movies</h2>
          <div className="movie-titles-row">
            {posts.map((post) => (
              <div className="movie-title" key={post.id}>
                <Link to={`/upcomingMovies/${post._id}`}>
                  <img src={post.imageUrl} alt={post.name} />
                  <p>{post.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
