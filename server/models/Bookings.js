const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movieId: String,
  user: String,
  seatNumber: String,
  date: String,
  show: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
