"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "cs" | "de" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: "Home",
    products: "Products",
    downloads: "Downloads",
    news: "News",
    contact: "Contact",
    heroTitle: "Innovative Graphene Dispersions",
    heroSubtitle: "Leading the future of nanotechnology with cutting-edge graphene solutions",
    learnMore: "Learn More",
    aboutTitle: "About NANOBUILD",
    aboutText:
      "NANOBUILD is a pioneering startup focused on the innovative production of graphene dispersions. We are at the forefront of nanotechnology, developing revolutionary solutions that transform industries.",
    productsTitle: "Our Products",
    productsText:
      "Discover our range of high-quality graphene dispersions designed for various industrial applications.",
    contactTitle: "Get in Touch",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    consent: "I agree to the processing of personal data",
    sendMessage: "Send Message",
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "All rights reserved",
  },
  cs: {
    home: "Domů",
    products: "Produkty",
    downloads: "Stažení",
    news: "Novinky",
    contact: "Kontakt",
    heroTitle: "Inovativní grafenové disperze",
    heroSubtitle: "Vedeme budoucnost nanotechnologií s nejmodernějšími grafenovými řešeními",
    learnMore: "Zjistit více",
    aboutTitle: "O společnosti NANOBUILD",
    aboutText:
      "NANOBUILD je průkopnický startup zaměřený na inovativní výrobu grafenových disperzí. Jsme v čele nanotechnologií a vyvíjíme revoluční řešení, která transformují průmysl.",
    productsTitle: "Naše produkty",
    productsText: "Objevte naši řadu vysoce kvalitních grafenových disperzí navržených pro různé průmyslové aplikace.",
    contactTitle: "Kontaktujte nás",
    firstName: "Jméno",
    lastName: "Příjmení",
    phone: "Telefon",
    email: "Email",
    message: "Zpráva",
    consent: "Souhlasím se zpracováním osobních údajů",
    sendMessage: "Odeslat zprávu",
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Všechna práva vyhrazena",
  },
  de: {
    home: "Startseite",
    products: "Produkte",
    downloads: "Downloads",
    news: "Nachrichten",
    contact: "Kontakt",
    heroTitle: "Innovative Graphen-Dispersionen",
    heroSubtitle: "Die Zukunft der Nanotechnologie mit modernsten Graphen-Lösungen anführen",
    learnMore: "Mehr erfahren",
    aboutTitle: "Über NANOBUILD",
    aboutText:
      "NANOBUILD ist ein wegweisendes Startup, das sich auf die innovative Herstellung von Graphen-Dispersionen konzentriert. Wir sind an der Spitze der Nanotechnologie und entwickeln revolutionäre Lösungen, die Industrien transformieren.",
    productsTitle: "Unsere Produkte",
    productsText:
      "Entdecken Sie unser Sortiment hochwertiger Graphen-Dispersionen für verschiedene industrielle Anwendungen.",
    contactTitle: "Kontakt aufnehmen",
    firstName: "Vorname",
    lastName: "Nachname",
    phone: "Telefon",
    email: "E-Mail",
    message: "Nachricht",
    consent: "Ich stimme der Verarbeitung personenbezogener Daten zu",
    sendMessage: "Nachricht senden",
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Alle Rechte vorbehalten",
  },
  ru: {
    home: "Главная",
    products: "Продукты",
    downloads: "Загрузки",
    news: "Новости",
    contact: "Контакты",
    heroTitle: "Инновационные графеновые дисперсии",
    heroSubtitle: "Ведем будущее нанотехнологий с передовыми графеновыми решениями",
    learnMore: "Узнать больше",
    aboutTitle: "О компании NANOBUILD",
    aboutText:
      "NANOBUILD - это новаторский стартап, специализирующийся на инновационном производстве графеновых дисперсий. Мы находимся в авангарде нанотехнологий, разрабатывая революционные решения, которые трансформируют отрасли.",
    productsTitle: "Наши продукты",
    productsText:
      "Откройте для себя наш ассортимент высококачественных графеновых дисперсий, предназначенных для различных промышленных применений.",
    contactTitle: "Связаться с нами",
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон",
    email: "Электронная почта",
    message: "Сообщение",
    consent: "Я согласен на обработку персональных данных",
    sendMessage: "Отправить сообщение",
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Все права защищены",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
