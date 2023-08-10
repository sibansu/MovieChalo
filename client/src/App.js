import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Movie from "./components/movie";
import Login from "./components/login";
import Register from "./components/register";
import SeatChart from "./components/seat_chart";
import "bootstrap/dist/css/bootstrap.min.css";
import Payment from "./components/payment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movie_id" element={<Movie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="booking/:movie_id/:date/:show" element={<SeatChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
