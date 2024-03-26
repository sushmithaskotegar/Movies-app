import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNearbyEvents, selectAllNearbyEvents } from "../slices/NearbyEventsSlice"; // Import fetchNearbyEvents and selectAllNearbyEvents

// import './NearbyEvents.css'; // Import CSS file

const NearbyEvents = () => {
  const dispatch = useDispatch();
  const nearbyEvents = useSelector(selectAllNearbyEvents);
  const loading = useSelector((state) => state.nearbyEvents.loading);
  const error = useSelector((state) => state.nearbyEvents.error);

  useEffect(() => {
    dispatch(fetchNearbyEvents()); // Dispatch fetchNearbyEvents instead of fetchUpcomingMovies
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="nearby-events-container"> {/* Assuming you have a CSS class named "nearby-events-container" */}
      <h2>Nearby Events</h2>
      <div className="events-list"> {/* Assuming you have a CSS class named "events-list" */}
        {nearbyEvents.map((event) => (
          <div className="event-item" key={event.id}> {/* Assuming you have a CSS class named "event-item" */}
            <Link to={`/nearbyEvents/${event._id}`}>
              <img src={event.imageUrl} alt={event.name} />
              <p>{event.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyEvents;
