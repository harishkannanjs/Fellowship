'use client'

import { useState } from 'react'

export default function AccountabilitySection() {
    const [expandedAccountability, setExpandedAccountability] = useState<number | null>(null)

    const accountabilityItems = [
        {
            number: 1,
            title: "Micro Accountability Pods",
            content: `You're placed in a group of 3–4 fellows working in related domains. Your pod meets weekly (45-minute sessions) to:
- Review what you shipped that week
- Identify what's blocking you
- Commit to specific targets for the next week
These aren't casual check-ins. They're structured accountability sessions. You come with receipts (code commits, draft sections, prototype builds, user tests, whatever proves progress).
Your pod doesn't give you advice. They hold you to your commitments and help you stay honest about what's actually moving forward.`
        },
        {
            number: 2,
            title: "Public Milestones",
            content: `Two public checkpoints create external accountability:
- Mid-sprint update (Week 2): Brief written update shared with entire cohort
- Final demo (Week 4): Live presentation of your work
Knowing other builders will see your progress creates productive pressure. You're not just accountable to yourself—you're accountable to people doing the same hard work you are.`
        }
    ]

    return (
        <section id="accountability" className="py-10">
            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 xs:grid-cols-5 md:grid-cols-4 gap-8 xs:gap-16 items-start border-b border-gray-200 pb-10">
                <h2 className="text-[15px] md:text-[13px] tracking-[0.2em] md:tracking-[0.4em] text-gray-400 font-jenson uppercase xs:col-span-2 md:col-span-1 pt-5">
                    ACCOUNTABILITY
                </h2>
                <div className="xs:col-span-3 md:col-span-3 space-y-12">
                    {accountabilityItems.map((item) => (
                        <div key={item.number} className="pb-12 border-b border-gray-200 last:border-b-0 last:pb-0">
                            <button
                                onClick={() => setExpandedAccountability(expandedAccountability === item.number ? null : item.number)}
                                className="w-full text-left hover:opacity-70 transition group"
                            >
                                <h3 className="text-[32px] lg:text-[40px] font-garamond-bold text-gray-900 leading-relaxed">
                                    <span className="text-gray-900 mr-4 tabular-nums">({item.number})</span> {item.title}
                                </h3>
                            </button>
                            {expandedAccountability === item.number && (
                                <div className="mt-6">
                                    <div className="text-lg lg:text-[22px] text-gray-700 leading-relaxed font-jenson whitespace-pre-wrap">
                                        {item.content}
                                    </div>
                                    <button
                                        onClick={() => setExpandedAccountability(null)}
                                        className="mt-6 text-[12px] md:text-[10px] tracking-[0.4em] text-gray-500 font-medium hover:text-gray-900 transition flex items-center gap-2"
                                    >
                                        LESS
                                    </button>
                                </div>
                            )}
                            {expandedAccountability !== item.number && (
                                <button
                                    onClick={() => setExpandedAccountability(item.number)}
                                    className="mt-6 text-[12px] md:text-[10px] tracking-[0.4em] text-gray-500 font-medium hover:text-gray-900 transition flex items-center gap-2"
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

