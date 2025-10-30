"use client"

import { useEffect, useState } from "react"

const tickers = [
  { symbol: "SBI420", price: "4.20", change: "+0.69", percent: "+420.69000%", up: true },
  { symbol: "AAPL", price: "182.45", change: "-2.34", percent: "-1.30%", up: false },
  { symbol: "MSFT", price: "378.91", change: "-5.67", percent: "-1.52%", up: false },
  { symbol: "NVDA", price: "495.22", change: "-3.21", percent: "-0.64%", up: false },
  { symbol: "BTC", price: "69,420", change: "-420", percent: "-0.61%", up: false },
  { symbol: "ETH", price: "3,456", change: "-123", percent: "-3.69%", up: false },
  { symbol: "SOL", price: "142.00", change: "-8.50", percent: "-5.65%", up: false },
  { symbol: "DOGE", price: "0.420", change: "-0.069", percent: "-19.64%", up: false },
]

export function TickerBar() {
  const [tickerContent, setTickerContent] = useState("")

  useEffect(() => {
    const content = tickers
      .map((t) => `${t.symbol} ${t.price} ${t.up ? "▲" : "▼"} ${t.change} (${t.percent})`)
      .join("   •   ")
    setTickerContent(content + "   •   " + content)
  }, [])

  return (
    <div className="bg-[#C0C0C0] border-b-2 border-[#808080] py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap font-mono text-sm">
        {tickerContent.split("   •   ").map((item, i) => {
          const ticker = tickers[i % tickers.length]
          return (
            <span key={i} className="inline-block mx-4">
              <span className={ticker?.up ? "text-[#008000]" : "text-[#FF0000]"}>{item}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
