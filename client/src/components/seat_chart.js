import React, { useEffect, useState } from "react";
import "./seat_chart.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Payment from "./payment";

const user = localStorage["username"];
const SeatChar = () => {
  const { movie_id, date, show } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [isPaymentMode, setIsPaymentMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://movie-ticket-booking-app-0vii.onrender.com/movies")
      .then((res) => {
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://movie-ticket-booking-app-0vii.onrender.com/booking", {
        params: { movie_id, date, show },
      })
      .then((res) => {
        setBookedSeats(res.data.bookedSeats);
      })
      .catch((err) => console.log(err));
  }, [date, movie_id, show]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const selectSeat = (seat_no) => {
    if (bookedSeats.includes(seat_no)) {
      console.log("Seat already booked");
      return;
    }
    if (selectedSeats.includes(seat_no)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seat_no));
    } else {
      setSelectedSeats([...selectedSeats, seat_no]);
    }
  };

  const seats = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40"],
    ["41", "42", "43", "44", "45", "46", "47", "48", "49", "50"],
  ];

  const calculateTotalCost = () => {
    let totalCost = 0;
    selectedSeats.forEach((seat_no) => {
      const seatNumber = parseInt(seat_no);
      if (seatNumber >= 1 && seatNumber <= 10) {
        totalCost += 250;
      } else if (seatNumber >= 11 && seatNumber <= 30) {
        totalCost += 200;
      } else if (seatNumber >= 31 && seatNumber <= 50) {
        totalCost += 150;
      }
    });
    return totalCost;
  };

  const totalCost = calculateTotalCost();

  const handlePayClick = () => {
    setIsPaymentMode(true);
  };

  const handlePaymentCancel = () => {
    setIsPaymentMode(false);
  };

  const handlePaymentSuccess = () => {
    alert("Tickets booked successfully");
    BookTicket();
  };

  const BookTicket = async () => {
    await axios
      .post("https://movie-ticket-booking-app-0vii.onrender.com/booking", {
        movie_id,
        date,
        show,
        user,
        selectedSeats,
      })
      .then((res) => {
        console.log("Ticket booked");
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1>Pick your seats</h1>
      <h3>
        {movies[movie_id - 1].name} • {date} • {show}
      </h3>
      <div className="d-flex justify-content-between">
        <div className="seats-container">
          <table className="grid">
            <tbody>
              {seats.map((numList, i) => (
                <tr key={i}>
                  {numList.map((seat_no) => (
                    <td
                      onClick={() => selectSeat(seat_no)}
                      className={
                        bookedSeats.includes(seat_no)
                          ? "unavailable"
                          : selectedSeats.includes(seat_no)
                          ? "reserved"
                          : ""
                      }
                      key={seat_no}
                    >
                      {seat_no}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={"/"} className="btn btn-danger mt-5">
            Cancel
          </Link>
        </div>
        {isPaymentMode ? (
          <div className="amount-container text-center">
            <Payment />
            <button
              className="btn btn-outline-danger m-3"
              onClick={handlePaymentCancel}
            >
              Cancel Payment
            </button>
            <button
              className="btn btn-outline-success m-3"
              onClick={handlePaymentSuccess}
            >
              Pay ₹{totalCost}
            </button>
          </div>
        ) : (
          totalCost > 0 && (
            <div className="amount-container">
              <p>Ticket Price: {totalCost}</p>
              <button className="btn btn-success" onClick={handlePayClick}>
                Pay
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SeatChar;
