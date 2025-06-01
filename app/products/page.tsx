"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Atom, Layers, Shield } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const { t } = useLanguage()

  const products = [
    {
      name: "2DD-OL",
      title: "Dispersion of Few-Layer Graphene in Industrial Oil",
      description:
        "Designed for modification of organic and organosilicon compounds, enhancing thermal and electrical conductivity.",
      specs: ["3 wt.% graphene concentration", "10-30 μm particle size", "≥98% carbon content"],
      icon: Atom,
    },
    {
      name: "2D-2R",
      title: "Surface Treatment Material",
      description: "Electromagnetic radiation protection material absorbing up to 98% of radiation at 2-3mm thickness.",
      specs: ["Operating temp up to 8000°C", "3-110 GHz frequency range", "Up to 24 months shelf life"],
      icon: Shield,
    },
    {
      name: "2DD-WPE",
      title: "Water-Polymer Dispersion",
      description: "Enhances electrical conductivity of mineral fibers and improves anti-corrosion properties.",
      specs: ["2 wt.% graphene concentration", "Water-soluble polymer medium", "High adhesion to fibers"],
      icon: Layers,
    },
    {
      name: "2DD-W",
      title: "Aqueous Dispersion",
      description: "Acts as matrix strength activator for electromagnetic wave absorption and structural applications.",
      specs: ["4 wt.% graphene concentration", "Water-based medium", "Up to 7.2% concentration available"],
      icon: Atom,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-orbitron mb-6 gradient-text">{t("products")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of graphene-based products designed for cutting-edge applications across
            various industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-cyan-600" />
                    </div>
                    <span className="text-sm font-bold font-orbitron text-cyan-600">{product.name}</span>
                  </div>
                  <CardTitle className="font-orbitron text-lg">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <Link href="/downloads">
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 font-orbitron">
                      Download Technical Data Sheet
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Applications Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">Applications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our graphene dispersions enable breakthrough solutions across multiple industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Concrete, Mortars, Building Mixes",
                  slug: "concrete-mortars-building-mixes",
                },
                {
                  title: "Plastics, Polymers, Paints, Protective Coatings",
                  slug: "plastics-polymers-paints-protective-coatings",
                },
                {
                  title: "Powder Metallurgy and Metallurgy of Light and Non-Ferrous Alloys",
                  slug: "powder-metallurgy-light-non-ferrous-alloys",
                },
                {
                  title: "Energy Saving Technologies and New Ways of Electricity Production",
                  slug: "energy-saving-technologies-electricity-production",
                },
                {
                  title: "Environmental Protection",
                  slug: "environmental-protection",
                },
                {
                  title: "Composite Materials",
                  slug: "composite-materials",
                },
                {
                  title: "Wear-Resistant Rubber and Other Elastomers",
                  slug: "wear-resistant-rubber-elastomers",
                },
                {
                  title: "Lubricants, Technical Fluids",
                  slug: "lubricants-technical-fluids",
                },
              ].map((application, index) => (
                <Link key={index} href={`/applications/${application.slug}`}>
                  <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group h-32 flex items-center justify-center">
                    <h3 className="font-semibold font-orbitron text-gray-900 group-hover:text-cyan-600 transition-colors text-sm leading-tight">
                      {application.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron"
                onClick={() => {
                  const footer = document.querySelector("footer")
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Discuss Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
