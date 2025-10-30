"use client"

interface FooterProps {
  language: "en" | "zh"
}

export function Footer({ language }: FooterProps) {
  const content = {
    en: {
      copyright: "© 1999–2025 SBI420 Inc. | Powered by Dial-Up Degens",
      links: {
        email: "Email Support",
        source: "View Source",
        terms: "Terms of Hopium",
      },
      browser: "Best viewed in Netscape Navigator 4.0 or Internet Explorer 5.5",
      resolution: "Optimized for 800x600 resolution • 256 colors",
      warning: "⚠️ WARNING: This site may cause nostalgia ⚠️",
    },
    zh: {
      copyright: "© 1999–2025 SBI420公司 | 由拨号堕落者提供支持",
      links: {
        email: "电子邮件支持",
        source: "查看源代码",
        terms: "希望条款",
      },
      browser: "最佳浏览器：网景导航4.0或IE 5.5",
      resolution: "优化分辨率：800x600 • 256色",
      warning: "⚠️ 警告：本网站可能引起怀旧 ⚠️",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-[#C0C0C0] border-t-4 border-[#FFFFFF] py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* ASCII Art Divider */}
        <div className="font-mono text-xs text-[#808080] mb-6 text-center overflow-x-auto">
          <pre>{`═══════════════════════════════════════════════════════════════════════════════`}</pre>
        </div>

        <div className="text-center space-y-4">
          <p className="font-mono text-sm text-[#000000]">{t.copyright}</p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:support@sbi420.com"
              className="font-mono text-sm text-[#0000EE] underline hover:text-[#551A8B]"
            >
              {t.links.email}
            </a>
            <a href="#" className="font-mono text-sm text-[#0000EE] underline hover:text-[#551A8B]">
              {t.links.source}
            </a>
            <a href="#" className="font-mono text-sm text-[#0000EE] underline hover:text-[#551A8B]">
              {t.links.terms}
            </a>
          </div>

          <div className="pt-4">
            <p className="font-mono text-xs text-[#808080]">{t.browser}</p>
            <p className="font-mono text-xs text-[#808080]">{t.resolution}</p>
          </div>

          <div className="pt-4">
            <div className="inline-block bg-[#000000] px-3 py-1 border-2 border-[#FFFF00]">
              <p className="font-mono text-xs text-[#00FF00] animate-pulse">{t.warning}</p>
            </div>
          </div>
        </div>

        {/* ASCII Art Bottom */}
        <div className="font-mono text-xs text-[#808080] mt-6 text-center overflow-x-auto">
          <pre>{`═══════════════════════════════════════════════════════════════════════════════`}</pre>
        </div>
      </div>
    </footer>
  )
}
