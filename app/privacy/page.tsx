"use client"

import { useLanguage } from "@/components/language-provider"

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-orbitron mb-6 gradient-text">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold font-orbitron mb-6">Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us, such as when you fill out our contact form, subscribe
              to our newsletter, or communicate with us.
            </p>

            <h2 className="text-2xl font-bold font-orbitron mb-6">How We Use Your Information</h2>
            <p className="mb-6">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical information and updates about our products</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold font-orbitron mb-6">Data Protection</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold font-orbitron mb-6">Contact Information</h2>
            <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>
                <strong>Email:</strong> nanobuildinfo@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +420602305209
              </p>
              <p>
                <strong>Address:</strong> Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
