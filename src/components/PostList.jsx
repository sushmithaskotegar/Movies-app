import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPosts } from "../slices/MovieSlice";
import './PostList.css';
import { Link } from "react-router-dom";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
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
                <Link to={`/movies/${post._id}`}>
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

export default PostList;
