'use client'

export default function ApplySection() {
    return (
        <section id="apply" className="py-10 pt-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="border-t border-gray-200 py-10 flex justify-start">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 text-3xl md:text-[40px] font-serif text-gray-900 transition-opacity hover:opacity-70"
                    >
                        Application Form
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-gray-900 transition-colors"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                    </a>
                </div>
                <div className="border-b border-gray-200"></div>
            </div>
        </section>
    )
}
