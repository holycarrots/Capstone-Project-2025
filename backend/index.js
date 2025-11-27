const express = require('express');
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const PvtJobRoutes = require("./routes/privateJob");
const testRoutes = require("./routes/test");
const paymentRoutes = require("./routes/payment");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// DB + Cloudinary
database.connect();
cloudinaryConnect();

// Middleware
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

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1", PvtJobRoutes);
app.use("/api/v1/test", testRoutes);

app.use("/payment", paymentRoutes);

// Root
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "✅ Server is up and running..."
  });
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
