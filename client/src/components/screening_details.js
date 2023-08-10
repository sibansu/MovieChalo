import React, { useState } from "react";

const ScreeningDetails = (props) => {
  const user = localStorage["username"];
  const shows = ["8AM", "10AM", "2PM", "5PM", "10PM"];
  const date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const dates = [];
  for (var i = 0; i < 5; i++) {
    if (day > maxDays[month]) {
      day = 1;
      month++;
    }
    dates.push(day++ + "" + months[month]);
  }
  day = date.getDate();
  month = date.getMonth();
  const [selectedDate, setSelectedDate] = useState(day + "" + months[month]);

  const VerifyAuth = (show) => {
    if (!user) {
      alert("Sorry! You need to login first");
      window.location.href = "/login";
    } else
      window.location.href =
        "/booking/" + props.movie.id + "/" + selectedDate + "/" + show;
  };
  return (
    <div className="mt-5 pt-5">
      <h1>Showtimes for {selectedDate}</h1>
      <div>
        {dates.map((showDates, index) => {
          return (
            <button
              onClick={() => setSelectedDate(showDates)}
              className="btn btn-outline-light m-4"
              key={index}
            >
              {showDates}
            </button>
          );
        })}
      </div>

      {shows.map((show, index) => {
        return (
          <button
            onClick={() => VerifyAuth(show)}
            className="btn btn-outline-light m-4"
            key={index}
          >
            {show}
          </button>
        );
      })}
    </div>
  );
};

export default ScreeningDetails;
