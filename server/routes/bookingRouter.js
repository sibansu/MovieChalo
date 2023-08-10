const {
  BookTicket,
  GetBookings,
  GetUserBookings,
} = require("../controllers/book_ticket");

const router = require("express").Router();

router.post("/", BookTicket);
router.get("/", GetBookings);
router.get("/:user", GetUserBookings);

module.exports = router;
