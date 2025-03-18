// components/ClientForm.js
import { useState } from "react";
import axios from "axios";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    mobileNumber: "",
    telephoneNumber: "",
    email: "",
    company: "",
    companyAddress: "",
    companyNumber: "",
    companyEmail: "",
    requirement: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/client/submit", formData);
      setMessage(response.data.message);
      setMessageType("success");
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        mobileNumber: "",
        telephoneNumber: "",
        email: "",
        company: "",
        companyAddress: "",
        companyNumber: "",
        companyEmail: "",
        requirement: "",
      });
    } catch (error) {
      setMessage(error.response ? error.response.data.message : "Error");
      setMessageType("error");
    }
  };

  return (
    <div className="flex flex-wrap justify-center w-full max-w-[700px] h-fit border p-4 rounded border-zinc-300 shadow-lg">
      {message && (
        <p
          className={`text-xs w-full text-center ${
            messageType === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="p-4 w-full flex flex-wrap gap-4 text-zinc-800">
          <div className="grid grid-cols-2 w-full gap-2 items-start">
            <div className="flex flex-wrap">
              <p className="text-sm font-semibold">Full Name</p>
              <div className="grid grid-cols-2 w-full gap-2">
                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    className="w-full border px-2 py-1 rounded border-zinc-300"
                    onChange={handleChange}
                    required
                  />
                  <label className="text-xs">First Name</label>
                </div>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    className="w-full border px-2 py-1 rounded border-zinc-300"
                    onChange={handleChange}
                    required
                  />
                  <label className="text-xs">Last Name</label>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <p className="text-sm font-semibold">Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                className="w-full border px-2 py-1 rounded border-zinc-300"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 w-full gap-2 items-start">
            <div className="flex flex-wrap gap-1">
              <p className="text-sm font-semibold">Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="w-full border px-2 py-1 rounded border-zinc-300"
                onChange={handleChange}
                required
              />
              <label className="text-[10px]">ex. email@example.com</label>
            </div>
            <div className="flex flex-wrap gap-1">
              <p className="text-sm font-semibold">Contact Number</p>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                className="w-full border px-2 py-1 rounded border-zinc-300"
                onChange={handleChange}
                required
              />
              <label className="text-[10px]">ex. 09123456789</label>
            </div>
            <div className="flex flex-wrap gap-1">
              <p className="text-sm font-semibold">Telephone Number</p>
              <input
                type="text"
                name="telephoneNumber"
                value={formData.telephoneNumber}
                className="w-full border px-2 py-1 rounded border-zinc-300"
                onChange={handleChange}
              />
              <label className="text-[10px]">ex. (02) 1234 5678</label>
            </div>
          </div>
          <div className="flex flex-wrap w-full py-4 gap-4">
            <p className="text-sm font-semibold">Company Details</p>
            <div className="flex flex-wrap w-full gap-1">
              <input
                type="text"
                name="company"
                value={formData.company}
                className="w-full border px-2 py-1 rounded border-zinc-300"
                onChange={handleChange}
                required
              />
              <label className="text-xs">Company Name</label>
            </div>
            <div className="flex flex-wrap w-full gap-1">
              <textarea
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                className="w-full border px-2 py-1 rounded border-zinc-300 h-[120px]"
                onChange={handleChange}
              />
              <label className="text-xs">Company Address</label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-wrap w-full gap-1">
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail || ""}
                  className="w-full border px-2 py-1 rounded border-zinc-300"
                  onChange={handleChange}
                />
                <label className="text-xs">Company Email</label>
              </div>
              <div className="flex flex-wrap w-full gap-1">
                <input
                  type="text"
                  name="companyNumber"
                  value={formData.companyNumber}
                  className="w-full border px-2 py-1 rounded border-zinc-300"
                  onChange={handleChange}
                />
                <label className="text-xs">Phone Number</label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap w-full gap-2">
            <p className="text-sm font-semibold">Requirement/Other Concerns</p>
            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded border-zinc-300 h-[120px]"
            />
          </div>
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="px-4 py-1 border bg-zinc-800 rounded-lg text-white cursor-pointer text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
