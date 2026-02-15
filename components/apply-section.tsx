'use client'

export default function ApplySection() {
    return (
        <section id="apply" className="py-10">
            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start border-y border-gray-200 py-10">
                <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase md:col-span-1 pt-5">
                    APPLY
                </h2>
                <div className="md:col-span-3">
                    <h3 className="text-xl lg:text-[40px] font-garamond-bold text-gray-900 leading-relaxed mb-6">
                        Ready to Begin?
                    </h3>
                    <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed mb-5">
                        Your seat at the table is waiting. Register for an upcoming event, connect with people
                        who share your interests, and take the next step in your journey.
                    </p>
                    <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed mb-8">
                        We review applications on a rolling basis. Strong applications get scheduled for a brief
                        technical conversation with a member of our expert network.
                    </p>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 text-xl lg:text-[33px] font-jenson text-gray-900 hover:opacity-50 transition-opacity transition-all hover:decoration-gray-400"
                    >
                        Start your application
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900 group-hover:text-gray-400 transition-colors"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

