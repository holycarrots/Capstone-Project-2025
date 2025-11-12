const express = require('express');
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const crypto = require("crypto");
const Razorpay = require("razorpay");

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const { OrderModel } = require("./models/Order.models");

const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const PvtJobRoutes = require("./routes/privateJob");
const testRoutes = require("./routes/test");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
database.connect();
cloudinaryConnect();

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp",
}));
app.use(morgan("dev"));

// ✅ Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1", PvtJobRoutes);
app.use("/api/v1/test", testRoutes);

// ✅ Root
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "✅ Server is up and running..."
  });
});

// ✅ Razorpay setup (use .env values)
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Checkout API
app.post("/payment/checkout", async (req, res) => {
  try {
    const { name, amount } = req.body;

    const order = await razorpay.orders.create({
      amount: Number(amount * 100),
      currency: "INR"
    });

    await OrderModel.create({
      order_id: order.id,
      name,
      amount
    });

    res.json({ order });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ error: "Payment initialization failed" });
  }
});

// ✅ Payment Verification
app.post("/payment/payment-verification", async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const body_data = razorpay_order_id + " " + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body_data)
      .digest("hex");

    const isValid = expectedSignature === razorpay_signature;

    if (isValid) {
      await OrderModel.findOneAndUpdate(
        { order_id: razorpay_order_id },
        { razorpay_payment_id, razorpay_order_id, razorpay_signature }
      );

      res.redirect(`http://localhost:3000/success?payment_id=${razorpay_payment_id}`);
    } else {
      res.redirect(`http://localhost:3000/failure`);
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ error: "Verification failed" });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
