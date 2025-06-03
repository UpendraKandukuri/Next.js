"use client"

import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  age: z.string()
    .regex(/^\d+$/, "Age must be a number")
    .transform(Number)
    .refine(n => n >= 18, "Age must be at least 18"),
});

export default function MyForm() {
  const [formData, setFormData] = useState({ username: "", email: "", age: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const validatedData = schema.parse(formData);
      setErrors({});
      console.log("Valid data:", validatedData);
      
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach(error => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">
          Username
        </label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
            errors.username ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
          }`}
          placeholder="Enter your username"
        />
        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
            errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
          }`}
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="age" className="block text-gray-700 font-semibold mb-1">
          Age
        </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
            errors.age ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
          }`}
          placeholder="Enter your age"
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
