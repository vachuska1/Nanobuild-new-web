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
    // Navigation
    home: "Home",
    products: "Products",
    downloads: "Downloads",
    news: "News",
    contact: "Contact",

    // Hero Section
    heroTitle: "Innovative Graphene Dispersions",
    heroSubtitle: "Leading the future of nanotechnology with cutting-edge graphene solutions",
    learnMore: "Learn More",

    // About Section
    aboutTitle: "About NANOBUILD",
    aboutText:
      "NANOBUILD is a pioneering startup focused on the innovative production of graphene dispersions. We are at the forefront of nanotechnology, developing revolutionary solutions that transform industries.",
    innovation: "Innovation",
    innovationText: "Cutting-edge research and development in graphene technology",
    performance: "Performance",
    performanceText: "High-quality dispersions with exceptional properties",
    reliability: "Reliability",
    reliabilityText: "Consistent quality and trusted solutions for industry",

    // Technology Section
    technologyTitle: "Technology of Low-Layer Graphene Production",
    technologySubtitle:
      "Our low-layer graphene dispersions are obtained through a patented method that involves the dispersion of graphite at resonant frequencies.",
    technologyIntro1:
      "Resonance is a physical phenomenon in which a system begins to oscillate with maximum amplitude in response to an external force with a certain frequency that matches its own (natural) frequency. In the context of producing low-layer graphene dispersions using acoustic resonance, this means the following:",
    technologyIntro2:
      "Acoustic resonance generates strong vibrational waves in the dispersion medium (such as water with dissolved components). These vibrations are efficiently transferred to the graphite particles, causing intense mechanical stress. As a result, the graphite breaks into separate thin sheets, creating low-layer graphene without significant damage.",
    technologyIntro3:
      "We chose this method of graphene production based on theoretical assumptions regarding the differences in properties between elemental and low-layer graphene, with a preference for non-elemental graphene.",

    // Advantages Section
    advantagesTitle: "1. Advantages of Low-Layer Graphene Compared to Elemental Graphene",
    structuralStability: "Structural Stability",
    structuralStabilityText:
      "Elemental (monolayer) graphene is extremely sensitive to mechanical stress and is prone to damage. Our low-layer graphene, consisting of 3-20 layers of graphene sheets, has much greater mechanical strength and resistance to damage due to interlayer van der Waals interactions. This makes our low-layer graphene more suitable for composite materials and battery materials, where durability and stress resistance are crucial.",
    improvedConductivity: "Improved Conductivity",
    improvedConductivityText:
      "Elemental graphene exhibits the highest theoretical conductivity, but in practice, this characteristic deteriorates due to defects and contamination from impurities. Our low-layer graphene maintains high conductivity but is less prone to degradation when in contact with polymers and ionically conductive matrices. Batteries and supercapacitors containing low-layer graphene ensure stable operation under cyclic loading.",
    betterDispersibility: "Better Dispersibility",
    betterDispersibilityText:
      "Elemental graphene tends to aggregate due to its high specific surface area and strong π-π interactions. Our low-layer graphene has an optimal balance between specific surface area and interlayer forces, improving its dispersibility, especially in complex mixtures. This simplifies the process of integrating polymers, cements, and other composite systems.",

    // Dispersion Media Effects
    dispersionTitle: "2. Effect of Dispersion Media Containing Low-Layer Graphene",
    synergisticEffect: "Synergistic Effect with the Matrix",
    synergisticEffectText:
      'Using dispersion media that contain components of the future composite (such as ionic salts for batteries or polymers for fibers) creates direct chemical compatibility. Our low-layer graphene can be "embedded" into the matrix structure at the molecular level without additional processing.',
    reducingPostProcessing: "Reducing Post-Processing",
    reducingPostProcessingText:
      "If low-layer graphene is already in a compatible environment, there is no need to remove solvents and then re-disperse it. Its use saves time, reduces production costs, and minimizes the risk of graphene particle aggregation.",

    // Acoustic Resonance Method
    acousticTitle: "3. Role of Acoustic Resonance Method in Dispersion",
    minimizationDefects: "Minimization of Defects",
    minimizationDefectsText:
      "Acoustic resonance (ultrasonic graphene production at resonant frequencies) allows for the gentle separation of graphite into low-layer fragments without damaging the carbon lattice structure. This results in the creation of high-quality graphene with minimal structural defects, which is crucial for ensuring conductivity and mechanical strength.",
    highHomogeneity: "High Homogeneity",
    highHomogeneityText:
      "The acoustic resonance method helps achieve a narrow distribution of the number of graphene sheet layers (e.g., 3-10), which is important for controlled material properties. In batteries and composites, this ensures a more uniform distribution of currents and mechanical stress.",
    controlMorphology: "Control Over Morphology",
    controlMorphologyText:
      "Our acoustic resonance method for producing graphene can be controlled to achieve different sizes and shapes of graphene sheets. This allows for the optimization of graphene production for specific tasks – whether it is for flexible conductors or solid battery cathodes.",

    // Future Vision
    futureTitle: "Nanomaterials - Technology that is changing the future",
    futureText1:
      "Our products, which we manufacture and incorporate our ideas into, have practical significance not only in the form of graphene dispersions and binders but also in solving modern problems aiming for technological progress, especially in the fields of alternative and renewable energy sources. We are constantly developing ideas and technical solutions in environmentally friendly areas. We present a new era of nano-innovations that push the boundaries of technological possibilities. The connection of molecules at the atomic level is the key to sustainability and efficiency in our solutions.",
    futureText2:
      "Step into a world where the crystalline structures of graphene and other nanomaterials form the foundation of modern structures. Our research and development teams are constantly working to improve structures that support higher performance and lower consumption, enabling the production of lighter and more durable materials for industry, science, and home use. Our technologies are the result of years of experience and research. We believe in a future where nano-innovations will change the world for the better. We push the boundaries of what is possible and lay the foundation for the next generation of nanotechnologies. Strong and durable materials are now available for a wide range of applications.",
    contactResearch: "Contact Our Research Team",

    // Products Section
    productsTitle: "Our Products",
    productsText:
      "Discover our range of high-quality graphene dispersions designed for various industrial applications.",
    downloadTechnical: "Download Technical Data Sheet",
    viewAllProducts: "View All Products",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Dispersion of Few-Layer Graphene in Industrial Oil",
    product2DDOLDesc:
      "Designed for modification of organic and organosilicon compounds, enhancing thermal and electrical conductivity.",
    product2DDOLSpec1: "3 wt.% graphene concentration",
    product2DDOLSpec2: "10-30 μm particle size",
    product2DDOLSpec3: "≥98% carbon content",

    product2D2R: "2D-2R",
    product2D2RTitle: "Surface Treatment Material",
    product2D2RDesc:
      "Electromagnetic radiation protection material absorbing up to 98% of radiation at 2-3mm thickness.",
    product2D2RSpec1: "Operating temp up to 8000°C",
    product2D2RSpec2: "3-110 GHz frequency range",
    product2D2RSpec3: "Up to 24 months shelf life",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Water-Polymer Dispersion",
    product2DDWPEDesc: "Enhances electrical conductivity of mineral fibers and improves anti-corrosion properties.",
    product2DDWPESpec1: "2 wt.% graphene concentration",
    product2DDWPESpec2: "Water-soluble polymer medium",
    product2DDWPESpec3: "High adhesion to fibers",

    product2DDW: "2DD-W",
    product2DDWTitle: "Aqueous Dispersion",
    product2DDWDesc:
      "Acts as matrix strength activator for electromagnetic wave absorption and structural applications.",
    product2DDWSpec1: "4 wt.% graphene concentration",
    product2DDWSpec2: "Water-based medium",
    product2DDWSpec3: "Up to 7.2% concentration available",

    // Applications Section
    applicationsTitle: "Applications",
    applicationsText: "Our graphene dispersions enable breakthrough solutions across multiple industries.",
    discussApplication: "Discuss Your Application",

    // Application Names
    appConcrete: "Concrete, Mortars, Building Mixes",
    appPlastics: "Plastics, Polymers, Paints, Protective Coatings",
    appMetallurgy: "Powder Metallurgy and Metallurgy of Light and Non-Ferrous Alloys",
    appEnergy: "Energy Saving Technologies and New Ways of Electricity Production",
    appEnvironment: "Environmental Protection",
    appComposite: "Composite Materials",
    appRubber: "Wear-Resistant Rubber and Other Elastomers",
    appLubricants: "Lubricants, Technical Fluids",

    // Application Content
    appConcreteSubtitle: "Graphene in Construction",
    appConcreteContent1:
      "Increases concrete strength – reduces microcrack formation, improves flexibility and durability.",
    appConcreteContent2:
      "Reduces carbon footprint – allows for a reduction in cement content, decreasing CO₂ emissions.",
    appConcreteContent3: "Speeds up curing – enhances the hydration process and accelerates strength development.",
    appConcreteContent4: "Improves resistance to water and chemicals – increases the longevity of building materials.",
    appConcreteContent5: "Enhances thermal conductivity – enables better temperature regulation in buildings.",
    appConcreteContent6:
      "Supports sustainability – aids in concrete recycling and reduces the need for new raw materials.",

    appPlasticsSubtitle: "Coatings with graphene",
    appPlasticsContent1:
      "Based on our thin-film graphene dispersion obtained under special resonance conditions, we have developed the most effective shielding coating to date, capable of absorbing electromagnetic waves over a wide range.",
    appPlasticsContent2:
      "In the range of 1.5 to 120 GHz, the coating absorbs up to 99% of electromagnetic waves. The loss tangent (tan δ) exceeds 90% at almost all frequencies.",
    appPlasticsContent3:
      "The coating is resistant to water, oils, hydrocarbons, and organosilicon liquids and finds commercial applications primarily in the defense and security industry, aerospace, and aviation, designed to minimize detection by radar, infrared, or other sensors.",

    appMetallurgySubtitle: "Metallurgy",
    appMetallurgyContent1: "High conductivity – enables faster signal transmission in microelectronics.",
    appMetallurgyContent2:
      "Extreme sensitivity – enhances the performance of photodetectors across a wide wavelength spectrum.",
    appMetallurgyContent3: "Transparency and flexibility – ideal for optoelectronic displays and sensors.",
    appMetallurgyContent4: "Fast response – allows for more efficient optical switches and photodetectors.",
    appMetallurgyContent5: "Low power consumption – reduces energy demands in microelectronic devices.",
    appMetallurgyContent6:
      "Miniaturization of components – enables the development of smaller and more powerful chips and transistors.",

    appEnergySubtitle: "Technology",
    appEnergyContent1: "Extreme sensitivity – Detection of substances at the molecular level.",
    appEnergyContent2: "Fast response – Immediate detection of environmental changes.",
    appEnergyContent3: "Low energy consumption – Efficient operation with minimal power usage.",
    appEnergyContent4: "Flexibility – Can be integrated into wearable and flexible devices.",
    appEnergyContent5: "Interference resistance – High selectivity and measurement stability.",
    appEnergyContent6: "Wide range of applications – Used in medicine, ecology, and industry.",

    appEnvironmentSubtitle: "Environment",
    appEnvironmentContent1: "Bacteria elimination – Graphene disrupts the cell walls of microorganisms.",
    appEnvironmentContent2:
      "Long-term effectiveness – Permanent protection without the need for frequent disinfection.",
    appEnvironmentContent3: "No chemicals – Antibacterial effect without the use of toxic substances.",
    appEnvironmentContent4: "Wide applications – Used in medicine, food industry, and public spaces.",
    appEnvironmentContent5: "Durability – Graphene-coated surfaces have a long lifespan.",
    appEnvironmentContent6: "Human safety – Non-toxic and biocompatible materials.",

    appCompositeSubtitle: "Composites",
    appCompositeContent1: "Advanced Technologies – Innovative materials for high efficiency.",
    appCompositeContent2: "Wide Applications – Used in the chemical, food, and pharmaceutical industries.",
    appCompositeContent3: "Environmental Benefits – Improving water and air quality.",
    appCompositeContent4: "High Purity – Ensuring the quality of final products.",
    appCompositeContent5: "Flexible Solutions – Tailoring pore sizes and materials.",
    appCompositeContent6: "Cost Savings – Reducing operational and energy costs.",

    appRubberSubtitle: "Wear-Resistant Elastomers",
    appRubberContent1: "High durability – Resistance to wear and abrasion for long-lasting performance.",
    appRubberContent2: "Elastic properties – Excellent flexibility and ability to return to original shape.",
    appRubberContent3: "Wide application – Used in automotive, heavy industry, and construction.",
    appRubberContent4: "Temperature stability – Resistance to extreme temperatures and environmental influences.",
    appRubberContent5: "Chemical resistance – Protection against aggressive chemicals and oils.",
    appRubberContent6: "Economic benefits – Reduction in maintenance costs and extended equipment lifespan.",

    appLubricantsSubtitle: "Lubricants and Fluids",
    appLubricantsContent1: "Performance Optimization – Ensuring smooth operation of machines and equipment.",
    appLubricantsContent2: "Reducing Friction – Minimizing wear and improving efficiency.",
    appLubricantsContent3: "Wide Application – Used in the automotive, aerospace, and industrial sectors.",
    appLubricantsContent4:
      "Temperature Resistance – Stability under extreme temperatures and various working conditions.",
    appLubricantsContent5: "Corrosion Protection – Preventing rust formation and extending the lifespan of components.",
    appLubricantsContent6: "Cost Savings – Reducing maintenance costs and extending replacement intervals.",

    // Products Page
    productsPageTitle: "Products",
    productsPageText:
      "Discover our comprehensive range of graphene-based products designed for cutting-edge applications across various industries.",
    keyFeatures: "Key Features:",
    learnMoreProduct: "Learn More",

    // Downloads Page
    downloadsTitle: "Downloads",
    downloadsText:
      "Access our comprehensive library of technical documents, product catalogs, and educational materials.",
    download: "Download",
    needAdditional: "Need Additional Information?",
    cantFind:
      "Can't find what you're looking for? Contact our technical team for custom documentation or specific product information.",
    contactTechnical: "Contact Technical Support",

    // Download Items
    download2DDOL: "2DD-OL - Dispersion of Few-Layer Graphene in Industrial Oil",
    download2DDOLDesc:
      "Technical data sheet for graphene dispersion in industrial oil for composite materials and powder metallurgy",
    download2D2R: "2D-2R - Surface Treatment Material",
    download2D2RDesc: "Electromagnetic radiation protection material operating at temperatures up to 8000°C",
    download2DDWPE: "2DD-WPE - Water-Polymer Dispersion of Few-Layer Graphene",
    download2DDWPEDesc:
      "Aqueous dispersion for enhancing electrical conductivity and anti-corrosion properties of mineral fibers",
    download2DDW: "2DD-W - Aqueous Dispersion of Few-Layer Graphene",
    download2DDWDesc: "Water-based graphene suspension for electromagnetic wave absorption and structural applications",

    // News Page
    newsTitle: "News",
    newsText: "Stay updated with the latest developments, research breakthroughs, and company news from NANOBUILD.",
    featuredArticle: "Featured Article",
    readMore: "Read More",
    stayUpdated: "Stay Updated",
    subscribeText: "Subscribe to our newsletter to receive the latest news and updates directly in your inbox.",
    subscribeNewsletter: "Subscribe to Newsletter",
    all: "All",
    research: "Research",
    business: "Business",
    company: "Company",
    sustainability: "Sustainability",

    // News Articles
    newsArticle1Title: "NANOBUILD Announces Breakthrough in Graphene Dispersion Technology",
    newsArticle1Excerpt:
      "Our latest research has led to a significant improvement in graphene dispersion stability and performance.",
    newsArticle1Author: "Dr. Pavel Novák",

    newsArticle2Title: "Partnership with Leading Electronics Manufacturer",
    newsArticle2Excerpt:
      "NANOBUILD partners with major electronics company to develop next-generation conductive materials.",
    newsArticle2Author: "Marketing Team",

    newsArticle3Title: "New Production Facility Opens in Prague",
    newsArticle3Excerpt:
      "Expansion of our manufacturing capabilities with state-of-the-art equipment and increased capacity.",
    newsArticle3Author: "Operations Team",

    newsArticle4Title: "Sustainable Graphene Production Methods",
    newsArticle4Excerpt:
      "Our commitment to environmental responsibility through innovative green production techniques.",
    newsArticle4Author: "Dr. Marie Svobodová",

    // Application Page
    backToApplications: "Back to Applications",
    interestedApplication: "Interested in This Application?",
    interestedText:
      "Contact our technical team to discuss how our graphene dispersions can enhance your specific application.",
    contactTeam: "Contact Our Team",
    downloadTechnicalData: "Download Technical Data",
    applicationNotFound: "Application Not Found",
    backToHome: "Back to Home",

    // Contact Form
    contactTitle: "Get in Touch",
    firstName: "First Name",
    lastName: "Last Name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    consent: "I agree to the processing of personal data",
    sendMessage: "Send Message",
    sending: "Sending...",
    thankYou: "Thank you for your message! We will get back to you soon.",
    errorMessage: "An error occurred while sending your message. Please try again later.",
    fillRequired: "Please fill in all required fields.",
    agreeConsent: "Please agree to the processing of personal data.",
    failedSend: "Failed to send email. Please try again later.",

    // Footer
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "All rights reserved",
    czechRepublic: "Czech Republic",

    // Privacy Policy
    privacyTitle: "Privacy Policy",
    privacyText:
      "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",

    // Common
    type: "Type",
    size: "Size",
    category: "Category",
    author: "Author",
    date: "Date",
    notProvided: "Not provided",
  },

  cs: {
    // Navigation
    home: "Domů",
    products: "Produkty",
    downloads: "Stažení",
    news: "Novinky",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Inovativní grafenové disperze",
    heroSubtitle: "Vedeme budoucnost nanotechnologií s nejmodernějšími grafenovými řešeními",
    learnMore: "Zjistit více",

    // About Section
    aboutTitle: "O společnosti NANOBUILD",
    aboutText:
      "NANOBUILD je průkopnický startup zaměřený na inovativní výrobu grafenových disperzí. Jsme v čele nanotechnologií a vyvíjíme revoluční řešení, která transformují průmysl.",
    innovation: "Inovace",
    innovationText: "Špičkový výzkum a vývoj v oblasti grafenových technologií",
    performance: "Výkon",
    performanceText: "Vysoce kvalitní disperze s výjimečnými vlastnostmi",
    reliability: "Spolehlivost",
    reliabilityText: "Konzistentní kvalita a osvědčená řešení pro průmysl",

    // Technology Section
    technologyTitle: "Technologie výroby nízkopočetného grafenu",
    technologySubtitle:
      "Naše disperze nízkopočetného grafenu jsou získávány patentovanou metodou, která zahrnuje disperzi grafitu při rezonančních frekvencích.",
    technologyIntro1:
      "Rezonance je fyzikální jev, při kterém systém začíná oscilovat s maximální amplitudou v reakci na vnější sílu s určitou frekvencí, která odpovídá jeho vlastní (přirozené) frekvenci. V kontextu výroby disperzí nízkopočetného grafenu pomocí akustické rezonance to znamená následující:",
    technologyIntro2:
      "Akustická rezonance generuje silné vibrační vlny v disperzním médiu (jako je voda s rozpuštěnými složkami). Tyto vibrace jsou účinně přenášeny na částice grafitu, což způsobuje intenzivní mechanické namáhání. V důsledku toho se grafit rozpadá na samostatné tenké vrstvy, čímž vzniká nízkopočetný grafen bez významného poškození.",
    technologyIntro3:
      "Tuto metodu výroby grafenu jsme zvolili na základě teoretických předpokladů týkajících se rozdílů ve vlastnostech mezi elementárním a nízkopočetným grafenem, s preferencí neelementárního grafenu.",

    // Advantages Section
    advantagesTitle: "1. Výhody nízkopočetného grafenu ve srovnání s elementárním grafenem",
    structuralStability: "Strukturální stabilita",
    structuralStabilityText:
      "Elementární (jednovrstvý) grafen je extrémně citlivý na mechanické namáhání a je náchylný k poškození. Náš nízkopočetný grafen, skládající se z 3-20 vrstev grafenových listů, má mnohem větší mechanickou pevnost a odolnost vůči poškození díky mezivrstevným van der Waalsovým interakcím. To činí náš nízkopočetný grafen vhodnějším pro kompozitní materiály a materiály pro baterie, kde je rozhodující odolnost a odolnost vůči namáhání.",
    improvedConductivity: "Zlepšená vodivost",
    improvedConductivityText:
      "Elementární grafen vykazuje nejvyšší teoretickou vodivost, ale v praxi se tato charakteristika zhoršuje v důsledku defektů a kontaminace nečistotami. Náš nízkopočetný grafen si zachovává vysokou vodivost, ale je méně náchylný k degradaci při kontaktu s polymery a iontově vodivými matricemi. Baterie a superkondenzátory obsahující nízkopočetný grafen zajišťují stabilní provoz při cyklickém zatížení.",
    betterDispersibility: "Lepší disperzibilita",
    betterDispersibilityText:
      "Elementární grafen má tendenci se shlukovat kvůli své vysoké specifické povrchové ploše a silným π-π interakcím. Náš nízkopočetný grafen má optimální rovnováhu mezi specifickou povrchovou plochou a mezivrstevnými silami, což zlepšuje jeho disperzibilitu, zejména ve složitých směsích. To zjednodušuje proces integrace polymerů, cementů a dalších kompozitních systémů.",

    // Dispersion Media Effects
    dispersionTitle: "2. Účinek disperzních médií obsahujících nízkopočetný grafen",
    synergisticEffect: "Synergický efekt s matricí",
    synergisticEffectText:
      'Použití disperzních médií, která obsahují složky budoucího kompozitu (jako jsou iontové soli pro baterie nebo polymery pro vlákna), vytváří přímou chemickou kompatibilitu. Náš nízkopočetný grafen může být "zabudován" do struktury matrice na molekulární úrovni bez dodatečného zpracování.',
    reducingPostProcessing: "Snížení následného zpracování",
    reducingPostProcessingText:
      "Pokud je nízkopočetný grafen již v kompatibilním prostředí, není třeba odstraňovat rozpouštědla a poté jej znovu dispergovat. Jeho použití šetří čas, snižuje výrobní náklady a minimalizuje riziko agregace grafenových částic.",

    // Acoustic Resonance Method
    acousticTitle: "3. Role metody akustické rezonance při disperzi",
    minimizationDefects: "Minimalizace defektů",
    minimizationDefectsText:
      "Akustická rezonance (ultrazvuková výroba grafenu při rezonančních frekvencích) umožňuje jemné oddělení grafitu na nízkopočetné fragmenty bez poškození struktury uhlíkové mřížky. Výsledkem je vytvoření vysoce kvalitního grafenu s minimálními strukturálními defekty, což je rozhodující pro zajištění vodivosti a mechanické pevnosti.",
    highHomogeneity: "Vysoká homogenita",
    highHomogeneityText:
      "Metoda akustické rezonance pomáhá dosáhnout úzké distribuce počtu vrstev grafenových listů (např. 3-10), což je důležité pro kontrolované vlastnosti materiálu. V bateriích a kompozitech to zajišťuje rovnoměrnější distribuci proudů a mechanického namáhání.",
    controlMorphology: "Kontrola nad morfologií",
    controlMorphologyText:
      "Naše metoda akustické rezonance pro výrobu grafenu může být řízena tak, aby bylo dosaženo různých velikostí a tvarů grafenových listů. To umožňuje optimalizaci výroby grafenu pro konkrétní úkoly – ať už jde o flexibilní vodiče nebo pevné katody baterií.",

    // Future Vision
    futureTitle: "Nanomateriály - Technologie, která mění budoucnost",
    futureText1:
      "Naše produkty, které vyrábíme a do nichž vkládáme naše nápady, mají praktický význam nejen ve formě grafenových disperzí a pojiv, ale také při řešení moderních problémů zaměřených na technologický pokrok, zejména v oblasti alternativních a obnovitelných zdrojů energie. Neustále vyvíjíme nápady a technická řešení v ekologicky šetrných oblastech. Představujeme novou éru nano-inovací, které posouvají hranice technologických možností. Spojení molekul na atomární úrovni je klíčem k udržitelnosti a efektivitě našich řešení.",
    futureText2:
      "Vstupte do světa, kde krystalické struktury grafenu a dalších nanomateriálů tvoří základ moderních struktur. Naše výzkumné a vývojové týmy neustále pracují na zlepšování struktur, které podporují vyšší výkon a nižší spotřebu, což umožňuje výrobu lehčích a odolnějších materiálů pro průmysl, vědu a domácí použití. Naše technologie jsou výsledkem mnohaletých zkušeností a výzkumu. Věříme v budoucnost, kde nano-inovace změní svět k lepšímu. Posouváme hranice možného a pokládáme základy pro další generaci nanotechnologií. Silné a odolné materiály jsou nyní k dispozici pro širokou škálu aplikací.",
    contactResearch: "Kontaktujte náš výzkumný tým",

    // Products Section
    productsTitle: "Naše produkty",
    productsText: "Objevte naši řadu vysoce kvalitních grafenových disperzí navržených pro různé průmyslové aplikace.",
    downloadTechnical: "Stáhnout technický list",
    viewAllProducts: "Zobrazit všechny produkty",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Disperze nízkopočetného grafenu v průmyslovém oleji",
    product2DDOLDesc:
      "Navrženo pro modifikaci organických a organosilikátových sloučenin, zlepšuje tepelnou a elektrickou vodivost.",
    product2DDOLSpec1: "3 hm.% koncentrace grafenu",
    product2DDOLSpec2: "Velikost částic 10-30 μm",
    product2DDOLSpec3: "≥98% obsah uhlíku",

    product2D2R: "2D-2R",
    product2D2RTitle: "Materiál pro povrchovou úpravu",
    product2D2RDesc:
      "Materiál pro ochranu před elektromagnetickým zářením absorbující až 98% záření při tloušťce 2-3mm.",
    product2D2RSpec1: "Provozní teplota až 8000°C",
    product2D2RSpec2: "Frekvenční rozsah 3-110 GHz",
    product2D2RSpec3: "Trvanlivost až 24 měsíců",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Vodno-polymerní disperze",
    product2DDWPEDesc: "Zlepšuje elektrickou vodivost minerálních vláken a zlepšuje antikorozní vlastnosti.",
    product2DDWPESpec1: "2 hm.% koncentrace grafenu",
    product2DDWPESpec2: "Vodorozpustné polymerní médium",
    product2DDWPESpec3: "Vysoká adheze k vláknům",

    product2DDW: "2DD-W",
    product2DDWTitle: "Vodná disperze",
    product2DDWDesc:
      "Působí jako aktivátor pevnosti matrice pro absorpci elektromagnetických vln a strukturální aplikace.",
    product2DDWSpec1: "4 hm.% koncentrace grafenu",
    product2DDWSpec2: "Vodné médium",
    product2DDWSpec3: "K dispozici až 7,2% koncentrace",

    // Applications Section
    applicationsTitle: "Aplikace",
    applicationsText: "Naše grafenové disperze umožňují průlomová řešení napříč mnoha průmyslovými odvětvími.",
    discussApplication: "Diskutujte o vaší aplikaci",

    // Application Names
    appConcrete: "Beton, malty, stavební směsi",
    appPlastics: "Plasty, polymery, barvy, ochranné povlaky",
    appMetallurgy: "Práškové metalurgie a metalurgie lehkých a neželezných slitin",
    appEnergy: "Energeticky úsporné technologie a nové způsoby výroby elektřiny",
    appEnvironment: "Ochrana životního prostředí",
    appComposite: "Kompozitní materiály",
    appRubber: "Opotřebení odolná guma a další elastomery",
    appLubricants: "Maziva, technické kapaliny",

    // Application Content
    appConcreteSubtitle: "Grafen ve stavebnictví",
    appConcreteContent1: "Zvyšuje pevnost betonu – snižuje tvorbu mikrotrhlin, zlepšuje flexibilitu a trvanlivost.",
    appConcreteContent2: "Snižuje uhlíkovou stopu – umožňuje snížení obsahu cementu, čímž snižuje emise CO₂.",
    appConcreteContent3: "Urychluje tvrdnutí – zlepšuje proces hydratace a urychluje vývoj pevnosti.",
    appConcreteContent4: "Zlepšuje odolnost vůči vodě a chemikáliím – zvyšuje životnost stavebních materiálů.",
    appConcreteContent5: "Zlepšuje tepelnou vodivost – umožňuje lepší regulaci teploty v budovách.",
    appConcreteContent6: "Podporuje udržitelnost – pomáhá při recyklaci betonu a snižuje potřebu nových surovin.",

    appPlasticsSubtitle: "Povlaky s grafenem",
    appPlasticsContent1:
      "Na základě naší tenkovrstvé grafenové disperze získané za speciálních rezonančních podmínek jsme vyvinuli dosud nejúčinnější stínicí povlak schopný absorbovat elektromagnetické vlny v širokém rozsahu.",
    appPlasticsContent2:
      "V rozsahu 1,5 až 120 GHz povlak absorbuje až 99% elektromagnetických vln. Ztrátový tangens (tan δ) překračuje 90% téměř na všech frekvencích.",
    appPlasticsContent3:
      "Povlak je odolný vůči vodě, olejům, uhlovodíkům a organosilikátovým kapalinám a nachází komerční uplatnění především v obranném a bezpečnostním průmyslu, letectví a kosmonautice, navržený k minimalizaci detekce radarem, infračerveným nebo jinými senzory.",

    appMetallurgySubtitle: "Metalurgie",
    appMetallurgyContent1: "Vysoká vodivost – umožňuje rychlejší přenos signálu v mikroelektronice.",
    appMetallurgyContent2: "Extrémní citlivost – zlepšuje výkon fotodetektorů v širokém spektru vlnových délek.",
    appMetallurgyContent3: "Průhlednost a flexibilita – ideální pro optoelektronické displeje a senzory.",
    appMetallurgyContent4: "Rychlá odezva – umožňuje efektivnější optické spínače a fotodetektory.",
    appMetallurgyContent5: "Nízká spotřeba energie – snižuje energetické nároky mikroelektronických zařízení.",
    appMetallurgyContent6: "Miniaturizace komponentů – umožňuje vývoj menších a výkonnějších čipů a tranzistorů.",

    appEnergySubtitle: "Technologie",
    appEnergyContent1: "Extrémní citlivost – Detekce látek na molekulární úrovni.",
    appEnergyContent2: "Rychlá odezva – Okamžitá detekce změn prostředí.",
    appEnergyContent3: "Nízká spotřeba energie – Efektivní provoz s minimální spotřebou energie.",
    appEnergyContent4: "Flexibilita – Může být integrována do nositelných a flexibilních zařízení.",
    appEnergyContent5: "Odolnost vůči rušení – Vysoká selektivita a stabilita měření.",
    appEnergyContent6: "Široký rozsah aplikací – Používá se v medicíně, ekologii a průmyslu.",

    appEnvironmentSubtitle: "Prostředí",
    appEnvironmentContent1: "Eliminace bakterií – Grafen narušuje buněčné stěny mikroorganismů.",
    appEnvironmentContent2: "Dlouhodobá účinnost – Trvalá ochrana bez nutnosti častého dezinfikování.",
    appEnvironmentContent3: "Bez chemikálií – Antibakteriální účinek bez použití toxických látek.",
    appEnvironmentContent4: "Široké aplikace – Používá se v medicíně, potravinářském průmyslu a veřejných prostorech.",
    appEnvironmentContent5: "Trvanlivost – Povrchy pokryté grafenem mají dlouhou životnost.",
    appEnvironmentContent6: "Bezpečnost pro člověka – Netoxické a biokompatibilní materiály.",

    appCompositeSubtitle: "Kompozity",
    appCompositeContent1: "Pokročilé technologie – Inovativní materiály pro vysokou účinnost.",
    appCompositeContent2: "Široké aplikace – Používá se v chemickém, potravinářském a farmaceutickém průmyslu.",
    appCompositeContent3: "Environmentální přínosy – Zlepšování kvality vody a vzduchu.",
    appCompositeContent4: "Vysoká čistota – Zajištění kvality konečných produktů.",
    appCompositeContent5: "Flexibilní řešení – Přizpůsobení velikosti pórů a materiálů.",
    appCompositeContent6: "Úspory nákladů – Snížení provozních a energetických nákladů.",

    appRubberSubtitle: "Opotřebení odolné elastomery",
    appRubberContent1: "Vysoká trvanlivost – Odolnost vůči opotřebení a oděru pro dlouhodobý výkon.",
    appRubberContent2: "Elastické vlastnosti – Vynikající flexibilita a schopnost návratu do původního tvaru.",
    appRubberContent3: "Široké uplatnění – Používá se v automobilovém, těžkém průmyslu a stavebnictví.",
    appRubberContent4: "Teplotní stabilita – Odolnost vůči extrémním teplotám a vlivům prostředí.",
    appRubberContent5: "Chemická odolnost – Ochrana proti agresivním chemikáliím a olejům.",
    appRubberContent6: "Ekonomické přínosy – Snížení nákladů na údržbu a prodloužení životnosti zařízení.",

    appLubricantsSubtitle: "Maziva a kapaliny",
    appLubricantsContent1: "Optimalizace výkonu – Zajištění hladkého chodu strojů a zařízení.",
    appLubricantsContent2: "Snížení tření – Minimalizace opotřebení a zlepšení účinnosti.",
    appLubricantsContent3: "Široké uplatnění – Používá se v automobilovém, leteckém a průmyslovém sektoru.",
    appLubricantsContent4: "Teplotní odolnost – Stabilita při extrémních teplotách a různých pracovních podmínkách.",
    appLubricantsContent5: "Ochrana proti korozi – Prevence tvorby rzi a prodloužení životnosti komponentů.",
    appLubricantsContent6: "Úspory nákladů – Snížení nákladů na údržbu a prodloužení intervalů výměny.",

    // Products Page
    productsPageTitle: "Produkty",
    productsPageText:
      "Objevte naši komplexní řadu produktů na bázi grafenu navržených pro špičkové aplikace napříč různými průmyslovými odvětvími.",
    keyFeatures: "Klíčové vlastnosti:",
    learnMoreProduct: "Zjistit více",

    // Downloads Page
    downloadsTitle: "Stažení",
    downloadsText:
      "Přístup k naší komplexní knihovně technických dokumentů, produktových katalogů a vzdělávacích materiálů.",
    download: "Stáhnout",
    needAdditional: "Potřebujete další informace?",
    cantFind:
      "Nemůžete najít, co hledáte? Kontaktujte náš technický tým pro vlastní dokumentaci nebo specifické informace o produktu.",
    contactTechnical: "Kontaktujte technickou podporu",

    // Download Items
    download2DDOL: "2DD-OL - Disperze nízkopočetného grafenu v průmyslovém oleji",
    download2DDOLDesc:
      "Technický list pro grafenovou disperzi v průmyslovém oleji pro kompozitní materiály a práškovou metalurgii",
    download2D2R: "2D-2R - Materiál pro povrchovou úpravu",
    download2D2RDesc: "Materiál pro ochranu před elektromagnetickým zářením pracující při teplotách až 8000°C",
    download2DDWPE: "2DD-WPE - Vodno-polymerní disperze nízkopočetného grafenu",
    download2DDWPEDesc:
      "Vodná disperze pro zlepšení elektrické vodivosti a antikorozních vlastností minerálních vláken",
    download2DDW: "2DD-W - Vodná disperze nízkopočetného grafenu",
    download2DDWDesc: "Vodná grafenová suspenze pro absorpci elektromagnetických vln a strukturální aplikace",

    // News Page
    newsTitle: "Novinky",
    newsText: "Zůstaňte informováni o nejnovějším vývoji, výzkumných průlomech a novinkách společnosti NANOBUILD.",
    featuredArticle: "Hlavní článek",
    readMore: "Číst více",
    stayUpdated: "Zůstaňte informováni",
    subscribeText:
      "Přihlaste se k odběru našeho newsletteru a dostávejte nejnovější zprávy a aktualizace přímo do vaší schránky.",
    subscribeNewsletter: "Přihlásit se k odběru newsletteru",
    all: "Vše",
    research: "Výzkum",
    business: "Obchod",
    company: "Společnost",
    sustainability: "Udržitelnost",

    // News Articles
    newsArticle1Title: "NANOBUILD oznamuje průlom v technologii grafenových disperzí",
    newsArticle1Excerpt: "Náš nejnovější výzkum vedl k významnému zlepšení stability a výkonu grafenových disperzí.",
    newsArticle1Author: "Dr. Pavel Novák",

    newsArticle2Title: "Partnerství s předním výrobcem elektroniky",
    newsArticle2Excerpt:
      "NANOBUILD se spojuje s významnou elektronickou společností pro vývoj vodivých materiálů nové generace.",
    newsArticle2Author: "Marketingový tým",

    newsArticle3Title: "Nový výrobní závod otevřen v Praze",
    newsArticle3Excerpt: "Rozšíření našich výrobních kapacit s nejmodernějším vybavením a zvýšenou kapacitou.",
    newsArticle3Author: "Provozní tým",

    newsArticle4Title: "Udržitelné metody výroby grafenu",
    newsArticle4Excerpt:
      "Náš závazek k environmentální odpovědnosti prostřednictvím inovativních zelených výrobních technik.",
    newsArticle4Author: "Dr. Marie Svobodová",

    // Application Page
    backToApplications: "Zpět na aplikace",
    interestedApplication: "Máte zájem o tuto aplikaci?",
    interestedText:
      "Kontaktujte náš technický tým a diskutujte o tom, jak naše grafenové disperze mohou vylepšit vaši specifickou aplikaci.",
    contactTeam: "Kontaktujte náš tým",
    downloadTechnicalData: "Stáhnout technická data",
    applicationNotFound: "Aplikace nenalezena",
    backToHome: "Zpět na domovskou stránku",

    // Contact Form
    contactTitle: "Kontaktujte nás",
    firstName: "Jméno",
    lastName: "Příjmení",
    phone: "Telefon",
    email: "Email",
    message: "Zpráva",
    consent: "Souhlasím se zpracováním osobních údajů",
    sendMessage: "Odeslat zprávu",
    sending: "Odesílání...",
    thankYou: "Děkujeme za vaši zprávu! Brzy se vám ozveme.",
    errorMessage: "Při odesílání vaší zprávy došlo k chybě. Zkuste to prosím znovu později.",
    fillRequired: "Vyplňte prosím všechna povinná pole.",
    agreeConsent: "Prosím, souhlaste se zpracováním osobních údajů.",
    failedSend: "Odeslání emailu se nezdařilo. Zkuste to prosím znovu později.",

    // Footer
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Všechna práva vyhrazena",
    czechRepublic: "Česká republika",

    // Privacy Policy
    privacyTitle: "Zásady ochrany osobních údajů",
    privacyText:
      "Vaše soukromí je pro nás důležité. Tyto zásady vysvětlují, jak shromažďujeme, používáme a chráníme vaše informace.",

    // Common
    type: "Typ",
    size: "Velikost",
    category: "Kategorie",
    author: "Autor",
    date: "Datum",
    notProvided: "Neuvedeno",
  },

  de: {
    // Navigation
    home: "Startseite",
    products: "Produkte",
    downloads: "Downloads",
    news: "Nachrichten",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Innovative Graphen-Dispersionen",
    heroSubtitle: "Die Zukunft der Nanotechnologie mit modernsten Graphen-Lösungen anführen",
    learnMore: "Mehr erfahren",

    // About Section
    aboutTitle: "Über NANOBUILD",
    aboutText:
      "NANOBUILD ist ein wegweisendes Startup, das sich auf die innovative Herstellung von Graphen-Dispersionen konzentriert. Wir sind an der Spitze der Nanotechnologie und entwickeln revolutionäre Lösungen, die Industrien transformieren.",
    innovation: "Innovation",
    innovationText: "Bahnbrechende Forschung und Entwicklung in der Graphen-Technologie",
    performance: "Leistung",
    performanceText: "Hochwertige Dispersionen mit außergewöhnlichen Eigenschaften",
    reliability: "Zuverlässigkeit",
    reliabilityText: "Gleichbleibende Qualität und bewährte Lösungen für die Industrie",

    // Technology Section
    technologyTitle: "Technologie der Produktion von Mehrschicht-Graphen",
    technologySubtitle:
      "Unsere Mehrschicht-Graphen-Dispersionen werden durch ein patentiertes Verfahren gewonnen, das die Dispersion von Graphit bei Resonanzfrequenzen beinhaltet.",
    technologyIntro1:
      "Resonanz ist ein physikalisches Phänomen, bei dem ein System mit maximaler Amplitude zu schwingen beginnt, als Reaktion auf eine äußere Kraft mit einer bestimmten Frequenz, die seiner eigenen (natürlichen) Frequenz entspricht. Im Kontext der Herstellung von Mehrschicht-Graphen-Dispersionen mittels akustischer Resonanz bedeutet dies Folgendes:",
    technologyIntro2:
      "Akustische Resonanz erzeugt starke Schwingungswellen im Dispersionsmedium (wie Wasser mit gelösten Komponenten). Diese Schwingungen werden effizient auf die Graphitpartikel übertragen, was zu intensiver mechanischer Belastung führt. Infolgedessen zerbricht das Graphit in separate dünne Schichten, wodurch Mehrschicht-Graphen ohne signifikante Schäden entsteht.",
    technologyIntro3:
      "Wir haben diese Methode der Graphenherstellung auf der Grundlage theoretischer Annahmen bezüglich der Unterschiede in den Eigenschaften zwischen elementarem und Mehrschicht-Graphen gewählt, mit einer Präferenz für nicht-elementares Graphen.",

    // Advantages Section
    advantagesTitle: "1. Vorteile von Mehrschicht-Graphen im Vergleich zu elementarem Graphen",
    structuralStability: "Strukturelle Stabilität",
    structuralStabilityText:
      "Elementares (einschichtiges) Graphen ist äußerst empfindlich gegenüber mechanischer Belastung und anfällig für Beschädigungen. Unser Mehrschicht-Graphen, bestehend aus 3-20 Schichten von Graphenblättern, hat eine viel größere mechanische Festigkeit und Widerstandsfähigkeit gegen Beschädigungen aufgrund von Van-der-Waals-Wechselwirkungen zwischen den Schichten. Dies macht unser Mehrschicht-Graphen besser geeignet für Verbundwerkstoffe und Batteriematerialien, bei denen Haltbarkeit und Belastbarkeit entscheidend sind.",
    improvedConductivity: "Verbesserte Leitfähigkeit",
    improvedConductivityText:
      "Elementares Graphen weist die höchste theoretische Leitfähigkeit auf, aber in der Praxis verschlechtert sich diese Eigenschaft aufgrund von Defekten und Verunreinigungen. Unser Mehrschicht-Graphen behält eine hohe Leitfähigkeit bei, ist aber weniger anfällig für Degradation bei Kontakt mit Polymeren und ionisch leitenden Matrizen. Batterien und Superkondensatoren, die Mehrschicht-Graphen enthalten, gewährleisten einen stabilen Betrieb unter zyklischer Belastung.",
    betterDispersibility: "Bessere Dispergierbarkeit",
    betterDispersibilityText:
      "Elementares Graphen neigt aufgrund seiner hohen spezifischen Oberfläche und starken π-π-Wechselwirkungen zur Aggregation. Unser Mehrschicht-Graphen hat ein optimales Gleichgewicht zwischen spezifischer Oberfläche und Zwischenschichtkräften, was seine Dispergierbarkeit verbessert, insbesondere in komplexen Mischungen. Dies vereinfacht den Prozess der Integration von Polymeren, Zementen und anderen Verbundsystemen.",

    // Dispersion Media Effects
    dispersionTitle: "2. Wirkung von Dispersionsmedien mit Mehrschicht-Graphen",
    synergisticEffect: "Synergistischer Effekt mit der Matrix",
    synergisticEffectText:
      'Die Verwendung von Dispersionsmedien, die Komponenten des zukünftigen Verbundwerkstoffs enthalten (wie ionische Salze für Batterien oder Polymere für Fasern), schafft direkte chemische Kompatibilität. Unser Mehrschicht-Graphen kann ohne zusätzliche Verarbeitung auf molekularer Ebene in die Matrixstruktur "eingebettet" werden.',
    reducingPostProcessing: "Reduzierung der Nachbearbeitung",
    reducingPostProcessingText:
      "Wenn sich Mehrschicht-Graphen bereits in einer kompatiblen Umgebung befindet, ist es nicht notwendig, Lösungsmittel zu entfernen und es dann erneut zu dispergieren. Seine Verwendung spart Zeit, reduziert Produktionskosten und minimiert das Risiko der Aggregation von Graphenpartikeln.",

    // Acoustic Resonance Method
    acousticTitle: "3. Rolle der akustischen Resonanzmethode bei der Dispersion",
    minimizationDefects: "Minimierung von Defekten",
    minimizationDefectsText:
      "Akustische Resonanz (Ultraschall-Graphenproduktion bei Resonanzfrequenzen) ermöglicht die sanfte Trennung von Graphit in Mehrschicht-Fragmente ohne Beschädigung der Kohlenstoffgitterstruktur. Dies führt zur Erzeugung von hochwertigem Graphen mit minimalen strukturellen Defekten, was für die Gewährleistung von Leitfähigkeit und mechanischer Festigkeit entscheidend ist.",
    highHomogeneity: "Hohe Homogenität",
    highHomogeneityText:
      "Die akustische Resonanzmethode hilft, eine enge Verteilung der Anzahl der Graphenblattsschichten (z.B. 3-10) zu erreichen, was für kontrollierte Materialeigenschaften wichtig ist. In Batterien und Verbundwerkstoffen sorgt dies für eine gleichmäßigere Verteilung von Strömen und mechanischer Belastung.",
    controlMorphology: "Kontrolle über die Morphologie",
    controlMorphologyText:
      "Unsere akustische Resonanzmethode zur Herstellung von Graphen kann gesteuert werden, um verschiedene Größen und Formen von Graphenblättern zu erreichen. Dies ermöglicht die Optimierung der Graphenproduktion für spezifische Aufgaben – sei es für flexible Leiter oder feste Batteriekathoden.",

    // Future Vision
    futureTitle: "Nanomaterialien - Technologie, die die Zukunft verändert",
    futureText1:
      "Unsere Produkte, die wir herstellen und in die wir unsere Ideen einbringen, haben praktische Bedeutung nicht nur in Form von Graphen-Dispersionen und Bindemitteln, sondern auch bei der Lösung moderner Probleme, die auf technologischen Fortschritt abzielen, insbesondere in den Bereichen alternative und erneuerbare Energiequellen. Wir entwickeln ständig Ideen und technische Lösungen in umweltfreundlichen Bereichen. Wir präsentieren eine neue Ära von Nano-Innovationen, die die Grenzen technologischer Möglichkeiten verschieben. Die Verbindung von Molekülen auf atomarer Ebene ist der Schlüssel zu Nachhaltigkeit und Effizienz in unseren Lösungen.",
    futureText2:
      "Treten Sie ein in eine Welt, in der die kristallinen Strukturen von Graphen und anderen Nanomaterialien die Grundlage moderner Strukturen bilden. Unsere Forschungs- und Entwicklungsteams arbeiten ständig daran, Strukturen zu verbessern, die höhere Leistung und niedrigeren Verbrauch unterstützen und die Herstellung leichterer und haltbarerer Materialien für Industrie, Wissenschaft und Hausgebrauch ermöglichen. Unsere Technologien sind das Ergebnis jahrelanger Erfahrung und Forschung. Wir glauben an eine Zukunft, in der Nano-Innovationen die Welt zum Besseren verändern werden. Wir verschieben die Grenzen des Möglichen und legen den Grundstein für die nächste Generation von Nanotechnologien. Starke und dauerhafte Materialien sind jetzt für eine breite Palette von Anwendungen verfügbar.",
    contactResearch: "Kontaktieren Sie unser Forschungsteam",

    // Products Section
    productsTitle: "Unsere Produkte",
    productsText:
      "Entdecken Sie unsere Palette hochwertiger Graphen-Dispersionen für verschiedene industrielle Anwendungen.",
    downloadTechnical: "Technisches Datenblatt herunterladen",
    viewAllProducts: "Alle Produkte anzeigen",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Dispersion von Mehrschicht-Graphen in Industrieöl",
    product2DDOLDesc:
      "Entwickelt für die Modifikation organischer und organosiliziumhaltiger Verbindungen, verbessert die thermische und elektrische Leitfähigkeit.",
    product2DDOLSpec1: "3 Gew.-% Graphenkonzentration",
    product2DDOLSpec2: "Partikelgröße 10-30 μm",
    product2DDOLSpec3: "≥98% Kohlenstoffgehalt",

    product2D2R: "2D-2R",
    product2D2RTitle: "Oberflächenbehandlungsmaterial",
    product2D2RDesc:
      "Elektromagnetisches Strahlenschutzmaterial, das bis zu 98% der Strahlung bei 2-3mm Dicke absorbiert.",
    product2D2RSpec1: "Betriebstemperatur bis 8000°C",
    product2D2RSpec2: "Frequenzbereich 3-110 GHz",
    product2D2RSpec3: "Haltbarkeit bis zu 24 Monate",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Wasser-Polymer-Dispersion",
    product2DDWPEDesc:
      "Verbessert die elektrische Leitfähigkeit von Mineralfasern und verbessert Antikorrosionseigenschaften.",
    product2DDWPESpec1: "2 Gew.-% Graphenkonzentration",
    product2DDWPESpec2: "Wasserlösliches Polymermedium",
    product2DDWPESpec3: "Hohe Adhäsion an Fasern",

    product2DDW: "2DD-W",
    product2DDWTitle: "Wässrige Dispersion",
    product2DDWDesc:
      "Wirkt als Matrixfestigkeitsaktivator für elektromagnetische Wellenabsorption und strukturelle Anwendungen.",
    product2DDWSpec1: "4 Gew.-% Graphenkonzentration",
    product2DDWSpec2: "Wasserbasiertes Medium",
    product2DDWSpec3: "Bis zu 7,2% Konzentration verfügbar",

    // Applications Section
    applicationsTitle: "Anwendungen",
    applicationsText: "Unsere Graphen-Dispersionen ermöglichen bahnbrechende Lösungen in zahlreichen Industriezweigen.",
    discussApplication: "Diskutieren Sie Ihre Anwendung",

    // Application Names
    appConcrete: "Beton, Mörtel, Baumischungen",
    appPlastics: "Kunststoffe, Polymere, Farben, Schutzbeschichtungen",
    appMetallurgy: "Pulvermetallurgie und Metallurgie von Leicht- und Nichteisenlegierungen",
    appEnergy: "Energiesparende Technologien und neue Wege der Stromerzeugung",
    appEnvironment: "Umweltschutz",
    appComposite: "Verbundwerkstoffe",
    appRubber: "Verschleißfester Gummi und andere Elastomere",
    appLubricants: "Schmierstoffe, technische Flüssigkeiten",

    // Application Content
    appConcreteSubtitle: "Graphen im Bauwesen",
    appConcreteContent1:
      "Erhöht die Betonfestigkeit – reduziert Mikrorissbildung, verbessert Flexibilität und Haltbarkeit.",
    appConcreteContent2:
      "Reduziert den CO₂-Fußabdruck – ermöglicht eine Reduzierung des Zementgehalts und verringert CO₂-Emissionen.",
    appConcreteContent3:
      "Beschleunigt die Aushärtung – verbessert den Hydratationsprozess und beschleunigt die Festigkeitsentwicklung.",
    appConcreteContent4:
      "Verbessert die Wasser- und Chemikalienbeständigkeit – erhöht die Langlebigkeit von Baumaterialien.",
    appConcreteContent5: "Verbessert die Wärmeleitfähigkeit – ermöglicht bessere Temperaturregulierung in Gebäuden.",
    appConcreteContent6:
      "Unterstützt Nachhaltigkeit – hilft beim Betonrecycling und reduziert den Bedarf an neuen Rohstoffen.",

    appPlasticsSubtitle: "Beschichtungen mit Graphen",
    appPlasticsContent1:
      "Basierend auf unserer Dünnschicht-Graphen-Dispersion, die unter speziellen Resonanzbedingungen gewonnen wird, haben wir die bisher effektivste Abschirmbeschichtung entwickelt, die elektromagnetische Wellen über einen weiten Bereich absorbieren kann.",
    appPlasticsContent2:
      "Im Bereich von 1,5 bis 120 GHz absorbiert die Beschichtung bis zu 99% der elektromagnetischen Wellen. Der Verlustfaktor (tan δ) übersteigt 90% bei fast allen Frequenzen.",
    appPlasticsContent3:
      "Die Beschichtung ist beständig gegen Wasser, Öle, Kohlenwasserstoffe und organosiliziumhaltige Flüssigkeiten und findet kommerzielle Anwendungen hauptsächlich in der Verteidigungs- und Sicherheitsindustrie, Luft- und Raumfahrt sowie Luftfahrt, entwickelt zur Minimierung der Erkennung durch Radar, Infrarot oder andere Sensoren.",

    appMetallurgySubtitle: "Metallurgie",
    appMetallurgyContent1: "Hohe Leitfähigkeit – ermöglicht schnellere Signalübertragung in der Mikroelektronik.",
    appMetallurgyContent2:
      "Extreme Empfindlichkeit – verbessert die Leistung von Photodetektoren über ein breites Wellenlängenspektrum.",
    appMetallurgyContent3: "Transparenz und Flexibilität – ideal für optoelektronische Displays und Sensoren.",
    appMetallurgyContent4: "Schnelle Reaktion – ermöglicht effizientere optische Schalter und Photodetektoren.",
    appMetallurgyContent5: "Niedriger Stromverbrauch – reduziert den Energiebedarf in mikroelektronischen Geräten.",
    appMetallurgyContent6:
      "Miniaturisierung von Komponenten – ermöglicht die Entwicklung kleinerer und leistungsfähigerer Chips und Transistoren.",

    appEnergySubtitle: "Technologie",
    appEnergyContent1: "Extreme Empfindlichkeit – Erkennung von Substanzen auf molekularer Ebene.",
    appEnergyContent2: "Schnelle Reaktion – Sofortige Erkennung von Umweltveränderungen.",
    appEnergyContent3: "Niedriger Energieverbrauch – Effizienter Betrieb mit minimalem Stromverbrauch.",
    appEnergyContent4: "Flexibilität – Kann in tragbare und flexible Geräte integriert werden.",
    appEnergyContent5: "Störungsresistenz – Hohe Selektivität und Messstabilität.",
    appEnergyContent6: "Breites Anwendungsspektrum – Verwendet in Medizin, Ökologie und Industrie.",

    appEnvironmentSubtitle: "Umwelt",
    appEnvironmentContent1: "Bakterienelimination – Graphen stört die Zellwände von Mikroorganismen.",
    appEnvironmentContent2: "Langzeitwirksamkeit – Dauerhafter Schutz ohne häufige Desinfektion.",
    appEnvironmentContent3: "Keine Chemikalien – Antibakterielle Wirkung ohne Verwendung toxischer Substanzen.",
    appEnvironmentContent4: "Breite Anwendungen – Verwendet in Medizin, Lebensmittelindustrie und öffentlichen Räumen.",
    appEnvironmentContent5: "Haltbarkeit – Graphenbeschichtete Oberflächen haben eine lange Lebensdauer.",
    appEnvironmentContent6: "Menschliche Sicherheit – Ungiftige und biokompatible Materialien.",

    appCompositeSubtitle: "Verbundwerkstoffe",
    appCompositeContent1: "Fortschrittliche Technologien – Innovative Materialien für hohe Effizienz.",
    appCompositeContent2: "Breite Anwendungen – Verwendet in der chemischen, Lebensmittel- und Pharmaindustrie.",
    appCompositeContent3: "Umweltvorteile – Verbesserung der Wasser- und Luftqualität.",
    appCompositeContent4: "Hohe Reinheit – Gewährleistung der Qualität von Endprodukten.",
    appCompositeContent5: "Flexible Lösungen – Anpassung von Porengrößen und Materialien.",
    appCompositeContent6: "Kosteneinsparungen – Reduzierung von Betriebs- und Energiekosten.",

    appRubberSubtitle: "Verschleißfeste Elastomere",
    appRubberContent1: "Hohe Haltbarkeit – Widerstand gegen Verschleiß und Abrieb für langanhaltende Leistung.",
    appRubberContent2:
      "Elastische Eigenschaften – Ausgezeichnete Flexibilität und Fähigkeit zur Rückkehr in die ursprüngliche Form.",
    appRubberContent3: "Breite Anwendung – Verwendet in Automobil-, Schwerindustrie und Bauwesen.",
    appRubberContent4: "Temperaturstabilität – Widerstand gegen extreme Temperaturen und Umwelteinflüsse.",
    appRubberContent5: "Chemische Beständigkeit – Schutz gegen aggressive Chemikalien und Öle.",
    appRubberContent6: "Wirtschaftliche Vorteile – Reduzierung der Wartungskosten und verlängerte Gerätelebensdauer.",

    appLubricantsSubtitle: "Schmierstoffe und Flüssigkeiten",
    appLubricantsContent1:
      "Leistungsoptimierung – Gewährleistung des reibungslosen Betriebs von Maschinen und Geräten.",
    appLubricantsContent2: "Reibungsreduzierung – Minimierung von Verschleiß und Verbesserung der Effizienz.",
    appLubricantsContent3:
      "Breite Anwendung – Verwendet in der Automobil-, Luft- und Raumfahrt- sowie Industriebranche.",
    appLubricantsContent4:
      "Temperaturbeständigkeit – Stabilität unter extremen Temperaturen und verschiedenen Arbeitsbedingungen.",
    appLubricantsContent5:
      "Korrosionsschutz – Verhinderung von Rostbildung und Verlängerung der Komponentenlebensdauer.",
    appLubricantsContent6:
      "Kosteneinsparungen – Reduzierung der Wartungskosten und Verlängerung der Austauschintervalle.",

    // Products Page
    productsPageTitle: "Produkte",
    productsPageText:
      "Entdecken Sie unser umfassendes Sortiment an graphenbasierten Produkten für modernste Anwendungen in verschiedenen Industriezweigen.",
    keyFeatures: "Hauptmerkmale:",
    learnMoreProduct: "Mehr erfahren",

    // Downloads Page
    downloadsTitle: "Downloads",
    downloadsText:
      "Zugang zu unserer umfassenden Bibliothek von technischen Dokumenten, Produktkatalogen und Bildungsmaterialien.",
    download: "Herunterladen",
    needAdditional: "Benötigen Sie zusätzliche Informationen?",
    cantFind:
      "Können Sie nicht finden, wonach Sie suchen? Kontaktieren Sie unser technisches Team für maßgeschneiderte Dokumentation oder spezifische Produktinformationen.",
    contactTechnical: "Technischen Support kontaktieren",

    // Download Items
    download2DDOL: "2DD-OL - Dispersion von Mehrschicht-Graphen in Industrieöl",
    download2DDOLDesc:
      "Technisches Datenblatt für Graphen-Dispersion in Industrieöl für Verbundwerkstoffe und Pulvermetallurgie",
    download2D2R: "2D-2R - Oberflächenbehandlungsmaterial",
    download2D2RDesc: "Elektromagnetisches Strahlenschutzmaterial für Temperaturen bis 8000°C",
    download2DDWPE: "2DD-WPE - Wasser-Polymer-Dispersion von Mehrschicht-Graphen",
    download2DDWPEDesc:
      "Wässrige Dispersion zur Verbesserung der elektrischen Leitfähigkeit und Antikorrosionseigenschaften von Mineralfasern",
    download2DDW: "2DD-W - Wässrige Dispersion von Mehrschicht-Graphen",
    download2DDWDesc:
      "Wasserbasierte Graphen-Suspension für elektromagnetische Wellenabsorption und strukturelle Anwendungen",

    // News Page
    newsTitle: "Nachrichten",
    newsText:
      "Bleiben Sie über die neuesten Entwicklungen, Forschungsdurchbrüche und Unternehmensnachrichten von NANOBUILD informiert.",
    featuredArticle: "Hervorgehobener Artikel",
    readMore: "Weiterlesen",
    stayUpdated: "Bleiben Sie auf dem Laufenden",
    subscribeText:
      "Abonnieren Sie unseren Newsletter, um die neuesten Nachrichten und Updates direkt in Ihrem Posteingang zu erhalten.",
    subscribeNewsletter: "Newsletter abonnieren",
    all: "Alle",
    research: "Forschung",
    business: "Geschäft",
    company: "Unternehmen",
    sustainability: "Nachhaltigkeit",

    // News Articles
    newsArticle1Title: "NANOBUILD kündigt Durchbruch in der Graphen-Dispersionstechnologie an",
    newsArticle1Excerpt:
      "Unsere neueste Forschung hat zu einer erheblichen Verbesserung der Stabilität und Leistung von Graphen-Dispersionen geführt.",
    newsArticle1Author: "Dr. Pavel Novák",

    newsArticle2Title: "Partnerschaft mit führendem Elektronikhersteller",
    newsArticle2Excerpt:
      "NANOBUILD arbeitet mit großem Elektronikunternehmen zusammen, um leitfähige Materialien der nächsten Generation zu entwickeln.",
    newsArticle2Author: "Marketing-Team",

    newsArticle3Title: "Neue Produktionsstätte in Prag eröffnet",
    newsArticle3Excerpt: "Erweiterung unserer Fertigungskapazitäten mit modernster Ausrüstung und erhöhter Kapazität.",
    newsArticle3Author: "Betriebsteam",

    newsArticle4Title: "Nachhaltige Graphen-Produktionsmethoden",
    newsArticle4Excerpt: "Unser Engagement für Umweltverantwortung durch innovative grüne Produktionstechniken.",
    newsArticle4Author: "Dr. Marie Svobodová",

    // Application Page
    backToApplications: "Zurück zu Anwendungen",
    interestedApplication: "Interessiert an dieser Anwendung?",
    interestedText:
      "Kontaktieren Sie unser technisches Team, um zu besprechen, wie unsere Graphen-Dispersionen Ihre spezifische Anwendung verbessern können.",
    contactTeam: "Unser Team kontaktieren",
    downloadTechnicalData: "Technische Daten herunterladen",
    applicationNotFound: "Anwendung nicht gefunden",
    backToHome: "Zurück zur Startseite",

    // Contact Form
    contactTitle: "Kontakt aufnehmen",
    firstName: "Vorname",
    lastName: "Nachname",
    phone: "Telefon",
    email: "E-Mail",
    message: "Nachricht",
    consent: "Ich stimme der Verarbeitung personenbezogener Daten zu",
    sendMessage: "Nachricht senden",
    sending: "Senden...",
    thankYou: "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.",
    errorMessage: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    fillRequired: "Bitte füllen Sie alle erforderlichen Felder aus.",
    agreeConsent: "Bitte stimmen Sie der Verarbeitung personenbezogener Daten zu.",
    failedSend: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",

    // Footer
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Alle Rechte vorbehalten",
    czechRepublic: "Tschechische Republik",

    // Privacy Policy
    privacyTitle: "Datenschutzrichtlinie",
    privacyText:
      "Ihre Privatsphäre ist uns wichtig. Diese Richtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen.",

    // Common
    type: "Typ",
    size: "Größe",
    category: "Kategorie",
    author: "Autor",
    date: "Datum",
    notProvided: "Nicht angegeben",
  },

  ru: {
    // Navigation
    home: "Главная",
    products: "Продукты",
    downloads: "Загрузки",
    news: "Новости",
    contact: "Контакты",

    // Hero Section
    heroTitle: "Инновационные графеновые дисперсии",
    heroSubtitle: "Ведем будущее нанотехнологий с передовыми графеновыми решениями",
    learnMore: "Узнать больше",

    // About Section
    aboutTitle: "О компании NANOBUILD",
    aboutText:
      "NANOBUILD - это новаторский стартап, специализирующийся на инновационном производстве графеновых дисперсий. Мы находимся в авангарде нанотехнологий, разрабатывая революционные решения, которые трансформируют отрасли.",
    innovation: "Инновации",
    innovationText: "Передовые исследования и разработки в области графеновых технологий",
    performance: "Производительность",
    performanceText: "Высококачественные дисперсии с исключительными свойствами",
    reliability: "Надежность",
    reliabilityText: "Стабильное качество и проверенные решения для промышленности",

    // Technology Section
    technologyTitle: "Технология производства малослойного графена",
    technologySubtitle:
      "Наши дисперсии малослойного графена получают запатентованным методом, который включает диспергирование графита при резонансных частотах.",
    technologyIntro1:
      "Резонанс - это физическое явление, при котором система начинает колебаться с максимальной амплитудой в ответ на внешнюю силу с определенной частотой, которая соответствует ее собственной (естественной) частоте. В контексте производства дисперсий малослойного графена с использованием акустического резонанса это означает следующее:",
    technologyIntro2:
      "Акустический резонанс генерирует сильные колебательные волны в дисперсионной среде (например, в воде с растворенными компонентами). Эти колебания эффективно передаются частицам графита, вызывая интенсивное механическое напряжение. В результате графит разделяется на отдельные тонкие листы, создавая малослойный графен без значительных повреждений.",
    technologyIntro3:
      "Мы выбрали этот метод производства графена на основе теоретических предположений относительно различий в свойствах между элементарным и малослойным графеном, с предпочтением неэлементарного графена.",

    // Advantages Section
    advantagesTitle: "1. Преимущества малослойного графена по сравнению с элементарным графеном",
    structuralStability: "Структурная стабильность",
    structuralStabilityText:
      "Элементарный (однослойный) графен чрезвычайно чувствителен к механическим нагрузкам и подвержен повреждениям. Наш малослойный графен, состоящий из 3-20 слоев графеновых листов, обладает гораздо большей механической прочностью и устойчивостью к повреждениям благодаря межслойным ван-дер-ваальсовым взаимодействиям. Это делает наш малослойный графен более подходящим для композитных материалов и материалов для батарей, где долговечность и устойчивость к нагрузкам имеют решающее значение.",
    improvedConductivity: "Улучшенная проводимость",
    improvedConductivityText:
      "Элементарный графен демонстрирует наивысшую теоретическую проводимость, но на практике эта характеристика ухудшается из-за дефектов и загрязнения примесями. Наш малослойный графен сохраняет высокую проводимость, но менее подвержен деградации при контакте с полимерами и ионно-проводящими матрицами. Батареи и суперконденсаторы, содержащие малослойный графен, обеспечивают стабильную работу при циклических нагрузках.",
    betterDispersibility: "Лучшая диспергируемость",
    betterDispersibilityText:
      "Элементарный графен имеет тенденцию к агрегации из-за высокой удельной поверхности и сильных π-π взаимодействий. Наш малослойный графен имеет оптимальный баланс между удельной поверхностью и межслойными силами, улучшая его диспергируемость, особенно в сложных смесях. Это упрощает процесс интеграции полимеров, цементов и других композитных систем.",

    // Dispersion Media Effects
    dispersionTitle: "2. Эффект дисперсионных сред, содержащих малослойный графен",
    synergisticEffect: "Синергетический эффект с матрицей",
    synergisticEffectText:
      'Использование дисперсионных сред, содержащих компоненты будущего композита (такие как ионные соли для батарей или полимеры для волокон), создает прямую химическую совместимость. Наш малослойный графен может быть "встроен" в структуру матрицы на молекулярном уровне без дополнительной обработки.',
    reducingPostProcessing: "Сокращение последующей обработки",
    reducingPostProcessingText:
      "Если малослойный графен уже находится в совместимой среде, нет необходимости удалять растворители и затем повторно его диспергировать. Его использование экономит время, снижает производственные затраты и минимизирует риск агрегации графеновых частиц.",

    // Acoustic Resonance Method
    acousticTitle: "3. Роль метода акустического резонанса в диспергировании",
    minimizationDefects: "Минимизация дефектов",
    minimizationDefectsText:
      "Акустический резонанс (ультразвуковое производство графена при резонансных частотах) позволяет мягко разделять графит на малослойные фрагменты без повреждения структуры углеродной решетки. Это приводит к созданию высококачественного графена с минимальными структурными дефектами, что имеет решающее значение для обеспечения проводимости и механической прочности.",
    highHomogeneity: "Высокая однородность",
    highHomogeneityText:
      "Метод акустического резонанса помогает достичь узкого распределения количества слоев графеновых листов (например, 3-10), что важно для контролируемых свойств материала. В батареях и композитах это обеспечивает более равномерное распределение токов и механических напряжений.",
    controlMorphology: "Контроль над морфологией",
    controlMorphologyText:
      "Наш метод акустического резонанса для производства графена может контролироваться для достижения различных размеров и форм графеновых листов. Это позволяет оптимизировать производство графена для конкретных задач – будь то гибкие проводники или твердые катоды батарей.",

    // Future Vision
    futureTitle: "Наноматериалы - Технология, меняющая будущее",
    futureText1:
      "Наши продукты, которые мы производим и в которые вкладываем наши идеи, имеют практическое значение не только в виде графеновых дисперсий и связующих, но и в решении современных проблем, направленных на технологический прогресс, особенно в области альтернативных и возобновляемых источников энергии. Мы постоянно разрабатываем идеи и технические решения в экологически чистых областях. Мы представляем новую эру нано-инноваций, которые раздвигают границы технологических возможностей. Соединение молекул на атомном уровне является ключом к устойчивости и эффективности наших решений.",
    futureText2:
      "Войдите в мир, где кристаллические структуры графена и других наноматериалов формируют основу современных структур. Наши исследовательские и разработческие команды постоянно работают над улучшением структур, которые поддерживают более высокую производительность и меньшее потребление, позволяя производить более легкие и прочные материалы для промышленности, науки и домашнего использования. Наши технологии являются результатом многолетнего опыта и исследований. Мы верим в будущее, где нано-инновации изменят мир к лучшему. Мы раздвигаем границы возможного и закладываем основу для следующего поколения нанотехнологий. Прочные и долговечные материалы теперь доступны для широкого спектра применений.",
    contactResearch: "Связаться с нашей исследовательской командой",

    // Products Section
    productsTitle: "Наши продукты",
    productsText:
      "Откройте для себя наш ассортимент высококачественных графеновых дисперсий, предназначенных для различных промышленных применений.",
    downloadTechnical: "Скачать технический паспорт",
    viewAllProducts: "Посмотреть все продукты",

    // Product Names and Descriptions
    product2DDOL: "2DD-OL",
    product2DDOLTitle: "Дисперсия малослойного графена в промышленном масле",
    product2DDOLDesc:
      "Разработана для модификации органических и органосиликатных соединений, улучшает тепловую и электрическую проводимость.",
    product2DDOLSpec1: "3 мас.% концентрация графена",
    product2DDOLSpec2: "Размер частиц 10-30 мкм",
    product2DDOLSpec3: "≥98% содержание углерода",

    product2D2R: "2D-2R",
    product2D2RTitle: "Материал для поверхностной обработки",
    product2D2RDesc: "Материал защиты от электромагнитного излучения, поглощающий до 98% излучения при толщине 2-3мм.",
    product2D2RSpec1: "Рабочая температура до 8000°C",
    product2D2RSpec2: "Частотный диапазон 3-110 ГГц",
    product2D2RSpec3: "Срок хранения до 24 месяцев",

    product2DDWPE: "2DD-WPE",
    product2DDWPETitle: "Водно-полимерная дисперсия",
    product2DDWPEDesc: "Улучшает электрическую проводимость минеральных волокон и улучшает антикоррозионные свойства.",
    product2DDWPESpec1: "2 мас.% концентрация графена",
    product2DDWPESpec2: "Водорастворимая полимерная среда",
    product2DDWPESpec3: "Высокая адгезия к волокнам",

    product2DDW: "2DD-W",
    product2DDWTitle: "Водная дисперсия",
    product2DDWDesc:
      "Действует как активатор прочности матрицы для поглощения электромагнитных волн и структурных применений.",
    product2DDWSpec1: "4 мас.% концентрация графена",
    product2DDWSpec2: "Водная среда",
    product2DDWSpec3: "Доступна концентрация до 7,2%",

    // Applications Section
    applicationsTitle: "Применения",
    applicationsText: "Наши графеновые дисперсии обеспечивают прорывные решения во многих отраслях промышленности.",
    discussApplication: "Обсудить ваше применение",

    // Application Names
    appConcrete: "Бетон, растворы, строительные смеси",
    appPlastics: "Пластики, полимеры, краски, защитные покрытия",
    appMetallurgy: "Порошковая металлургия и металлургия легких и цветных сплавов",
    appEnergy: "Энергосберегающие технологии и новые способы производства электроэнергии",
    appEnvironment: "Защита окружающей среды",
    appComposite: "Композитные материалы",
    appRubber: "Износостойкая резина и другие эластомеры",
    appLubricants: "Смазочные материалы, технические жидкости",

    // Application Content
    appConcreteSubtitle: "Графен в строительстве",
    appConcreteContent1:
      "Увеличивает прочность бетона – уменьшает образование микротрещин, улучшает гибкость и долговечность.",
    appConcreteContent2: "Снижает углеродный след – позволяет уменьшить содержание цемента, снижая выбросы CO₂.",
    appConcreteContent3: "Ускоряет отверждение – улучшает процесс гидратации и ускоряет развитие прочности.",
    appConcreteContent4:
      "Улучшает устойчивость к воде и химикатам – увеличивает долговечность строительных материалов.",
    appConcreteContent5: "Улучшает теплопроводность – обеспечивает лучшую регулировку температуры в зданиях.",
    appConcreteContent6:
      "Поддерживает устойчивость – помогает в переработке бетона и снижает потребность в новом сырье.",

    appPlasticsSubtitle: "Покрытия с графеном",
    appPlasticsContent1:
      "На основе нашей тонкопленочной графеновой дисперсии, полученной в специальных резонансных условиях, мы разработали наиболее эффективное экранирующее покрытие на сегодняшний день, способное поглощать электромагнитные волны в широком диапазоне.",
    appPlasticsContent2:
      "В диапазоне от 1,5 до 120 ГГц покрытие поглощает до 99% электромагнитных волн. Тангенс потерь (tan δ) превышает 90% почти на всех частотах.",
    appPlasticsContent3:
      "Покрытие устойчиво к воде, маслам, углеводородам и органосиликатным жидкостям и находит коммерческое применение в основном в оборонной и охранной промышленности, аэрокосмической и авиационной отраслях, предназначенное для минимизации обнаружения радаром, инфракрасными или другими датчиками.",

    appMetallurgySubtitle: "Металлургия",
    appMetallurgyContent1: "Высокая проводимость – обеспечивает более быструю передачу сигналов в микроэлектронике.",
    appMetallurgyContent2:
      "Экстремальная чувствительность – улучшает производительность фотодетекторов в широком спектре длин волн.",
    appMetallurgyContent3: "Прозрачность и гибкость – идеально подходит для оптоэлектронных дисплеев и датчиков.",
    appMetallurgyContent4:
      "Быстрый отклик – позволяет создавать более эффективные оптические переключатели и фотодетекторы.",
    appMetallurgyContent5: "Низкое энергопотребление – снижает энергетические требования микроэлектронных устройств.",
    appMetallurgyContent6:
      "Миниатюризация компонентов – позволяет разрабатывать меньшие и более мощные чипы и транзисторы.",

    appEnergySubtitle: "Технология",
    appEnergyContent1: "Экстремальная чувствительность – Обнаружение веществ на молекулярном уровне.",
    appEnergyContent2: "Быстрый отклик – Немедленное обнаружение изменений окружающей среды.",
    appEnergyContent3: "Низкое энергопотребление – Эффективная работа с минимальным потреблением энергии.",
    appEnergyContent4: "Гибкость – Может быть интегрирован в носимые и гибкие устройства.",
    appEnergyContent5: "Устойчивость к помехам – Высокая селективность и стабильность измерений.",
    appEnergyContent6: "Широкий спектр применений – Используется в медицине, экологии и промышленности.",

    appEnvironmentSubtitle: "Окружающая среда",
    appEnvironmentContent1: "Уничтожение бактерий – Графен разрушает клеточные стенки микроорганизмов.",
    appEnvironmentContent2: "Долгосрочная эффективность – Постоянная защита без необходимости частой дезинфекции.",
    appEnvironmentContent3: "Без химикатов – Антибактериальный эффект без использования токсичных веществ.",
    appEnvironmentContent4:
      "Широкие применения – Используется в медицине, пищевой промышленности и общественных местах.",
    appEnvironmentContent5: "Долговечность – Поверхности, покрытые графеном, имеют длительный срок службы.",
    appEnvironmentContent6: "Безопасность для человека – Нетоксичные и биосовместимые материалы.",

    appCompositeSubtitle: "Композиты",
    appCompositeContent1: "Передовые технологии – Инновационные материалы для высокой эффективности.",
    appCompositeContent2: "Широкие применения – Используется в химической, пищевой и фармацевтической промышленности.",
    appCompositeContent3: "Экологические преимущества – Улучшение качества воды и воздуха.",
    appCompositeContent4: "Высокая чистота – Обеспечение качества конечных продуктов.",
    appCompositeContent5: "Гибкие решения – Настройка размеров пор и материалов.",
    appCompositeContent6: "Экономия затрат – Снижение эксплуатационных и энергетических затрат.",

    appRubberSubtitle: "Износостойкие эластомеры",
    appRubberContent1: "Высокая долговечность – Устойчивость к износу и истиранию для длительной работы.",
    appRubberContent2: "Эластичные свойства – Отличная гибкость и способность возвращаться к первоначальной форме.",
    appRubberContent3: "Широкое применение – Используется в автомобильной, тяжелой промышленности и строительстве.",
    appRubberContent4:
      "Температурная стабильность – Устойчивость к экстремальным температурам и воздействию окружающей среды.",
    appRubberContent5: "Химическая стойкость – Защита от агрессивных химикатов и масел.",
    appRubberContent6:
      "Экономические преимущества – Снижение затрат на обслуживание и увеличение срока службы оборудования.",

    appLubricantsSubtitle: "Смазочные материалы и жидкости",
    appLubricantsContent1: "Оптимизация производительности – Обеспечение плавной работы машин и оборудования.",
    appLubricantsContent2: "Снижение трения – Минимизация износа и повышение эффективности.",
    appLubricantsContent3:
      "Широкое применение – Используется в автомобильном, аэрокосмическом и промышленном секторах.",
    appLubricantsContent4:
      "Температурная стойкость – Стабильность при экстремальных температурах и различных рабочих условиях.",
    appLubricantsContent5:
      "Защита от коррозии – Предотвращение образования ржавчины и увеличение срока службы компонентов.",
    appLubricantsContent6: "Экономия затрат – Снижение затрат на обслуживание и увеличение интервалов замены.",

    // Products Page
    productsPageTitle: "Продукты",
    productsPageText:
      "Откройте для себя наш комплексный ассортимент продуктов на основе графена, разработанных для передовых применений в различных отраслях промышленности.",
    keyFeatures: "Ключевые особенности:",
    learnMoreProduct: "Узнать больше",

    // Downloads Page
    downloadsTitle: "Загрузки",
    downloadsText:
      "Доступ к нашей обширной библиотеке технических документов, каталогов продукции и образовательных материалов.",
    download: "Скачать",
    needAdditional: "Нужна дополнительная информация?",
    cantFind:
      "Не можете найти то, что ищете? Свяжитесь с нашей технической командой для получения индивидуальной документации или конкретной информации о продукте.",
    contactTechnical: "Связаться с технической поддержкой",

    // Download Items
    download2DDOL: "2DD-OL - Дисперсия малослойного графена в промышленном масле",
    download2DDOLDesc:
      "Технический паспорт для графеновой дисперсии в промышленном масле для композитных материалов и порошковой металлургии",
    download2D2R: "2D-2R - Материал для поверхностной обработки",
    download2D2RDesc: "Материал защиты от электромагнитного излучения, работающий при температурах до 8000°C",
    download2DDWPE: "2DD-WPE - Водно-полимерная дисперсия малослойного графена",
    download2DDWPEDesc:
      "Водная дисперсия для улучшения электрической проводимости и антикоррозионных свойств минеральных волокон",
    download2DDW: "2DD-W - Водная дисперсия малослойного графена",
    download2DDWDesc: "Водная графеновая суспензия для поглощения электромагнитных волн и структурных применений",

    // News Page
    newsTitle: "Новости",
    newsText: "Будьте в курсе последних разработок, исследовательских прорывов и новостей компании NANOBUILD.",
    featuredArticle: "Избранная статья",
    readMore: "Читать далее",
    stayUpdated: "Оставайтесь в курсе",
    subscribeText:
      "Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления прямо на вашу электронную почту.",
    subscribeNewsletter: "Подписаться на рассылку",
    all: "Все",
    research: "Исследования",
    business: "Бизнес",
    company: "Компания",
    sustainability: "Устойчивость",

    // News Articles
    newsArticle1Title: "NANOBUILD объявляет о прорыве в технологии графеновых дисперсий",
    newsArticle1Excerpt:
      "Наши последние исследования привели к значительному улучшению стабильности и производительности графеновых дисперсий.",
    newsArticle1Author: "Д-р Павел Новак",

    newsArticle2Title: "Партнерство с ведущим производителем электроники",
    newsArticle2Excerpt:
      "NANOBUILD сотрудничает с крупной электронной компанией для разработки проводящих материалов нового поколения.",
    newsArticle2Author: "Команда маркетинга",

    newsArticle3Title: "Новый производственный объект открыт в Праге",
    newsArticle3Excerpt:
      "Расширение наших производственных мощностей с современным оборудованием и увеличенной мощностью.",
    newsArticle3Author: "Операционная команда",

    newsArticle4Title: "Устойчивые методы производства графена",
    newsArticle4Excerpt:
      "Наша приверженность экологической ответственности через инновационные зеленые производственные технологии.",
    newsArticle4Author: "Д-р Мария Свобода",

    // Application Page
    backToApplications: "Назад к применениям",
    interestedApplication: "Заинтересованы в этом применении?",
    interestedText:
      "Свяжитесь с нашей технической командой, чтобы обсудить, как наши графеновые дисперсии могут улучшить ваше конкретное применение.",
    contactTeam: "Связаться с нашей командой",
    downloadTechnicalData: "Скачать технические данные",
    applicationNotFound: "Применение не найдено",
    backToHome: "Вернуться на главную",

    // Contact Form
    contactTitle: "Связаться с нами",
    firstName: "Имя",
    lastName: "Фамилия",
    phone: "Телефон",
    email: "Электронная почта",
    message: "Сообщение",
    consent: "Я согласен на обработку персональных данных",
    sendMessage: "Отправить сообщение",
    sending: "Отправка...",
    thankYou: "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
    errorMessage: "При отправке вашего сообщения произошла ошибка. Пожалуйста, попробуйте позже.",
    fillRequired: "Пожалуйста, заполните все обязательные поля.",
    agreeConsent: "Пожалуйста, согласитесь на обработку персональных данных.",
    failedSend: "Не удалось отправить электронное письмо. Пожалуйста, попробуйте позже.",

    // Footer
    address: "Na Folimance 2155/15, Vinohrady (Praha 2), 120 00 Praha",
    allRightsReserved: "Все права защищены",
    czechRepublic: "Чешская Республика",

    // Privacy Policy
    privacyTitle: "Политика конфиденциальности",
    privacyText:
      "Ваша конфиденциальность важна для нас. Эта политика объясняет, как мы собираем, используем и защищаем вашу информацию.",

    // Common
    type: "Тип",
    size: "Размер",
    category: "Категория",
    author: "Автор",
    date: "Дата",
    notProvided: "Не указано",
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
