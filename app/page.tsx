"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { TickerBar } from "@/components/ticker-bar"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { MarketData } from "@/components/market-data"
import { FakeNews } from "@/components/fake-news"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  const [institutionalMode, setInstitutionalMode] = useState(false)
  const [logoClicks, setLogoClicks] = useState(0)
  const [language, setLanguage] = useState<"en" | "zh">("en")

  useEffect(() => {
    if (logoClicks === 3) {
      setInstitutionalMode(true)
      alert("🏛️ INSTITUTIONAL MODE ENABLED 🏛️")
    }
  }, [logoClicks])

  const handleLogoClick = () => {
    setLogoClicks((prev) => prev + 1)
  }

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"))
  }

  return (
    <div className={`min-h-screen ${institutionalMode ? "grayscale" : ""}`}>
      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)] opacity-10" />

      <Header onLogoClick={handleLogoClick} language={language} onLanguageToggle={handleLanguageToggle} />
      <TickerBar />
      <Hero language={language} />
      <Manifesto language={language} />
      <MarketData language={language} />
      <FakeNews language={language} />
      <FAQ language={language} />
      <Footer language={language} />
    </div>
  )
}
