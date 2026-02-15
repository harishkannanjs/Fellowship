'use client'

import { useState } from 'react'

export default function WhySection() {
    const [expandedWhy, setExpandedWhy] = useState<number | null>(null)

    const whyItems = [
        {
            number: 1,
            title: "We don't do lectures.",
            content: "Expert sessions are dialogues about your specific work, not general presentations."
        },
        {
            number: 2,
            title: "We don't do passive learning.",
            content: "Every input has to connect to something you're actively building."
        },
        {
            number: 3,
            title: "We don't do vague mentorship.",
            content: "Conversations are structured around decision points and blockers, not general career advice."
        },
        {
            number: 4,
            title: "We don't let you hide.",
            content: "Accountability pods and public demos mean your progress (or lack of it) is visible."
        },
        {
            number: 5,
            title: "We don't accept ideas without execution.",
            content: "You need an active project to join. We're not here to help you brainstorm—we're here to help you ship."
        },
        {
            number: 6,
            title: "We don't graduate people who don't build.",
            content: `Completing the fellowship means shipping something publicly. No exceptions. This structure won't work for everyone. It's designed for builders who are ready to move fast, work in public, and hold themselves to real outcomes. If that's you, this is the right place`
        }
    ]

    return (
        <section id="why" className="py-10">
            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start border-b border-gray-200 pb-10">
                <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase md:col-span-1 pt-5">
                    WHY
                </h2>
                <div className="md:col-span-3 space-y-12">
                    {whyItems.map((item) => (
                        <div key={item.number} className="pb-12 border-b border-gray-200 last:border-b-0 last:pb-0">
                            <button
                                onClick={() => setExpandedWhy(expandedWhy === item.number ? null : item.number)}
                                className="w-full text-left hover:opacity-70 transition group"
                            >
                                <h3 className="text-xl lg:text-[40px] font-garamond-bold text-gray-900 leading-relaxed">
                                    <span className="text-gray-900 mr-4 tabular-nums">({item.number})</span> {item.title}
                                </h3>
                            </button>
                            {expandedWhy === item.number && (
                                <div className="mt-6">
                                    <p className="text-lg lg:text-[22px] text-gray-700 leading-relaxed font-jenson">
                                        {item.content}
                                    </p>
                                    <button
                                        onClick={() => setExpandedWhy(null)}
                                        className="mt-6 text-[10px] tracking-[0.4em] text-gray-500 font-medium hover:text-gray-900 transition flex items-center gap-2"
                                    >
                                        LESS
                                    </button>
                                </div>
                            )}
                            {expandedWhy !== item.number && (
                                <button
                                    onClick={() => setExpandedWhy(item.number)}
                                    className="mt-6 text-[10px] tracking-[0.4em] text-gray-500 font-medium hover:text-gray-900 transition flex items-center gap-2"
                                >
                                    MORE
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
