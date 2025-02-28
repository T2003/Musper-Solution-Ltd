"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    position: "",
    service: "",
    preferredTime: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      position: "",
      service: "",
      preferredTime: "",
      message: "",
    })
  }

  return (
    <div className="bg-[#80917D]/5 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-[#134B42] mb-6">Send us a Message</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
          />
        </div>

        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
            Your Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
          >
            <option value="">Select a service</option>
            <option value="digital-transformation">Digital Transformation</option>
            <option value="business-diagnostics">Business Diagnostics</option>
            <option value="strategic-planning">Strategic & Business Planning</option>
            <option value="business-advisory">Business Advisory</option>
            <option value="sales-marketing">Sales & Marketing Modules</option>
            <option value="business-growth">Business Growth & Implementation</option>
            <option value="process-management">Process Management</option>
            <option value="event-management">Event Management Services</option>
            <option value="sustainable-business">Sustainable Business Advisory</option>
            <option value="training">Training & Capacity Building</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Meeting Time
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
          >
            <option value="">Select a time slot</option>
            <option value="monday-10am">Monday 10:00 AM</option>
            <option value="wednesday-10am">Wednesday 10:00 AM</option>
            <option value="friday-10am">Friday 10:00 AM</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#134B42] focus:border-[#134B42]"
          ></textarea>
        </div>

        <Button type="submit" className="w-full bg-[#134B42] hover:bg-[#134B42]/90">
          Send Message
        </Button>
      </form>
    </div>
  )
}

