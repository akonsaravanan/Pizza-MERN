const express = require("express");
const { createCart } = require("../controllers/Carts");
const { authenticateUser } = require("../middlewares/userAuthentication");
const router = express.Router();

router.post("/create", authenticateUser, createCart);

module.exports = router;
