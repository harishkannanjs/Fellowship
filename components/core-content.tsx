'use client'

import CursorAnimation from './cursor-animation'

export default function CoreContent() {
    return (
        <>
            {/* WHAT Section */}
            <section id="what" className="py-10">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start relative">
                    <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase md:col-span-1 pt-2">
                        WHAT
                    </h2>
                    <div className="md:col-span-3">
                        <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed">
                            Every year, 10 exceptional talented pioneers, younger than 25yrs old, will receive a $10.000+ grant to bypass what slows them down and to fight the status quo.
                        </p>
                    </div>
                </div>
            </section>

            {/* MENTORSHIP Section */}
            <section id="mentorship" className="py-10">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase md:col-span-1 pt-2">
                        MENTORSHIP
                    </h2>
                    <div className="md:col-span-3">
                        <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed">
                            The Magnificent Grants team will be on standby to actively support the fellows in a 2 year program. Free from substantive interference or agendas of investors or academia. The fellows will all meet once a year and will see each other on a regular basis to help each other out to widen, deepen and launch ambitious ideas.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHO Section */}
            <section id="who" className="py-10">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase md:col-span-1 pt-2">
                        WHO
                    </h2>
                    <div className="md:col-span-3">
                        <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed">
                            We seek candidates who apply unreasonable sense of urgency to extraordinary intellectual zoom range and fluidity, tackling audacious problems impacting the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW Section */}
            <section id="how" className="py-10">
                <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 items-start border-b border-gray-200 pb-10">
                    <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase md:col-span-1 pt-2">
                        HOW
                    </h2>
                    <div className="md:col-span-3">
                        <p className="text-xl lg:text-[22px] font-jenson text-gray-900 leading-relaxed">
                            We will analyze written applications leading to interviews in person. The questions aim for a maximum of 2000 words (4 pages).
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
