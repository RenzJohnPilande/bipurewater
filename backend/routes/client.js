const express = require("express");
const Client = require("../models/Client");

const router = express.Router();

router.post("/submit", async (req, res) => {
  const {
    firstName,
    lastName,
    jobTitle,
    mobileNumber,
    telephoneNumber,
    email,
    company,
    companyAddress,
    companyNumber,
    companyEmail,
    requirement,
  } = req.body;

  try {
    const newClient = new Client({
      firstName,
      lastName,
      jobTitle,
      mobileNumber,
      telephoneNumber,
      email,
      company,
      companyAddress,
      companyNumber,
      companyEmail,
      requirement,
    });

    await newClient.save();

    res.status(201).json({ message: "Success! Your information has been saved." });
  } catch (error) {
    console.error("Error saving client data:", error);
    res.status(500).json({
      message: "Oops! Something went wrong with your submission. Please try again.",
      error: error.message,
    });
  }
});

module.exports = router;
