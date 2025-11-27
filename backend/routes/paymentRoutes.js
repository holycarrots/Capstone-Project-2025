const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/checkout", paymentController.checkout);
router.post("/verify", paymentController.paymentVerification);

module.exports = router;
