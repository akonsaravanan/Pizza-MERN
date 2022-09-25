const express = require("express");
const { createCart, getInCartItems } = require("../controllers/Carts");
const { authenticateUser } = require("../middlewares/userAuthentication");
const router = express.Router();

router.post("/create", authenticateUser, createCart);
router.get("/incart", authenticateUser, getInCartItems);

module.exports = router;
