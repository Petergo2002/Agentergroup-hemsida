'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const initial = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(() => {
    if (typeof window === 'undefined') return false
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('submitted') === 'true'
  })
  const [redirectUrl] = useState(() => {
    if (typeof window === 'undefined') return ''
    return `${window.location.origin}${window.location.pathname}?submitted=true#demo`
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('submitted') === 'true') {
      window.history.replaceState({}, '', window.location.pathname + '#demo')
    }
  }, [])

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
    if (Object.keys(e2).length) {
      return
    }

    try {
      const form = e.target
      const data = new FormData(form)

      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
        setValues(initial)
      } else {
        // Optional: handle server error from Formspree
        console.error('Formspree submission failed')
      }
    } catch (error) {
      console.error('Form submission error', error)
    }
  }

  const reset = () => {
    setValues(initial)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="demo" className="section scroll-mt-28 md:scroll-mt-32">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold">Boka demo</h2>
          <p className="mt-3 text-white/70">Fyll i dina uppgifter så bokar vi en kostnadsfri demo och visar hur AI-receptionisten fungerar.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onSubmit={onSubmit}
              action="https://formspree.io/f/myzlalke"
              method="POST"
              className="glass rounded-2xl p-6 md:p-8 space-y-5 shadow-soft"
            >
              <input type="hidden" name="_next" value={redirectUrl} />
              <input type="hidden" name="_subject" value="Ny demo-förfrågan" />
              <input type="hidden" name="_captcha" value="false" />
              
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
                    type="tel"
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
                  className="btn btn-primary"
                >
                  <Send className="h-4 w-4" /> Boka demo
                </button>
                <span className="text-white/50 text-sm">Vi svarar normalt inom 24h.</span>
              </div>
            </motion.form>
            ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-8 shadow-soft text-center"
            >
              <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Tack!</h3>
              <p className="text-white/80 mb-6">Vi återkommer så snart vi kan.</p>
              <button 
                onClick={reset}
                className="btn btn-secondary mr-4"
              >
                Skicka nytt meddelande
              </button>
              <Link href="/" className="btn btn-primary">
                Återgå till hemsidan
              </Link>
            </motion.div>
            )}
          </div>

          <div>
            <div className="glass rounded-2xl p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-semibold">Varför välja oss?</h3>
              <ul className="space-y-2 text-white/80 list-disc list-inside">
                <li>Alltid tillgänglig 24/7</li>
                <li>Intelligent mötesbokning</li>
                <li>Säker datahantering</li>
                <li>Snabb implementering</li>
              </ul>
              <div className="pt-2 text-white/60 text-sm">Kontakta oss på <a className="text-brand-300 hover:text-brand-200" href="mailto:info@agentergroup.com">info@agentergroup.com</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
