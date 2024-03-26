import React from "react";
import PostList from "./PostList";
import CarouselPage from "./Carousel";
import "../App.css";
import { Link } from "react-router-dom";
import CardPage from "./CardComponents";
import './AllEvents.css'

const AllEvents = () => {
  return (
    <div>
      <div className="all-items">
        <div className="link-container">
          <Link to="/movieList" className="link">
            <div className="link-box">
              <h3>All Events</h3>
            </div>
          </Link>
        </div>
        <div className="link-container">
          <Link to="/latestMovies" className="link">
            <div className="link-box">
              <h3>Latest Movies</h3>
            </div>
          </Link>
        </div>
        <div className="link-container">
          <Link to="/nearbyEvents" className="link">
            <div className="link-box">
              <h3>Nearby Events</h3>
            </div>
          </Link>
        </div>
      </div>
      <CarouselPage />
      <CardPage/>
    </div>
  );
};

export default AllEvents;
