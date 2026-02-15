'use client'

import { useState } from 'react'

interface FAQSectionProps {
  setActiveSection: (section: string) => void
}

export default function FAQSection({ setActiveSection }: FAQSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does the Grant work?',
      answer: 'The $10,000+ grant is provided upfront to exceptional talented individuals younger than 25 to bypass what slows them down. There are no equity stakes, no repayment obligations. It\'s a pure grant to support your work.'
    },
    {
      question: 'How to get the application going?',
      answer: 'You can apply directly through our application portal. The process involves submitting a written application (maximum 2000 words/4 pages) followed by an in-person interview if selected.'
    },
    {
      question: 'What is the age limit to apply?',
      answer: 'You must be younger than 25 years old to be eligible for the Magnificent Grant. We\'re specifically looking for pioneering talent in their early twenties or younger.'
    },
    {
      question: 'Do I need to drop out?',
      answer: 'No, dropping out is not required. Many of our fellows continue their studies while pursuing their projects. However, you should have the flexibility and commitment to engage deeply with your ambitious ideas.'
    },
    {
      question: 'Do I need to be on the verge of launching a product or incorporated a company already?',
      answer: 'No, you don\'t need to have a company or product ready. We\'re looking for exceptional talent with ambitious ideas and the urgency to execute them. We support you in developing and launching your ideas.'
    },
    {
      question: 'Is there an application deadline?',
      answer: 'No, we interview applicants on a rolling basis. You can apply anytime and we review applications continuously throughout the year.'
    },
    {
      question: 'How many Grantees do you select?',
      answer: 'We select 10 exceptional talented pioneers each year to receive the Magnificent Grant. We\'re selective in our process to ensure we\'re backing the right people who can create meaningful impact.'
    }
  ]

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="py-10 pb-2 bg-background">
        <div className="max-w-4xl mx-auto px-6 pb-5">
          <h2 className="text-[15px] tracking-[0.4em] text-gray-400 font-jenson uppercase mb-12">
            FAQ
          </h2>
          <div className="space-y-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-4 text-left">
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="w-full text-left group"
                >
                  <h4 className={`text-xl lg:text-[30px] font-serif text-gray-900 leading-relaxed group-hover:opacity-70 transition pb-1 ${expanded === index ? 'border-b-2 border-gray-900 inline-block' : ''
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
