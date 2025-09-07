import React, { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    FName: "",
    LName: "",
    Phone_Number: "",
    Email: "",
    Message: "",
  });

  const [status, setStatus] = useState(""); // success/error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Generate current timestamp in ISO format
    const timestamp = new Date().toISOString();

    try {
      const response = await axios.post(
        "https://sheetdb.io/api/v1/5o0j00nzmkpfa", // replace with your API URL
        { ...formData, TimeStamp: timestamp }
      );

      if (response.data?.created === 1) {
        setStatus("✅ Your message has been sent successfully!");
        setFormData({
          FName: "",
          LName: "",
          Phone_Number: "",
          Email: "",
          Message: "",
        });
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 p-6 mt-10 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <p className="mb-2">
        📧 Email:{" "}
        <a
          href="mailto:info@rjrinfinity.com"
          className="text-blue-500 underline"
        >
          info@rjrinfinity.com
        </a>
      </p>
      <p className="mb-2">
        ☎ Phone:{" "}
        <a href="tel:+919830410335" className="text-blue-500 underline">
          +91-9830410335
        </a>
      </p>
      <p className="mb-2">
        🌐 Website:{" "}
        <a
          href="https://www.rjrinfinity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          www.rjrinfinity.com
        </a>
      </p>
      <p className="mb-2">
        📍 Address: R J R Infinity, Garia Station Road, Kolkata, India
      </p>

      <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            name="FName"
            placeholder="First Name"
            value={formData.FName}
            onChange={handleChange}
            required
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            name="LName"
            placeholder="Last Name"
            value={formData.LName}
            onChange={handleChange}
            required
            className="flex-1 p-2 border rounded"
          />
        </div>

        <input
          type="tel"
          name="Phone_Number"
          placeholder="Phone Number"
          value={formData.Phone_Number}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <textarea
          name="Message"
          placeholder="Your Message"
          value={formData.Message}
          onChange={handleChange}
          required
          rows={4}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}
