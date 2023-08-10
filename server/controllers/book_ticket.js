const Booking = require("../models/Bookings");

const BookTicket = async (req, res) => {
  const { movie_id, user, selectedSeats, date, show } = req.body;
  try {
    await selectedSeats.map((seatNumber) => {
      const newBooking = new Booking({
        movieId: movie_id,
        user,
        seatNumber,
        date,
        show,
      });
      newBooking.save();
    });
    return res.status(201).json({ message: "Ticket booked successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Booking failed" });
  }
};

const GetBookings = async (req, res) => {
  const { movie_id, date, show } = req.query;
  try {
    const bookings = await Booking.find({
      movieId: movie_id,
      date: date,
      show: show,
    });
    if (bookings.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const bookedSeats = bookings.map((booking) => booking.seatNumber);
    return res.status(200).json({ bookedSeats });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

const GetUserBookings = async (req, res) => {
  const user = req.params.user;
  try {
    const bookings = await Booking.find({
      user: user,
    });
    if (bookings.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

module.exports = { BookTicket, GetBookings, GetUserBookings };
