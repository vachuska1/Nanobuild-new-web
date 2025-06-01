"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const applicationData = {
  "concrete-mortars-building-mixes": {
    title: "Concrete, Mortars, Building Mixes",
    subtitle: "Graphene in Construction",
    content: [
      "Increases concrete strength – reduces microcrack formation, improves flexibility and durability.",
      "Reduces carbon footprint – allows for a reduction in cement content, decreasing CO₂ emissions.",
      "Speeds up curing – enhances the hydration process and accelerates strength development.",
      "Improves resistance to water and chemicals – increases the longevity of building materials.",
      "Enhances thermal conductivity – enables better temperature regulation in buildings.",
      "Supports sustainability – aids in concrete recycling and reduces the need for new raw materials.",
    ],
  },
  "plastics-polymers-paints-protective-coatings": {
    title: "Plastics, Polymers, Paints, Protective Coatings",
    subtitle: "Coatings with graphene",
    content: [
      "Based on our thin-film graphene dispersion obtained under special resonance conditions, we have developed the most effective shielding coating to date, capable of absorbing electromagnetic waves over a wide range.",
      "In the range of 1.5 to 120 GHz, the coating absorbs up to 99% of electromagnetic waves. The loss tangent (tan δ) exceeds 90% at almost all frequencies.",
      "The coating is resistant to water, oils, hydrocarbons, and organosilicon liquids and finds commercial applications primarily in the defense and security industry, aerospace, and aviation, designed to minimize detection by radar, infrared, or other sensors.",
    ],
  },
  "powder-metallurgy-light-non-ferrous-alloys": {
    title: "Powder Metallurgy and Metallurgy of Light and Non-Ferrous Alloys",
    subtitle: "Metallurgy",
    content: [
      "High conductivity – enables faster signal transmission in microelectronics.",
      "Extreme sensitivity – enhances the performance of photodetectors across a wide wavelength spectrum.",
      "Transparency and flexibility – ideal for optoelectronic displays and sensors.",
      "Fast response – allows for more efficient optical switches and photodetectors.",
      "Low power consumption – reduces energy demands in microelectronic devices.",
      "Miniaturization of components – enables the development of smaller and more powerful chips and transistors.",
    ],
  },
  "energy-saving-technologies-electricity-production": {
    title: "Energy Saving Technologies and New Ways of Electricity Production",
    subtitle: "Technology",
    content: [
      "Extreme sensitivity – Detection of substances at the molecular level.",
      "Fast response – Immediate detection of environmental changes.",
      "Low energy consumption – Efficient operation with minimal power usage.",
      "Flexibility – Can be integrated into wearable and flexible devices.",
      "Interference resistance – High selectivity and measurement stability.",
      "Wide range of applications – Used in medicine, ecology, and industry.",
    ],
  },
  "environmental-protection": {
    title: "Environmental Protection",
    subtitle: "Environment",
    content: [
      "Bacteria elimination – Graphene disrupts the cell walls of microorganisms.",
      "Long-term effectiveness – Permanent protection without the need for frequent disinfection.",
      "No chemicals – Antibacterial effect without the use of toxic substances.",
      "Wide applications – Used in medicine, food industry, and public spaces.",
      "Durability – Graphene-coated surfaces have a long lifespan.",
      "Human safety – Non-toxic and biocompatible materials.",
    ],
  },
  "composite-materials": {
    title: "Composite Materials",
    subtitle: "Composites",
    content: [
      "Advanced Technologies – Innovative materials for high efficiency.",
      "Wide Applications – Used in the chemical, food, and pharmaceutical industries.",
      "Environmental Benefits – Improving water and air quality.",
      "High Purity – Ensuring the quality of final products.",
      "Flexible Solutions – Tailoring pore sizes and materials.",
      "Cost Savings – Reducing operational and energy costs.",
    ],
  },
  "wear-resistant-rubber-elastomers": {
    title: "Wear-Resistant Rubber and Other Elastomers",
    subtitle: "Wear-Resistant Elastomers",
    content: [
      "High durability – Resistance to wear and abrasion for long-lasting performance.",
      "Elastic properties – Excellent flexibility and ability to return to original shape.",
      "Wide application – Used in automotive, heavy industry, and construction.",
      "Temperature stability – Resistance to extreme temperatures and environmental influences.",
      "Chemical resistance – Protection against aggressive chemicals and oils.",
      "Economic benefits – Reduction in maintenance costs and extended equipment lifespan.",
    ],
  },
  "lubricants-technical-fluids": {
    title: "Lubricants, Technical Fluids",
    subtitle: "Lubricants and Fluids",
    content: [
      "Performance Optimization – Ensuring smooth operation of machines and equipment.",
      "Reducing Friction – Minimizing wear and improving efficiency.",
      "Wide Application – Used in the automotive, aerospace, and industrial sectors.",
      "Temperature Resistance – Stability under extreme temperatures and various working conditions.",
      "Corrosion Protection – Preventing rust formation and extending the lifespan of components.",
      "Cost Savings – Reducing maintenance costs and extending replacement intervals.",
    ],
  },
}

export default function ApplicationPage() {
  const params = useParams()
  const { t } = useLanguage()
  const slug = params.slug as string
  const application = applicationData[slug as keyof typeof applicationData]

  const scrollToContact = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!application) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-orbitron mb-6">Application Not Found</h1>
            <Link href="/">
              <Button className="bg-cyan-600 hover:bg-cyan-700 font-orbitron">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="font-orbitron">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Applications
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 gradient-text">{application.title}</h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold font-orbitron mb-6 gradient-text">{application.subtitle}</h3>
            <div className="space-y-4">
              {application.content.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold font-orbitron mb-4 gradient-text">Interested in This Application?</h2>
          <p className="text-gray-600 mb-6">
            Contact our technical team to discuss how our graphene dispersions can enhance your specific application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 font-orbitron" onClick={scrollToContact}>
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/downloads">
              <Button size="lg" variant="outline" className="font-orbitron">
                Download Technical Data
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
