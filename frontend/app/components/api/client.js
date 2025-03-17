// pages/api/client.js
import Client from "../../models/Client"; // Assuming you're using Mongoose for MongoDB
import dbConnect from "../../utils/dbConnect"; // Your MongoDB connection logic

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect(); // Ensure the database is connected
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
      res.status(201).json({ message: "Client information saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error saving client data", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
