import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import ToolsShowcase from './components/ToolsShowcase'
import WebsiteDevelopment from './components/WebsiteDevelopment'
import Security from './components/Security'
import FAQ from './components/FAQ'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VapiWidget from './components/VapiWidget'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <ToolsShowcase />
        <About />
        {/* Visste du att - Snippet */}
        <section className="relative py-8 md:py-10 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-center backdrop-blur-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-300 border border-white/10 mb-4">
                Visste du att?
              </span>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                34% av jobbmöjligheter försvinner när kandidater missar första samtalet.
              </p>
              <p className="mt-3 text-white/70">
                Vår AI‑receptionist säkerställer att inget viktigt samtal någonsin missas.
              </p>
            </div>
          </div>
        </section>
        <Security />
        <FAQ />
        <Process />
        <WebsiteDevelopment />
        <Contact />
      </main>
      <Footer />
      <VapiWidget />
    </div>
  )
}
