"use client"

interface FakeNewsProps {
  language: "en" | "zh"
}

export function FakeNews({ language }: FakeNewsProps) {
  const headlines = {
    en: [
      {
        title: "Economists confirm 420 is greater than 500.",
        date: "10/30/2025",
        source: "Bloomberg Terminal (Dial-Up Edition)",
      },
      {
        title: "Federal Reserve replaces interest rates with vibes.",
        date: "10/29/2025",
        source: "Wall Street Journal (Fax Edition)",
      },
      {
        title: "Satoshi denies involvement in SBI420 (again).",
        date: "10/28/2025",
        source: "CoinDesk (AOL Edition)",
      },
      {
        title: 'Study finds 100% of SBI420 holders are "extremely online".',
        date: "10/27/2025",
        source: "Financial Times (Netscape Navigator)",
      },
      {
        title: 'IMF declares "hopium" as official reserve currency.',
        date: "10/26/2025",
        source: "Reuters (Windows 95 Edition)",
      },
    ],
    zh: [
      {
        title: "经济学家确认420大于500。",
        date: "2025年10月30日",
        source: "彭博终端（拨号版）",
      },
      {
        title: "美联储用氛围取代利率。",
        date: "2025年10月29日",
        source: "华尔街日报（传真版）",
      },
      {
        title: "中本聪否认参与SBI420（再次）。",
        date: "2025年10月28日",
        source: "CoinDesk（AOL版）",
      },
      {
        title: "研究发现100%的SBI420持有者都极度在线。",
        date: "2025年10月27日",
        source: "金融时报（网景导航版）",
      },
      {
        title: "国际货币基金组织宣布希望币为官方储备货币。",
        date: "2025年10月26日",
        source: "路透社（Windows 95版）",
      },
    ],
  }

  const content = {
    en: {
      title: "📰 BREAKING NEWS 📰",
      moreLink: ">> View More Headlines (Loading... 28.8k modem)",
    },
    zh: {
      title: "📰 突发新闻 📰",
      moreLink: ">> 查看更多标题（加载中... 28.8k调制解调器）",
    },
  }

  const t = content[language]
  const news = headlines[language]

  return (
    <section className="bg-[#FFFFFF] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-mono text-3xl font-bold text-[#000080] mb-8 text-center pixel-text">{t.title}</h2>

        <div className="bg-[#FFFFCC] border-4 border-[#808080] shadow-[4px_4px_0px_#000000] p-6">
          <div className="space-y-4">
            {news.map((item, i) => (
              <div key={i} className="border-b-2 border-dashed border-[#C0C0C0] pb-4 last:border-0">
                <a
                  href="#"
                  className="font-mono text-base text-[#0000EE] underline hover:text-[#551A8B] visited:text-[#551A8B] font-bold"
                >
                  {item.title}
                </a>
                <div className="font-mono text-xs text-[#808080] mt-1">
                  {item.date} • {item.source}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t-2 border-[#808080]">
            <a href="#" className="font-mono text-sm text-[#0000EE] underline hover:text-[#551A8B]">
              {t.moreLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
