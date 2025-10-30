"use client"

interface HeroProps {
  language: "en" | "zh"
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      title: "SBI420 — The Satoshi Bitcoin Index",
      subtitle: "The only index tracking your emotions since 1999.",
      description:
        "Welcome to the future of finance, built with the technology of the past. SBI420 bridges the gap between 1990s design and 2025 hopium. Experience the nostalgia of dial-up modems combined with the volatility of modern cryptocurrency markets.",
      enterButton: "[ENTER SITE]",
      chartsButton: "[VIEW CHARTS]",
    },
    zh: {
      title: "SBI420 — 中本聪比特币指数",
      subtitle: "自1999年以来唯一追踪您情绪的指数。",
      description:
        "欢迎来到用过去的技术构建的金融未来。SBI420连接了1990年代的设计和2025年的希望。体验拨号调制解调器的怀旧与现代加密货币市场的波动性。",
      enterButton: "[进入网站]",
      chartsButton: "[查看图表]",
    },
  }

  const t = content[language]

  return (
    <section className="bg-[#C0C0C0] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#FFFFFF] border-4 border-[#808080] shadow-[4px_4px_0px_#000000] p-8">
          <div className="border-2 border-[#000080] bg-gradient-to-b from-[#000080] to-[#0000CD] p-1 mb-6">
            <h1 className="font-mono text-4xl font-bold text-center text-[#FFFFFF] py-2 pixel-text">{t.title}</h1>
          </div>

          <h2 className="font-mono text-2xl text-center text-[#000080] mb-6 pixel-text">{t.subtitle}</h2>

          <p className="font-mono text-base text-[#000000] mb-8 leading-relaxed text-center">{t.description}</p>

          <div className="flex gap-4 justify-center">
           <button
  onClick={() =>
    window.open(
      "https://luminex.io/spark/trade/0291201b807d361fa61aee12364b9711a1515938bba9dd9f784ff193bfe7459b33",
      "_blank"
    )
  }
  className="retro-button bg-[#C0C0C0] border-4 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#808080] border-b-[#808080] px-8 py-3 font-mono font-bold text-[#000000] hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#FFFFFF] hover:border-b-[#FFFFFF] active:border-t-[#000000] active:border-l-[#000000] active:border-r-[#DFDFDF] active:border-b-[#DFDFDF] transition-all"
>
  {t.enterButton}
</button>

            <button className="retro-button bg-[#C0C0C0] border-4 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#808080] border-b-[#808080] px-8 py-3 font-mono font-bold text-[#000000] hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-[#FFFFFF] hover:border-b-[#FFFFFF] active:border-t-[#000000] active:border-l-[#000000] active:border-r-[#DFDFDF] active:border-b-[#DFDFDF] transition-all">
              {t.chartsButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
