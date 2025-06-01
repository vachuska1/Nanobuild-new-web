"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DownloadsPage() {
  const { t } = useLanguage()

  const downloads = [
    {
      id: 1,
      title: "2DD-OL - Dispersion of Few-Layer Graphene in Industrial Oil",
      description:
        "Technical data sheet for graphene dispersion in industrial oil for composite materials and powder metallurgy",
      type: "PDF",
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJERC1PTCkgVGoKRVQKUQplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDI0NSAwMDAwMCBuIAowMDAwMDAwMzIyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDcyCiUlRU9G",
      filename: "2DD-OL-Technical-Data-Sheet.pdf",
    },
    {
      id: 2,
      title: "2D-2R - Surface Treatment Material",
      description: "Electromagnetic radiation protection material operating at temperatures up to 8000°C",
      type: "PDF",
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJELTJSKSBUagpFVApRCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NzIKJSVFT0Y=",
      filename: "2D-2R-Surface-Treatment-Material.pdf",
    },
    {
      id: 3,
      title: "2DD-WPE - Water-Polymer Dispersion of Few-Layer Graphene",
      description:
        "Aqueous dispersion for enhancing electrical conductivity and anti-corrosion properties of mineral fibers",
      type: "PDF",
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJERC1XUEUpIFRqCkVUClEKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA1OCAwMDAwMCBuIAowMDAwMDAwMTE1IDAwMDAwIG4gCjAwMDAwMDAyNDUgMDAwMDAgbiAKMDAwMDAwMDMyMiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ3MgolJUVPRg==",
      filename: "2DD-WPE-Water-Polymer-Dispersion.pdf",
    },
    {
      id: 4,
      title: "2DD-W - Aqueous Dispersion of Few-Layer Graphene",
      description: "Water-based graphene suspension for electromagnetic wave absorption and structural applications",
      type: "PDF",
      size: "0.2 MB",
      icon: FileText,
      downloadUrl:
        "data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVApxCjcyIDcyMCA3MiA3MjAgcmUKUwpCVAovRjEgMTIgVGYKNzIgNzAwIFRkCihUZWNobmljYWwgRGF0YSBTaGVldCAtIDJERC1XKSBUagpFVApRCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjIgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0NzIKJSVFT0Y=",
      filename: "2DD-W-Aqueous-Dispersion.pdf",
    },
  ]

  const handleDownload = (downloadUrl: string, filename: string) => {
    try {
      // Create an anchor element and trigger the download
      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = filename
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab
      window.open(downloadUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-orbitron mb-6 gradient-text">{t("downloads")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of technical documents, product catalogs, and educational materials.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item) => {
            const IconComponent = item.icon
            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-cyan-600">{item.type}</div>
                      <div className="text-xs text-gray-500">{item.size}</div>
                    </div>
                  </div>
                  <CardTitle className="font-orbitron text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-cyan-600 hover:bg-cyan-700 font-orbitron"
                    onClick={() => handleDownload(item.downloadUrl, item.filename)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Applications Section */}
        <section className="py-20 mt-16">
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

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold font-orbitron mb-4 gradient-text">Need Additional Information?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Contact our technical team for custom documentation or specific
              product information.
            </p>
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 font-orbitron"
              onClick={() => {
                const footer = document.querySelector("footer")
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact Technical Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
