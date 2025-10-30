"use client"

interface HeaderProps {
  onLogoClick: () => void
  language: "en" | "zh"
  onLanguageToggle: () => void
}

export function Header({ onLogoClick, language, onLanguageToggle }: HeaderProps) {
  const navItems = {
    en: ["Market", "Manifesto", "FAQ", "Downloads", "Contact"],
    zh: ["市场", "宣言", "常见问题", "下载", "联系"],
  }

  return (
    <header className="border-b-4 border-[#000080] bg-gradient-to-b from-[#000080] to-[#0000CD] px-4 py-3 shadow-[inset_0_2px_0_rgba(255,255,255,0.3)]">
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={onLogoClick}
          className="font-mono text-3xl font-bold text-[#00FF00] hover:text-[#00CC00] transition-colors pixel-text cursor-pointer"
          style={{ textShadow: "2px 2px 0px #000000, 4px 4px 0px rgba(0,0,0,0.3)" }}
        >
          SBI420
        </button>

        <nav className="flex gap-6 items-center">
          {navItems[language].map((item, index) => (
            <a
              key={item}
              href={`#${navItems.en[index].toLowerCase()}`}
              className="font-mono text-sm font-bold text-white hover:text-[#FFFF00] transition-colors uppercase tracking-wider"
            >
              {item}
            </a>
          ))}

          <button
            onClick={onLanguageToggle}
            className="retro-button px-3 py-1 text-xs font-mono font-bold"
            title={language === "en" ? "Switch to Chinese" : "切换到英文"}
          >
            {language === "en" ? "中文" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  )
}
