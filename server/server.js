const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use("/user", require("./routes/userRouter"));
app.use("/movies", require("./routes/movieRouter"));
app.use("/booking", require("./routes/bookingRouter"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listenting at port ${port}`);
});
