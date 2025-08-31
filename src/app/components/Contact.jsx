'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

const initial = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (v) => {
    const e = {}
    if (!v.name.trim()) e.name = 'Ange ditt namn.'
    if (!v.phone.trim()) e.phone = 'Ange telefonnummer.'
    if (!v.email.trim()) e.email = 'Ange e-post.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Ogiltig e-postadress.'
    if (!v.message.trim()) e.message = 'Skriv ett meddelande.'
    return e
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((s) => ({ ...s, [name]: value }))
  }

  const onBlur = (e) => {
    const { name } = e.target
    const e2 = validate(values)
    setErrors((s) => ({ ...s, [name]: e2[name] }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate(values)
    setErrors(e2)
    if (Object.keys(e2).length) return
    setSubmitting(true)

    // Simulerad förfrågan
    await new Promise((r) => setTimeout(r, 1200))

    setSubmitting(false)
    setSubmitted(true)
  }

  const reset = () => {
    setValues(initial)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="offert" className="section">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Begär offert</h2>
          <p className="mt-3 text-white/70">Berätta kort om ditt projekt så återkommer vi snabbt.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onSubmit={onSubmit}
                  className="glass rounded-2xl p-6 md:p-8 space-y-5 shadow-soft"
                >
                  <div>
                    <label className="block text-sm mb-2 text-white/80">Namn</label>
                    <input
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      onBlur={onBlur}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-rose-400/60' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500`}
                      placeholder="För- och efternamn"
                    />
                    {errors.name && <p className="mt-1 text-sm text-rose-300">{errors.name}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2 text-white/80">Telefon</label>
                      <input
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={`w-full bg-white/5 border ${errors.phone ? 'border-rose-400/60' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500`}
                        placeholder="070-123 45 67"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-rose-300">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-white/80">E-post</label>
                      <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={`w-full bg-white/5 border ${errors.email ? 'border-rose-400/60' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500`}
                        placeholder="namn@exempel.se"
                      />
                      {errors.email && <p className="mt-1 text-sm text-rose-300">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-white/80">Meddelande</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      onBlur={onBlur}
                      className={`w-full bg-white/5 border ${errors.message ? 'border-rose-400/60' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500`}
                      placeholder="Beskriv ditt projekt kort..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-rose-300">{errors.message}</p>}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="h-4 w-4" /> {submitting ? 'Skickar...' : 'Skicka förfrågan'}
                    </button>
                    <span className="text-white/50 text-sm">Vi svarar normalt inom 24h.</span>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl p-8 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                    <div>
                      <h3 className="text-2xl font-semibold">Tack! Din förfrågan är mottagen.</h3>
                      <p className="mt-2 text-white/70">Vi återkommer snart till {values.email || 'din e-post'}.</p>
                      <div className="mt-6 flex gap-3">
                        <button className="btn btn-primary" onClick={reset}>Skicka ny förfrågan</button>
                        <a className="btn btn-secondary" href="#tjanster">Se tjänster</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold">Varför välja oss?</h3>
              <ul className="space-y-2 text-white/80 list-disc list-inside">
                <li>Fast pris & tydlig tidsplan</li>
                <li>Certifierade hantverkare</li>
                <li>Trygg kommunikation under hela projektet</li>
                <li>Nöjd-kund-garanti</li>
              </ul>
              <div className="pt-2 text-white/60 text-sm">Vill du hellre ringa? <a className="text-brand-300 hover:text-brand-200" href="tel:+46123456789">012-345 67 89</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
