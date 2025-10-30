"use client"

import { useState } from "react"

interface FAQProps {
  language: "en" | "zh"
}

export function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = {
    en: [
      {
        question: "Is this financial advice?",
        answer:
          "Yes. Just kidding. No. Definitely not. Please consult a professional. Or a Magic 8-Ball. Same difference.",
      },
      {
        question: "Why does the site look like 1999?",
        answer: "Because 1999 never ended. We're still waiting for Y2K. Any day now. Also, modern design is overrated.",
      },
      {
        question: "How can I invest?",
        answer:
          "You can't. The index invests in you. SBI420 chooses its holders through a complex algorithm involving vibes, moon phases, and your browser history.",
      },
      {
        question: "What is the utility of SBI420?",
        answer:
          "Utility is a social construct. SBI420 transcends utility. It exists in the liminal space between meme and dream.",
      },
      {
        question: "Wen moon?",
        answer: "The moon is a metaphor. We're already there. You just haven't realized it yet. Check your third eye.",
      },
    ],
    zh: [
      {
        question: "这是财务建议吗？",
        answer: "是的。开玩笑的。不是。绝对不是。请咨询专业人士。或者魔法8球。没什么区别。",
      },
      {
        question: "为什么网站看起来像1999年？",
        answer: "因为1999年从未结束。我们还在等待Y2K。随时都可能发生。而且，现代设计被高估了。",
      },
      {
        question: "我如何投资？",
        answer: "你不能。指数投资于你。SBI420通过涉及氛围、月相和你的浏览历史的复杂算法选择其持有者。",
      },
      {
        question: "SBI420的效用是什么？",
        answer: "效用是一种社会建构。SBI420超越效用。它存在于模因和梦想之间的边缘空间。",
      },
      {
        question: "什么时候登月？",
        answer: "月亮是一个隐喻。我们已经在那里了。你只是还没意识到。检查你的第三只眼。",
      },
    ],
  }

  const content = {
    en: {
      title: "FREQUENTLY ASKED QUESTIONS",
    },
    zh: {
      title: "常见问题",
    },
  }

  const t = content[language]
  const questions = faqs[language]

  return (
    <section id="faq" className="bg-[#008080] py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-mono text-3xl font-bold text-[#FFFFFF] mb-8 text-center pixel-text">{t.title}</h2>

        <div className="space-y-3">
          {questions.map((faq, i) => (
            <div
              key={i}
              className="bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-l-[#FFFFFF] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_#000000]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-4 py-3 flex items-center justify-between font-mono text-left text-[#000000] hover:bg-[#000080] hover:text-[#FFFFFF] transition-colors"
              >
                <span className="font-bold">{faq.question}</span>
                <span className="text-xl font-bold ml-4">{openIndex === i ? "[-]" : "[+]"}</span>
              </button>

              {openIndex === i && (
                <div className="px-4 py-3 bg-[#FFFFFF] border-t-2 border-[#808080] font-mono text-sm text-[#000000] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
