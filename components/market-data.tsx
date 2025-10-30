"use client"

interface MarketDataProps {
  language: "en" | "zh"
}

const marketData = [
  { symbol: "BTC", last: "69,420.00", change: "-420.00", percent: "-0.61%", volume: "42.0B", up: false },
  { symbol: "ETH", last: "3,456.78", change: "-123.45", percent: "-3.69%", volume: "18.5B", up: false },
  { symbol: "SOL", last: "142.00", change: "-8.50", percent: "-5.65%", volume: "2.1B", up: false },
  { symbol: "DOGE", last: "0.420", change: "-0.069", percent: "-19.64%", volume: "1.2B", up: false },
  { symbol: "SBI420", last: "∞", change: "+∞", percent: "+∞%", volume: "UNLIMITED", up: true },
]

export function MarketData({ language }: MarketDataProps) {
  const content = {
    en: {
      title: "LIVE MARKET DATA",
      headers: {
        symbol: "SYMBOL",
        last: "LAST",
        change: "CHANGE",
        percent: "%",
        volume: "VOLUME",
      },
      disclaimer: "* Data delayed by 15 years. For entertainment purposes only.",
    },
    zh: {
      title: "实时市场数据",
      headers: {
        symbol: "代码",
        last: "最新价",
        change: "涨跌",
        percent: "涨跌幅",
        volume: "成交量",
      },
      disclaimer: "* 数据延迟15年。仅供娱乐。",
    },
  }

  const t = content[language]

  return (
    <section id="market" className="bg-[#C0C0C0] py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-mono text-3xl font-bold text-[#000080] mb-8 text-center pixel-text">{t.title}</h2>

        <div className="bg-[#FFFFFF] border-4 border-[#808080] shadow-[4px_4px_0px_#000000]">
          <table className="w-full font-mono text-sm">
            <thead>
              <tr className="bg-[#000080] text-[#FFFFFF]">
                <th className="border-2 border-[#FFFFFF] px-4 py-2 text-left font-bold">{t.headers.symbol}</th>
                <th className="border-2 border-[#FFFFFF] px-4 py-2 text-right font-bold">{t.headers.last}</th>
                <th className="border-2 border-[#FFFFFF] px-4 py-2 text-right font-bold">{t.headers.change}</th>
                <th className="border-2 border-[#FFFFFF] px-4 py-2 text-right font-bold">{t.headers.percent}</th>
                <th className="border-2 border-[#FFFFFF] px-4 py-2 text-right font-bold">{t.headers.volume}</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((row, i) => (
                <tr key={row.symbol} className={i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#E0E0E0]"}>
                  <td className="border border-[#C0C0C0] px-4 py-2 font-bold text-[#000080]">{row.symbol}</td>
                  <td className="border border-[#C0C0C0] px-4 py-2 text-right text-[#000000]">{row.last}</td>
                  <td
                    className={`border border-[#C0C0C0] px-4 py-2 text-right font-bold ${row.up ? "text-[#008000]" : "text-[#FF0000]"}`}
                  >
                    {row.up ? "▲" : "▼"} {row.change}
                  </td>
                  <td
                    className={`border border-[#C0C0C0] px-4 py-2 text-right font-bold ${row.up ? "text-[#008000]" : "text-[#FF0000]"}`}
                  >
                    {row.percent}
                  </td>
                  <td className="border border-[#C0C0C0] px-4 py-2 text-right text-[#000000]">
                    {language === "zh" && row.volume === "UNLIMITED" ? "无限" : row.volume}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-mono text-xs text-[#808080] mt-4 text-center">{t.disclaimer}</p>
      </div>
    </section>
  )
}
