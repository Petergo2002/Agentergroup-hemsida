'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import useShouldReduceMotion from './useShouldReduceMotion'
import usePageVisibility from './usePageVisibility'


const integrations = [
    { name: 'Google Calendar', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg' },
    { name: 'Gmail', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg' },
    { name: 'HubSpot', logo: 'https://www.siroccogroup.com/wp-content/uploads/2024/10/hubspot-transparent.svg' },
    { name: 'Slack', logo: 'https://www.smarsh.com/media/Slack.png' },
    { name: 'Trello', logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/250px-Salesforce.com_logo.svg.png' },
    { name: 'Outlook', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg/960px-Microsoft_Office_Outlook_%282018%E2%80%932024%29.svg.png' },
    { name: 'Notion', logo: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBUDu2rz06EjlN1L8I9rDKxNCFqtaMlSGUP7HME_3NO_IV_oo65qEDMhG0OONQl3Eh46hPAOwBr6X4jEKqiCHFgo-&format=source' },
]

export default function IntegrationShowcase() {
    const shouldReduceMotion = useShouldReduceMotion()
    const isPageVisible = usePageVisibility()
    const containerRef = useRef<HTMLElement | null>(null)
    const isInView = useInView(containerRef, { margin: '0px 0px -160px 0px' })
    const shouldAnimate = !shouldReduceMotion && isPageVisible && isInView

    if (shouldReduceMotion) {
        return (
            <section className="py-16 overflow-hidden bg-black relative" ref={containerRef}>
                <div className="container mx-auto text-center mb-10">
                    <p className="text-white/40 text-sm font-mono tracking-widest uppercase mb-4">Integrera med ditt ekosystem</p>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Maja works where you work.
                    </h2>
                </div>

                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {integrations.slice(0, 8).map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-7 h-7 object-contain"
                                loading="lazy"
                                decoding="async"
                                width="28"
                                height="28"
                            />
                            <span className="text-white text-sm font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    return (
        <section className="py-24 overflow-hidden bg-black relative" ref={containerRef}>
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            <div className="container mx-auto text-center mb-12">
                <p className="text-white/40 text-sm font-mono tracking-widest uppercase mb-4">Integrera med ditt ekosystem</p>
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    Maja works where you work.
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="flex relative">
                <motion.div
                    className="flex gap-4 md:gap-8 px-4"
                    animate={shouldAnimate ? { x: '-50%' } : { x: 0 }}
                    transition={{
                        duration: shouldAnimate ? 30 : 0.01,
                        ease: 'linear',
                        repeat: shouldAnimate ? Infinity : 0
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Double the list for seamless loop */}
                    {[...integrations, ...integrations].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-4 rounded-xl glass-panel border border-white/5 hover:border-[#FF5D00]/40 transition-colors min-w-[200px]"
                        >
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-8 h-8 object-contain"
                                loading="lazy"
                                decoding="async"
                                width="32"
                                height="32"
                            />
                            <span className="text-white font-medium">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
