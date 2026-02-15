'use client'

import { useState } from 'react'

export default function WhySection() {
    const [expandedWhy, setExpandedWhy] = useState<number | null>(null)

    const whyItems = [
        {
            number: 1,
            title: 'The time to escape from systemic norm captivity is now.',
            content: 'Higher education has become increasingly gatekeeping and credentialist. We believe exceptional talent should not be constrained by traditional paths. The future belongs to those who can think independently and create value outside of established hierarchies.'
        },
        {
            number: 2,
            title: 'We go where effective altruism stops.',
            content: 'While effective altruism focuses on quantifiable impact, we recognize that some of the most important contributions to society are unmeasurable. We back ambitious outliers who are building things that matter, even if their impact can\'t be perfectly measured.'
        },
        {
            number: 3,
            title: 'Edge in spotting extreme talent: our team built a track record as one of the world\'s best misfit seed investors. We don\'t fit in linear journeys ourselves.',
            content: 'Our team has invested in some of the most unconventional founders who went on to create significant impact. We understand that exceptional talent often looks different from what traditional institutions are looking for. We\'re looking for people who don\'t fit the mold—because that\'s where real innovation happens.'
        }
    ]

    return (
        <section id="why" className="py-10">
            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start border-b border-gray-200 pb-10">
                <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase md:col-span-1 pt-2">
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
