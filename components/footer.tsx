'use client'

export default function Footer() {
    return (
        <footer className="py-10 pt-1 bg-background">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-10  ">
                    <h2 className="text-[13px] tracking-[0.4em] text-gray-400 font-jenson uppercase mb-8">
                        Fellowship
                    </h2>

                    <div className="max-w-2xl">
                        <p className="text-[15px] leading-relaxed text-gray-500 font-jenson italic pt-2 ">
                            <span className="font-semibold not-italic text-gray-900 mr-2">/mæɡˈnɪfɪsnt/</span>
                            from Latin magnificentior, comparative of magnificus (&quot;great in deeds or sentiment, noble, splendid, etc.&quot;),
                            from magnus (&quot;great&quot;) + -ficus, a form of -faciens, the regular form, in compounds, of faciens, a
                            participle of facere (&quot;to do&quot;).
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200 text-[11px] tracking-wider text-gray-400 font-medium uppercase">
                    <div className="flex flex-wrap gap-8 mb-4 md:mb-0">
                        <span>© Fellowship</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
