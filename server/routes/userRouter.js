const { RegisterUser, Authenticate } = require("../controllers/auth");

const router = require("express").Router();

router.post("/register", RegisterUser);
router.post("/login", Authenticate);

module.exports = router;
