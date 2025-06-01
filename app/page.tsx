"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, Atom, Zap, Shield, Microscope, Layers, Beaker } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

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

  const applications = [
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
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6">
                <span className="gradient-text">{t("heroTitle")}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{t("heroSubtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron"
                  onClick={() => document.getElementById("technology-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t("learnMore")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-orbitron border-gray-300 hover:border-cyan-600"
                  onClick={() => {
                    const footer = document.querySelector("footer")
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  {t("contact")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src="/images/graphene-1.png"
                      alt="Graphene Structure"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src="/images/graphene-2.png"
                      alt="Graphene Lattice"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">{t("aboutTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("aboutText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Atom className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold font-orbitron mb-4">Innovation</h3>
              <p className="text-gray-600">Cutting-edge research and development in graphene technology</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold font-orbitron mb-4">Performance</h3>
              <p className="text-gray-600">High-quality dispersions with exceptional properties</p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold font-orbitron mb-4">Reliability</h3>
              <p className="text-gray-600">Consistent quality and trusted solutions for industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">
              Technology of Low-Layer Graphene Production
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our low-layer graphene dispersions are obtained through a patented method that involves the dispersion of
              graphite at resonant frequencies.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              Resonance is a physical phenomenon in which a system begins to oscillate with maximum amplitude in
              response to an external force with a certain frequency that matches its own (natural) frequency. In the
              context of producing low-layer graphene dispersions using acoustic resonance, this means the following:
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Acoustic resonance generates strong vibrational waves in the dispersion medium (such as water with
              dissolved components). These vibrations are efficiently transferred to the graphite particles, causing
              intense mechanical stress. As a result, the graphite breaks into separate thin sheets, creating low-layer
              graphene without significant damage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We chose this method of graphene production based on theoretical assumptions regarding the differences in
              properties between elemental and low-layer graphene, with a preference for non-elemental graphene.
            </p>
          </div>

          {/* Advantages Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold font-orbitron mb-8 text-center gradient-text">
              1. Advantages of Low-Layer Graphene Compared to Elemental Graphene
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">Structural Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Elemental (monolayer) graphene is extremely sensitive to mechanical stress and is prone to damage.
                    Our low-layer graphene, consisting of 3-20 layers of graphene sheets, has much greater mechanical
                    strength and resistance to damage due to interlayer van der Waals interactions. This makes our
                    low-layer graphene more suitable for composite materials and battery materials, where durability and
                    stress resistance are crucial.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">Improved Conductivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Elemental graphene exhibits the highest theoretical conductivity, but in practice, this
                    characteristic deteriorates due to defects and contamination from impurities. Our low-layer graphene
                    maintains high conductivity but is less prone to degradation when in contact with polymers and
                    ionically conductive matrices. Batteries and supercapacitors containing low-layer graphene ensure
                    stable operation under cyclic loading.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">Better Dispersibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Elemental graphene tends to aggregate due to its high specific surface area and strong π-π
                    interactions. Our low-layer graphene has an optimal balance between specific surface area and
                    interlayer forces, improving its dispersibility, especially in complex mixtures. This simplifies the
                    process of integrating polymers, cements, and other composite systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dispersion Media Effects */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold font-orbitron mb-8 text-center gradient-text">
              2. Effect of Dispersion Media Containing Low-Layer Graphene
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Beaker className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">Synergistic Effect with the Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Using dispersion media that contain components of the future composite (such as ionic salts for
                    batteries or polymers for fibers) creates direct chemical compatibility. Our low-layer graphene can
                    be "embedded" into the matrix structure at the molecular level without additional processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Atom className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">Reducing Post-Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    If low-layer graphene is already in a compatible environment, there is no need to remove solvents
                    and then re-disperse it. Its use saves time, reduces production costs, and minimizes the risk of
                    graphene particle aggregation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Acoustic Resonance Method */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold font-orbitron mb-8 text-center gradient-text">
              3. Role of Acoustic Resonance Method in Dispersion
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Microscope className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">Minimization of Defects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Acoustic resonance (ultrasonic graphene production at resonant frequencies) allows for the gentle
                    separation of graphite into low-layer fragments without damaging the carbon lattice structure. This
                    results in the creation of high-quality graphene with minimal structural defects, which is crucial
                    for ensuring conductivity and mechanical strength.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">High Homogeneity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    The acoustic resonance method helps achieve a narrow distribution of the number of graphene sheet
                    layers (e.g., 3-10), which is important for controlled material properties. In batteries and
                    composites, this ensures a more uniform distribution of currents and mechanical stress.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Atom className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="font-orbitron">Control Over Morphology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Our acoustic resonance method for producing graphene can be controlled to achieve different sizes
                    and shapes of graphene sheets. This allows for the optimization of graphene production for specific
                    tasks – whether it is for flexible conductors or solid battery cathodes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Future Vision */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold font-orbitron mb-6 text-center gradient-text">
              Nanomaterials - Technology that is changing the future
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our products, which we manufacture and incorporate our ideas into, have practical significance not only
                in the form of graphene dispersions and binders but also in solving modern problems aiming for
                technological progress, especially in the fields of alternative and renewable energy sources. We are
                constantly developing ideas and technical solutions in environmentally friendly areas. We present a new
                era of nano-innovations that push the boundaries of technological possibilities. The connection of
                molecules at the atomic level is the key to sustainability and efficiency in our solutions.
              </p>
              <p>
                Step into a world where the crystalline structures of graphene and other nanomaterials form the
                foundation of modern structures. Our research and development teams are constantly working to improve
                structures that support higher performance and lower consumption, enabling the production of lighter and
                more durable materials for industry, science, and home use. Our technologies are the result of years of
                experience and research. We believe in a future where nano-innovations will change the world for the
                better. We push the boundaries of what is possible and lay the foundation for the next generation of
                nanotechnologies. Strong and durable materials are now available for a wide range of applications.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 font-orbitron" onClick={scrollToContact}>
                Contact Our Research Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron mb-6 gradient-text">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our range of high-quality graphene dispersions designed for various industrial applications.
            </p>
          </div>

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

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-orbitron">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
            {applications.map((application, index) => (
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
              onClick={scrollToContact}
            >
              Discuss Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
