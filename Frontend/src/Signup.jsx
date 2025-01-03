// Import React and necessary hooks
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
  birthdate: "",

  });

  // Initialize the navigate function from useNavigate
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => {
        console.log("Registered Successfully!");
        // Navigate to the success page after successful registration
        navigate("/success");
      })
      .catch((err) => console.error("Error during registration:", err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Register
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={values.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your Department"
            required
          />
        </div>
        <div className="mb-4">
  <label htmlFor="birthdate" className="block text-gray-600 mb-2">
    Birth Date:
  </label>
  <input
    type="date"
    id="birthdate"
    name="birthdate" // Corrected here
    value={values.birthdate}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
   
    required
  />
</div>

        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
