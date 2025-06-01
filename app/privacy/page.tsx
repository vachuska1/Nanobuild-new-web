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
          <div className="bg-white rounded-lg p-8 shadow-sm space-y-8">
            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Information We Collect</h2>
              <p className="mb-4">We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Fill out our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Download technical documents</li>
                <li>Communicate with us via email or phone</li>
                <li>Visit our website (through cookies and analytics)</li>
              </ul>
              <p className="mb-6">
                The types of information we may collect include your name, email address, phone number, company
                information, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical information and updates about our products</li>
                <li>Process your requests for technical documentation</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Communicate with you about our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Data Retention</h2>
              <p className="mb-6">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                privacy policy, unless a longer retention period is required or permitted by law. Specifically:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Contact form submissions:</strong> 3 years from the date of submission
                </li>
                <li>
                  <strong>Email communications:</strong> 3 years from the last communication
                </li>
                <li>
                  <strong>Newsletter subscriptions:</strong> Until you unsubscribe
                </li>
                <li>
                  <strong>Website analytics data:</strong> 26 months (Google Analytics default)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Who Has Access to Your Data</h2>
              <p className="mb-4">Your personal information may be accessed by:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>NANOBUILD employees:</strong> Only those who need access to respond to your inquiries
                </li>
                <li>
                  <strong>Service providers:</strong> Third-party services we use (email hosting, website analytics,
                  cloud storage)
                </li>
                <li>
                  <strong>Legal authorities:</strong> When required by law or to protect our rights
                </li>
              </ul>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties for marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Data Protection & Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security assessments</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Your Rights</h2>
              <p className="mb-4">Under GDPR and other applicable laws, you have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Rectification:</strong> Correct inaccurate or incomplete data
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal data
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a structured format
                </li>
                <li>
                  <strong>Restriction:</strong> Limit how we process your data
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing based on legitimate interests
                </li>
                <li>
                  <strong>Withdraw consent:</strong> Where processing is based on consent
                </li>
              </ul>
              <p className="mb-6">To exercise these rights, please contact us using the information below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Cookies and Analytics</h2>
              <p className="mb-6">
                Our website uses cookies and similar technologies to improve your browsing experience and analyze
                website traffic. We use Google Analytics to understand how visitors interact with our site. You can
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Updates to This Policy</h2>
              <p className="mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "last updated" date.
              </p>
              <p className="mb-6 text-sm text-gray-600">
                <strong>Last updated:</strong> January 2025
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 gradient-text">Contact Information</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:nanobuildinfo@gmail.com" className="text-cyan-600 hover:text-cyan-700">
                    nanobuildinfo@gmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+420602305209" className="text-cyan-600 hover:text-cyan-700">
                    +420602305209
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha, Czech Republic
                </p>
                <p>
                  <strong>Company ID (IČO):</strong> 17731691
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
