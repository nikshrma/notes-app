"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MainButton } from "../components/MainButton"

export function SignIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSignIn = async () => {
    // TODO: Add API call to your backend
    console.log("Sign in data:", formData)
    // navigate("/dashboard") // Uncomment after backend integration
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Sign in to Notesy!</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2E4DB] focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2E4DB] focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <MainButton label="Sign in" clickHandler={handleSignIn} />
        </div>

        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-[#B2E4DB] hover:text-[#87C4BE] font-medium transition-colors"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}
