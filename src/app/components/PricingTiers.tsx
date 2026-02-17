'use client'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Zap, Shield, Rocket, Star } from 'lucide-react'
import Link from 'next/link'

const tiers = [
    {
        name: 'Maja Gratis',
        price: '0 kr',
        period: '/mån',
        description: 'Gratis kontaktformulär för din webbplats. Ingen AI ingår.',
        features: [
            { name: 'Kontaktformulär i widget', included: true },
            { name: 'Leads sparas automatiskt', included: true },
            { name: '1 användare', included: true },
            { name: 'AI-chat', included: false },
            { name: 'Ärenden', included: false },
            { name: 'Team/medlemmar', included: false },
        ],
        highlight: false,
        cta: 'Välj Maja Gratis',
        href: 'https://dashboard.agentergroup.com/auth/signup?plan=free',
        buttonVariant: 'outline'
    },
    {
        name: 'Maja Start',
        price: '890 kr',
        period: '/mån',
        description: 'För mindre team som vill automatisera vanliga kundfrågor.',
        features: [
            { name: '200 AI-samtal/månad', included: true },
            { name: '2 användare', included: true },
            { name: 'AI-chat i widget', included: true },
            { name: 'Externa integrationer', included: false },
        ],
        highlight: false,
        cta: 'Välj Maja Start',
        href: 'https://dashboard.agentergroup.com/auth/signup?plan=start',
        buttonVariant: 'outline'
    },
    {
        name: 'Maja Pro',
        price: '1 690 kr',
        period: '/mån',
        description: 'För växande team med högre volym och snabbare support.',
        features: [
            { name: '600 AI-samtal/månad', included: true },
            { name: '5 användare', included: true },
            { name: 'AI-chat i widget', included: true },
            { name: 'Prioriterad support', included: true },
            { name: 'Externa integrationer', included: true },
        ],
        highlight: true,
        cta: 'Välj Maja Pro',
        href: 'https://dashboard.agentergroup.com/auth/signup?plan=pro',
        buttonVariant: 'primary'
    },
    {
        name: 'Maja Scale',
        price: 'Custom',
        period: '',
        description: 'För bolag med större volym och stabil drift i skala.',
        features: [
            { name: '2 000 AI-samtal/månad', included: true },
            { name: '15 användare', included: true },
            { name: 'Prioriterad support', included: true },
            { name: 'Externa integrationer', included: true },
            { name: 'Sales-led onboarding', included: true },
        ],
        highlight: false,
        cta: 'Kontakta oss',
        href: null,
        buttonVariant: 'outline',
        footerText: 'Använd Maja för att boka möte'
    }
]

export default function PricingTiers() {
    return (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Background Glow Effects - Reduced intensity for cleaner look */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5D00]/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5D00]/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Priser som <span className="text-[#FF5D00]">skalar</span></h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">Välj den lösning som passar er bäst just nu. Uppgradera eller nedgradera när som helst.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`
                                relative rounded-2xl p-6 flex flex-col h-full
                                ${tier.highlight
                                    ? 'bg-[#1a1a1a] border border-[#FF5D00] shadow-[0_0_30px_rgba(255,93,0,0.15)] ring-1 ring-[#FF5D00]/20'
                                    : 'bg-[#0a0a0a] border border-white/10 hover:border-white/20 hover:bg-[#111]'}
                                transition-all duration-300
                            `}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="bg-[#FF5D00] text-black text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full flex items-center gap-1 shadow-lg">
                                        <Star size={12} fill="currentColor" />
                                        Mest Populär
                                    </div>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-3xl font-bold text-white tracking-tight">{tier.price}</span>
                                    {tier.period && <span className="text-white/40 text-sm">{tier.period}</span>}
                                </div>
                                <p className="text-white/60 text-sm min-h-[60px] leading-relaxed">{tier.description}</p>
                            </div>

                            <div className="flex-grow mb-8 space-y-3">
                                {tier.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${feature.included
                                            ? (tier.highlight ? 'bg-[#FF5D00] text-black' : 'bg-[#FF5D00]/20 text-[#FF5D00]')
                                            : 'bg-white/5 text-white/20'
                                            }`}>
                                            {feature.included ? <Check size={10} strokeWidth={3} /> : <X size={10} strokeWidth={3} />}
                                        </div>
                                        <span className={`text-sm ${feature.included ? 'text-white/90' : 'text-white/30 line-through decoration-white/30'}`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {tier.href ? (
                                <Link
                                    href={tier.href}
                                    className={`
                                        w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all
                                        ${tier.highlight
                                            ? 'bg-[#FF5D00] text-black hover:bg-[#ff7a2e] hover:shadow-[0_0_20px_rgba(255,93,0,0.4)]'
                                            : 'bg-white/10 text-white hover:bg-white/20'}
                                    `}
                                >
                                    {tier.cta}
                                    {tier.highlight && <ArrowRight size={16} />}
                                </Link>
                            ) : (
                                <div
                                    className={`
                                        w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2
                                        ${tier.highlight
                                            ? 'bg-[#FF5D00] text-black'
                                            : 'bg-white/10 text-white cursor-default'}
                                    `}
                                >
                                    {tier.cta}
                                </div>
                            )}

                            {tier.footerText && (
                                <p className="text-center text-white/50 text-xs mt-3 font-medium">
                                    {tier.footerText}
                                </p>
                            )}

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
