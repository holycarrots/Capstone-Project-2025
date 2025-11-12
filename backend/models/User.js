// Import the Mongoose library
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      trim: true,
      required: true,
    },
    udid: {
      type: String,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      default: null
    },
    gender: {
      type: String,
      default: null
    },
    disabilityType: {
      type: String,
      default: null
    },
    assistiveDevice: {
      type: String,
      default: null
    },
    skills: {
      type: [String],
      default: null
    },
    education: {
      type: String,
      default: null
    },
    institute: {
      type: String,
      default: null
    },
    token: {
      type: String,
      default: null,
    },


  },
  { timestamps: true }
);


module.exports = mongoose.model("user", userSchema);