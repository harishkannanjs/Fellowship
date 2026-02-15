'use client'

import { useState } from 'react'

interface FAQSectionProps {
  setActiveSection: (section: string) => void
}

export default function FAQSection({ setActiveSection }: FAQSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How much time does the fellowship require?',
      answer: 'Plan for 5–8 focused hours each week. You’re expected to build consistently and show measurable progress.'
    },
    {
      question: 'How do I apply?',
      answer: 'Submit your application. If there’s alignment, you’ll be invited for a short conversation with a member of the expert network.'
    },
    {
      question: 'Do I need prior experience?',
      answer: 'No formal credentials required. You need an active project and the discipline to move it forward.'
    },
    {
      question: 'What kind of projects qualify?',
      answer: 'Anything concrete and shippable within the sprint. Research, products, creative work — as long as it’s real.'
    },
    {
      question: 'What happens if I fall behind?',
      answer: 'Progress is visible. Own it, reset, and continue building. The structure is designed to keep you moving.'
    },
    {
      question: 'How are expert sessions structured?',
      answer: 'No lectures. Focused conversations around your work, your decisions, and your blockers.'
    },
    {
      question: 'What does completion mean?',
      answer: 'You ship something publicly. That’s the standard.'
    }
  ]

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="py-10 pb-2 bg-background">
        <div className="max-w-4xl mx-auto px-6 pb-5">
          <h2 className="text-[17px] md:text-[15px] tracking-[0.4em] text-gray-400 font-jenson uppercase mb-12">
            FAQ
          </h2>
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4 text-left">
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="w-full text-left group"
                >
                  <h4 className={`text-[26px] lg:text-[30px] font-serif text-gray-900 leading-relaxed group-hover:opacity-70 transition pb-1 ${expanded === index ? 'border-b-2 border-gray-900 inline-block' : ''
                    }`}>
                    {faq.question}
                  </h4>
                </button>
                {expanded === index && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-lg lg:text-[24px] text-gray-700 leading-relaxed font-jenson">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
