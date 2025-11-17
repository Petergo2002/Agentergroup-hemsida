'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '24/7', label: 'tillgänglig' },
    { number: 'AI', label: 'mötesbokning' },
    { number: '5+', label: 'kalenderintegrationer' },
    { number: '2+', label: 'språk (sv/en)' },
  ]

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors group min-w-[140px]"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-brand-500 group-hover:from-brand-200 group-hover:to-brand-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
