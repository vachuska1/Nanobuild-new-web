"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/components/language-provider"

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              name="firstName"
              placeholder={t("firstName")}
              value={formData.firstName}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <Input
              type="text"
              name="lastName"
              placeholder={t("lastName")}
              value={formData.lastName}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder={t("phone")}
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder={t("email")}
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
        </div>

        <div>
          <Textarea
            name="message"
            placeholder={t("message")}
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            className="border-gray-600"
          />
          <label htmlFor="consent" className="text-sm text-gray-300">
            I agree to the{" "}
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
              processing of personal data
            </Link>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron"
          disabled={!formData.consent}
        >
          {t("sendMessage")}
        </Button>
      </form>
    </div>
  )
}
