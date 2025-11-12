const express = require("express");
const router = express.Router();

const {createPrivateJob,getAllPrivateJob,deletePrivateJob} = require("../controllers/privateJob");

router.post("/pvtjob",createPrivateJob);
router.get("/pvtjob",getAllPrivateJob);
router.delete("/pvtjob/:id",deletePrivateJob);

module.exports = router;