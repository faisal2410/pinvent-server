const express = require("express");
const { contactUs } = require("../controllers/contact");
const router = express.Router();
const protect = require("../middlewares/auth");

router.post("/", protect, contactUs);

module.exports = router;