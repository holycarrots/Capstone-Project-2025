const Razorpay = require("razorpay");
const crypto = require("crypto");
const { OrderModel } = require("../models/Order.models");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.checkout = async (req, res) => {
  try {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay keys are missing in .env");
      return res.status(500).json({ success: false, error: "Razorpay keys not set" });
    }

    const { name, amount } = req.body;

    if (!name || !amount) {
      return res.status(400).json({ success: false, error: "Name and amount are required" });
    }

    const paymentAmount = Number(amount);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      return res.status(400).json({ success: false, error: "Invalid amount" });
    }

    const order = await razorpay.orders.create({
      amount: paymentAmount * 100,
      currency: "INR",
      payment_capture: 1,
    });

    await OrderModel.create({
      order_id: order.id,
      name,
      amount: paymentAmount,
    });

    res.json({ success: true, order });

  } catch (error) {
    console.error("Checkout Error:", error);
    res.status(500).json({ success: false, error: error.message || "Payment creation failed" });
  }
};

exports.paymentVerification = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return res.status(400).json({ success: false, error: "Missing payment information" });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.warn("Payment verification failed for order:", razorpay_order_id);
      return res.status(400).json({ success: false, error: "Invalid signature" });
    }

    await OrderModel.findOneAndUpdate(
      { order_id: razorpay_order_id },
      {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        status: "PAID",
      }
    );

    res.json({ success: true, message: "Payment verified successfully" });

  } catch (error) {
    console.error("Verification Error:", error);
    res.status(500).json({ success: false, error: error.message || "Payment verification failed" });
  }
};
