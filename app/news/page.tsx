"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const { t } = useLanguage()

  // Mock news data - in a real app, this would come from a CMS or database
  const [news] = useState([
    {
      id: 1,
      title: "NANOBUILD Announces Breakthrough in Graphene Dispersion Technology",
      excerpt:
        "Our latest research has led to a significant improvement in graphene dispersion stability and performance.",
      content: "Full article content would go here...",
      author: "Dr. Pavel Novák",
      date: "2025-01-15",
      category: "Research",
      image: "/images/graphene-1.png",
      featured: true,
    },
    {
      id: 2,
      title: "Partnership with Leading Electronics Manufacturer",
      excerpt: "NANOBUILD partners with major electronics company to develop next-generation conductive materials.",
      content: "Full article content would go here...",
      author: "Marketing Team",
      date: "2025-01-10",
      category: "Business",
      image: "/images/graphene-2.png",
      featured: false,
    },
    {
      id: 3,
      title: "New Production Facility Opens in Prague",
      excerpt: "Expansion of our manufacturing capabilities with state-of-the-art equipment and increased capacity.",
      content: "Full article content would go here...",
      author: "Operations Team",
      date: "2025-01-05",
      category: "Company",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      id: 4,
      title: "Sustainable Graphene Production Methods",
      excerpt: "Our commitment to environmental responsibility through innovative green production techniques.",
      content: "Full article content would go here...",
      author: "Dr. Marie Svobodová",
      date: "2024-12-28",
      category: "Sustainability",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ])

  const categories = ["All", "Research", "Business", "Company", "Sustainability"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews =
    selectedCategory === "All" ? news : news.filter((article) => article.category === selectedCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-orbitron mb-6 gradient-text">{t("news")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, research breakthroughs, and company news from NANOBUILD.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`font-orbitron ${
                selectedCategory === category ? "bg-cyan-600 hover:bg-cyan-700" : "hover:border-cyan-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredNews.find((article) => article.featured) && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-orbitron mb-8 text-center">Featured Article</h2>
            {(() => {
              const featured = filteredNews.find((article) => article.featured)!
              return (
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-auto">
                      <img
                        src={featured.image || "/placeholder.svg"}
                        alt={featured.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-cyan-100 text-cyan-800 font-orbitron">{featured.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(featured.date)}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold font-orbitron mb-4">{featured.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {featured.author}
                        </div>
                        <Button className="bg-cyan-600 hover:bg-cyan-700 font-orbitron">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })()}
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews
            .filter((article) => !article.featured)
            .map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow border-0 bg-white overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="font-orbitron">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(article.date)}
                    </div>
                  </div>
                  <CardTitle className="font-orbitron text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <Button size="sm" variant="ghost" className="font-orbitron text-cyan-600 hover:text-cyan-700">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold font-orbitron mb-4 gradient-text">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 font-orbitron">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  )
}
