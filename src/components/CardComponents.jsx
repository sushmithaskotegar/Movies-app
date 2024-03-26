import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import config from "../config.json";

import "./CardPage.css";

import { useSelector, useDispatch } from "react-redux";

import "./PostList.css";
import { Link } from "react-router-dom";
import {
  fetchUpcomingMovies,
  selectAllUpcomingMovies,
} from "../slices/LatestMovieSlice";

function CardPage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllUpcomingMovies);
  console.log("posts for upcoming movies", posts);
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
    <div className="row" style={{ marginTop: "4%", marginLeft: "2%" }}>
      {posts.map((eachCard, index) => (
        <div className="col-md-3" style={{ marginBottom: "4%" }} key={index}>
          <Link to={`/upcomingMovies/${eachCard._id}`}>
            <Card style={{ width: "20rem", height: "65vh" }}>
              <img
                style={{ height: "60vh", padding: "20px" }}
                className="d-block w-100"
                src={eachCard.imageUrl}
                alt="First slide"
              />

              <Card.Body>
                <Card.Title>{eachCard.name}</Card.Title>
                <Button variant="primary" href={`${eachCard.link}`}>
                  Info
                </Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CardPage;
