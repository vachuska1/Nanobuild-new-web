"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: "en", name: "English" },
    { code: "cs", name: "Čeština" },
    { code: "de", name: "Deutsch" },
    { code: "ru", name: "Русский" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="NANOBUILD" width={150} height={40} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("home")}
            </Link>
            <Link href="/products" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("products")}
            </Link>
            <Link href="/downloads" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("downloads")}
            </Link>
            <Link href="/news" className="font-orbitron text-gray-900 hover:text-cyan-600 transition-colors">
              {t("news")}
            </Link>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="font-orbitron">
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={language === lang.code ? "bg-cyan-50" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("home")}
              </Link>
              <Link href="/products" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("products")}
              </Link>
              <Link href="/downloads" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("downloads")}
              </Link>
              <Link href="/news" className="block px-3 py-2 font-orbitron text-gray-900 hover:text-cyan-600">
                {t("news")}
              </Link>
              <div className="px-3 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="font-orbitron">
                      <Globe className="h-4 w-4 mr-2" />
                      {language.toUpperCase()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as any)}
                        className={language === lang.code ? "bg-cyan-50" : ""}
                      >
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
