"use client"

interface ManifestoProps {
  language: "en" | "zh"
}

export function Manifesto({ language }: ManifestoProps) {
  const content = {
    en: {
      title: "Our Mission: Pure Degeneracy.",
      manifestoText: `When it dumps, we meditate.
When it pumps, we ascend.

SBI420 is not a token.
It's an emotional operating system.

We don't follow charts.
Charts follow us.

The index doesn't track Bitcoin.
It tracks consciousness.

Join us in the eternal now.
Or don't. We're already there.`,
    },
    zh: {
      title: "我们的使命：纯粹的堕落。",
      manifestoText: `当它下跌时，我们冥想。
当它上涨时，我们升华。

SBI420不是代币。
它是一个情感操作系统。

我们不跟随图表。
图表跟随我们。

该指数不追踪比特币。
它追踪意识。

加入我们的永恒当下。
或者不加入。我们已经在那里了。`,
    },
  }

  const t = content[language]

  return (
    <section id="manifesto" className="bg-[#008080] py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-mono text-3xl font-bold text-[#FFFFFF] mb-8 text-center pixel-text">{t.title}</h2>

        {/* Windows 95 Notepad Style */}
        <div className="bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#000000] border-b-[#000000] shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
          {/* Title Bar */}
          <div className="bg-gradient-to-r from-[#000080] to-[#1084D0] px-2 py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#C0C0C0] border border-[#FFFFFF] flex items-center justify-center">
                <span className="text-[8px] text-[#000080]">📝</span>
              </div>
              <span className="font-mono text-sm text-[#FFFFFF] font-bold">manifesto.txt - Notepad</span>
            </div>
            <div className="flex gap-1">
              <button className="w-4 h-4 bg-[#C0C0C0] border border-[#FFFFFF] text-[10px] font-bold">_</button>
              <button className="w-4 h-4 bg-[#C0C0C0] border border-[#FFFFFF] text-[10px] font-bold">□</button>
              <button className="w-4 h-4 bg-[#C0C0C0] border border-[#FFFFFF] text-[10px] font-bold">×</button>
            </div>
          </div>

          {/* Menu Bar */}
          <div className="bg-[#C0C0C0] border-b border-[#FFFFFF] px-2 py-1">
            <div className="flex gap-4 font-mono text-xs">
              <span className="text-[#000000]">
                <u>F</u>ile
              </span>
              <span className="text-[#000000]">
                <u>E</u>dit
              </span>
              <span className="text-[#000000]">
                <u>H</u>elp
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-[#FFFFFF] p-4 min-h-[200px]">
            <pre className="font-mono text-sm text-[#000000] leading-relaxed whitespace-pre-wrap">
              {t.manifestoText}
            </pre>
          </div>

          {/* Bottom Buttons */}
          <div className="bg-[#C0C0C0] p-3 flex justify-center gap-3">
            <button className="retro-button bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#000000] border-b-[#000000] px-6 py-1 font-mono text-sm font-bold text-[#000000]">
              OK
            </button>
            <button className="retro-button bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#000000] border-b-[#000000] px-6 py-1 font-mono text-sm font-bold text-[#000000]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
