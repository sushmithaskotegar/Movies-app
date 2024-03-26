import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigationbar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllEvents from "./components/AllEvents";
import Carousel from "./components/Carousel";
import CardComponent from "./components/CardComponents";
import PostList from "./components/PostList";
import MovieDetails from "./components/MovieDetails";
import BookingPage from "./components/BookingPage";
import UpcomingMovies from "./components/UpcominMovies";
import UpcomingMovieDetails from "./components/UpcomingMovieDetails";
import NearbyEvents from "./components/NearbyEvents";
import NearbyEventsDetails from './components/NearbyEventsDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<AllEvents />}></Route>
          <Route path="/movieList" element={<PostList />}></Route>
          <Route path="/latestMovies" element={<UpcomingMovies />}></Route>
          <Route path="/carousel" element={<Carousel />}></Route>
          <Route path="/card" element={<CardComponent />}></Route>
          <Route path="/movies/:id" element={<MovieDetails />}></Route>
          <Route path="/upcomingMovies/:id" element={<UpcomingMovieDetails />}></Route>
          <Route path="/bookingPage" element={<BookingPage />}></Route>
          <Route path="/nearbyEvents" element={<NearbyEvents />}></Route>
          <Route path="/nearbyEvents/:id" element={<NearbyEventsDetails />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
