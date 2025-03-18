const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  telephoneNumber: { type: String },
  email: { type: String, required: true },
  company: { type: String, required: true },
  companyAddress: { type: String },
  companyNumber: { type: String },
  companyEmail: { type: String },
  requirement: { type: String },
});

module.exports = mongoose.model("Client", clientSchema);
