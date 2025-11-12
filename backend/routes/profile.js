const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")
const { getAllUserDetails, updateDisplayPicture, updateProfile } = require("../controllers/profile")

router.put("/updateprofile/:id", updateProfile)
router.post("/getuserdetails", auth, getAllUserDetails)
router.put("/updatedp/:id", updateDisplayPicture)

module.exports = router