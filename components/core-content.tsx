'use client'

import { useState } from 'react'
import CursorAnimation from './cursor-animation'

export default function CoreContent() {
    const [expandedWhy, setExpandedWhy] = useState<number | null>(null)

    const howItems = [
        {
            number: 1,
            title: "Direct Access to Experts",
            content: "Learn from practitioners and thought leaders in intimate, interactive settings where you can actually ask your questions."
        },
        {
            number: 2,
            title: "Meaningful Connections",
            content: "Meet peers who share your ambitions and experts who remember what it's like to be where you are now."
        },
        {
            number: 3,
            title: "Real Conversations",
            content: "No corporate jargon. No performative networking. Just honest dialogue about what matters."
        },
        {
            number: 4,
            title: "Ongoing Community",
            content: "This isn't a one-time event. It's an entry point into a community committed to supporting each other's growth."
        },
        {
            number: 5,
            title: "Opportunities for Growth",
            content: "Based on your goals and needs, you may have access to resources that help you continue your learning journey."
        }
    ]

    return (
        <>
            {/* WHAT Section */}
            <section id="what" className="py-10">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 min-[421px]:grid-cols-5 md:grid-cols-4 gap-8 items-start relative">
                    <h2 className="text-[15px] md:text-[13px] tracking-[0.1em] min-[421px]:tracking-[0.2em] md:tracking-[0.4em] text-gray-400 font-jenson uppercase min-[421px]:col-span-2 md:col-span-1 pt-2">
                        WHAT
                    </h2>
                    <div className="min-[421px]:col-span-3 md:col-span-3">
                        <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed mb-5">
                            Think of sitting around a table with people who genuinely care about the same things you
                            do—asking real questions, sharing honest experiences, and exploring ideas together. We
                            believe the best learning happens when you're building something real. Our job is to
                            create the conditions for that work to happen—through expert guidance, peer
                            accountability, and a framework that keeps you moving forward.

                        </p>
                        <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed">This isn't about lectures or presentations. It's about curiosity, disciplined building.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHO Section */}
            <section id="who" className="py-10">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 min-[421px]:grid-cols-5 md:grid-cols-4 gap-8 items-start">
                    <h2 className="text-[15px] md:text-[13px] tracking-[0.1em] min-[421px]:tracking-[0.2em] md:tracking-[0.4em] text-gray-400 font-jenson uppercase min-[421px]:col-span-2 md:col-span-1 pt-2">
                        WHO
                    </h2>
                    <div className="min-[421px]:col-span-3 md:col-span-3">
                        <ul className="space-y-4 text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed mb-8">
                            <li className="flex items-start gap-4">
                                <span className="text-gray-900 mt-1">1.</span>
                                <span>A student or early-career professional exploring your path</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-gray-900 mt-1">2.</span>
                                <span>Someone switching careers and seeking guidance</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-gray-900 mt-1">3.</span>
                                <span>A researcher, creator, or community builder</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-gray-900 mt-1">4.</span>
                                <span>An expert who loves sharing knowledge and mentoring others</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-gray-900 mt-1">5.</span>
                                <span>Simply curious and eager to learn something new</span>
                            </li>
                        </ul>
                        <p className="text-lg lg:text-[22px] font-jenson text-gray-900 leading-relaxed">
                            You don&apos;t need to have shipped a product yet. But you need to be working on something concrete right now.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFITS Section */}
            <section id="benefits" className="py-10">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 min-[421px]:grid-cols-5 md:grid-cols-4 gap-8 items-start border-t border-gray-100">
                    <h2 className="text-[15px] md:text-[13px] tracking-[0.1em] min-[421px]:tracking-[0.2em] md:tracking-[0.4em] text-gray-400 font-jenson uppercase min-[421px]:col-span-2 md:col-span-1 pt-2">
                        BENEFITS
                    </h2>
                    <div className="min-[421px]:col-span-3 md:col-span-3 space-y-12">
                        {howItems.map((item) => (
                            <div key={item.number} className="pb-12 border-b border-gray-200 last:border-b-0 last:pb-0">
                                <button
                                    onClick={() => setExpandedWhy(expandedWhy === item.number ? null : item.number)}
                                    className="w-full text-left hover:opacity-70 transition group"
                                >
                                    <h3 className="text-[32px] lg:text-[40px] font-garamond-bold font-normal text-gray-900 leading-relaxed">
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
                                            className="mt-6 text-[10px] tracking-[0.4em] text-gray-500 font-jenson hover:text-gray-900 transition flex items-center gap-2"
                                        >
                                            LESS
                                        </button>
                                    </div>
                                )}
                                {expandedWhy !== item.number && (
                                    <button
                                        onClick={() => setExpandedWhy(item.number)}
                                        className="mt-6 text-[10px] tracking-[0.4em] text-gray-500 font-jenson hover:text-gray-900 transition flex items-center gap-2"
                                    >
                                        MORE
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
