
const mongoose = require("mongoose")
const User = require("../models/User")
const { uploadImageToCloudinary } = require("../utils/imageUploader")



exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id
    const userDetails = await User.findById(id)
    console.log(userDetails)
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      data: userDetails,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


exports.updateProfile = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobileNumber,
      udid,
      dateOfBirth,
      gender,
      disabilityType,
      assistiveDevice,
      skills,
      education,
      institute,
    } = req.body

    const id = req.params.id;


    // const userDetails = await User.findById(id)


    const user = await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
      mobileNumber,
      udid,
      dateOfBirth,
      gender,
      disabilityType,
      assistiveDevice,
      skills,
      education,
      institute,
    }, {
      new: true, // Return the updated user document
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the updated user details
    // const updatedUserDetails = await User.findById(id)


    return res.json({
      success: true,
      message: "Profile updated successfully",

    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}


exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture
    const id = req.params.id;
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      60,
    )
    console.log(image)
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: id },
      { image: image.secure_url },
      { new: true }
    )
    res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}