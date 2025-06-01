"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Atom, Droplets, Layers, Zap } from "lucide-react"

export default function ProductsPage() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      name: "Graphene Oxide Dispersion",
      description: "High-quality graphene oxide dispersions for various industrial applications",
      features: ["High purity", "Stable dispersion", "Customizable concentration"],
      icon: Droplets,
      category: "Dispersions",
    },
    {
      id: 2,
      name: "Reduced Graphene Oxide",
      description: "Advanced reduced graphene oxide with enhanced electrical properties",
      features: ["Enhanced conductivity", "Superior mechanical properties", "Scalable production"],
      icon: Layers,
      category: "Advanced Materials",
    },
    {
      id: 3,
      name: "Functionalized Graphene",
      description: "Specially functionalized graphene for targeted applications",
      features: ["Custom functionalization", "Application-specific", "High performance"],
      icon: Atom,
      category: "Specialized",
    },
    {
      id: 4,
      name: "Graphene Nanocomposites",
      description: "Innovative nanocomposite materials with graphene enhancement",
      features: ["Enhanced strength", "Improved thermal properties", "Lightweight"],
      icon: Zap,
      category: "Composites",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon
            return (
              <Card key={product.id} className="hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-cyan-600" />
                    </div>
                    <Badge variant="secondary" className="font-orbitron">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="font-orbitron text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 font-orbitron">Learn More</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Applications Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold font-orbitron text-center mb-8 gradient-text">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Electronics",
              "Energy Storage",
              "Composites",
              "Coatings",
              "Sensors",
              "Biomedical",
              "Automotive",
              "Aerospace",
            ].map((application, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg">
                <h3 className="font-semibold font-orbitron text-gray-900">{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
