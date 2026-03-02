'use client'
import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

const tiers = [
  {
    name: 'Maja Free',
    price: '$0',
    period: '/mo',
    description: 'Free contact capture widget for your website. No AI included.',
    features: [
      { name: 'Widget contact form', included: true },
      { name: 'Automatic lead capture', included: true },
      { name: '1 user', included: true },
      { name: 'AI chat', included: false },
      { name: 'Cases', included: false },
      { name: 'Team members', included: false },
    ],
    highlight: false,
    cta: 'Choose Maja Free',
    href: 'https://dashboard.agentergroup.com/auth/signup?plan=free',
  },
  {
    name: 'Maja Start',
    price: '$49',
    period: '/mo',
    description: 'For smaller teams that want to automate common customer questions.',
    features: [
      { name: '200 AI conversations/month', included: true },
      { name: '2 users', included: true },
      { name: 'AI chat in widget', included: true },
      { name: 'External integrations', included: false },
    ],
    highlight: false,
    cta: 'Choose Maja Start',
    href: 'https://dashboard.agentergroup.com/auth/signup?plan=start',
  },
  {
    name: 'Maja Pro',
    price: '$99',
    period: '/mo',
    description: 'For growing teams with higher conversation volume and faster support needs.',
    features: [
      { name: '600 AI conversations/month', included: true },
      { name: '5 users', included: true },
      { name: 'AI chat in widget', included: true },
      { name: 'Priority support', included: true },
      { name: 'External integrations', included: true },
    ],
    highlight: true,
    cta: 'Choose Maja Pro',
    href: 'https://dashboard.agentergroup.com/auth/signup?plan=pro',
  },
  {
    name: 'Maja Scale',
    price: 'Custom',
    period: '',
    description: 'For larger organizations with high volume and enterprise-grade requirements.',
    features: [
      { name: '2,000 AI conversations/month', included: true },
      { name: '15 users', included: true },
      { name: 'Priority support', included: true },
      { name: 'External integrations', included: true },
      { name: 'Sales-led onboarding', included: true },
    ],
    highlight: false,
    cta: 'Contact sales',
    href: null,
    footerText: 'Use Maja to book a meeting',
  },
]

export default function PricingTiers() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5D00]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5D00]/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Pricing that <span className="text-[#FF5D00]">scales</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Pick what fits your team today. Upgrade or downgrade anytime.</p>
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
                    Most Popular
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
                      ? tier.highlight
                        ? 'bg-[#FF5D00] text-black'
                        : 'bg-[#FF5D00]/20 text-[#FF5D00]'
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
                <div className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 bg-white/10 text-white cursor-default">
                  {tier.cta}
                </div>
              )}

              {tier.footerText && <p className="text-center text-white/50 text-xs mt-3 font-medium">{tier.footerText}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
