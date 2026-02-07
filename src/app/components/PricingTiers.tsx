'use client'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Zap, Shield, Rocket } from 'lucide-react'

const tiers = [
    {
        name: 'Frontdesk Lite',
        price: '2 990 kr',
        period: '/mån',
        description: 'Perfekt för mindre företag som vill automatisera det enklaste.',
        features: ['Hanterar inkommande samtal', 'Enkel FAQ-svarare', 'SMS-utskick vid missat samtal', 'Grundläggande dashboard'],
        icon: Zap,
        highlight: false,
        cta: 'Kom igång'
    },
    {
        name: 'Frontdesk Premium',
        price: '4 990 kr',
        period: '/mån',
        description: 'Vår mest populära lösning för växande bolag.',
        features: ['Allt i Lite', 'Full kalenderintegration', 'Avancerad RAG (Lär sig er data)', 'CRM-integration (HubSpot m.fl.)', 'Prioriterad support'],
        icon: Rocket,
        highlight: true,
        cta: 'Skaffa Premium'
    },
    {
        name: 'Frontdesk Enterprise',
        price: 'Offert',
        period: '',
        description: 'Skräddarsydda lösningar för maximal skalbarhet.',
        features: ['Allt i Premium', 'Custom workflows & API', 'White Label-alternativ', 'Dedikerad Success Manager', 'SLA & GDPR-avtal'],
        icon: Shield,
        highlight: false,
        cta: 'Kontakta oss'
    }
]

export default function PricingTiers() {
    return (
        <section className="py-24 md:py-32 bg-black relative">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Priser som <span className="text-[#FF5D00]">skalar</span></h2>
                    <p className="text-white/60 text-lg">Inga dolda avgifter. Ingen bindningstid.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                relative rounded-3xl p-8 border flex flex-col h-full
                ${tier.highlight
                                    ? 'bg-white/5 border-[#FF5D00] shadow-[0_0_30px_rgba(0,234,100,0.1)]'
                                    : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'}
                transition-all duration-300
              `}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF5D00] text-black text-sm font-bold uppercase tracking-wider">
                                    Mest Populär
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${tier.highlight ? 'bg-[#FF5D00]/20 text-[#FF5D00]' : 'bg-white/5 text-white'}`}>
                                    <tier.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-white/60 text-sm mb-6 min-h-[40px]">{tier.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                                    <span className="text-white/40">{tier.period}</span>
                                </div>
                            </div>

                            <div className="flex-grow mb-8 space-y-4">
                                {tier.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${tier.highlight ? 'bg-[#FF5D00] text-black' : 'bg-white/20 text-white'}`}>
                                            <Check size={10} />
                                        </div>
                                        <span className="text-white/80 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`
                w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all
                ${tier.highlight
                                    ? 'bg-[#FF5D00] text-black hover:bg-[#00C455] hover:shadow-lg'
                                    : 'bg-white/10 text-white hover:bg-white/20'}
              `}>
                                {tier.cta}
                                <ArrowRight size={16} />
                            </button>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
