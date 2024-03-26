import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUpcomingMovies } from "../slices/LatestMovieSlice";
import "./UpcomingMovies.css";
import { selectAllNearbyEvents } from "../slices/NearbyEventsSlice";

const NearbyEventsDetails = () => {
  const { id } = useParams(); // Get movie ID from URL parameters
  const posts = useSelector(selectAllNearbyEvents); // Get all posts from Redux state
  const post = posts.find((post) => post._id === id); // Filter the post with the matching ID
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state, you can replace it with actual fetch data code
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Assuming it takes 1 second to fetch data
  }, []);

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (!post) {
    return <div className="not-found-container">Movie not found</div>;
  }

  // Function to convert rating into stars
  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        stars.push(<span key={i} className="star-filled">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9733;</span>);
      }
    }
    return stars;
  };

  return (
    <div className="upcoming-movie-details-container">
      <div className="image-container">
        <img src={post.imageUrl} alt={post.name} />
      </div>
      <div className="details-container">
        <h2>{post.name}</h2>
        <p><strong>Language:</strong> {post.language}</p>
        <p><strong>Genre:</strong> {post.type}</p>
        <p><strong>Rating:</strong> {renderStars(post.rate)}</p>
        <Link to="/bookingPage" className="button-link">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default NearbyEventsDetails;
