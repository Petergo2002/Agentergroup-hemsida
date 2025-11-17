'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVapiLoaded, setIsVapiLoaded] = useState(false)

  const loadVapiWidget = () => {
    if (!isVapiLoaded) {
      // Load Vapi script only when user clicks
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js'
      script.async = true
      script.onload = () => {
        const widget = document.createElement('vapi-widget')
        widget.setAttribute('public-key', '29e5feab-ee83-436f-9b44-917eefb2bd59')
        widget.setAttribute('assistant-id', 'c2699eb4-1b23-4109-9727-1e01a66dde3f')
        widget.setAttribute('mode', 'voice')
        widget.setAttribute('theme', 'dark')
        widget.setAttribute('base-bg-color', '#0a0a0a')
        widget.setAttribute('accent-color', '#FF6E00')
        widget.setAttribute('cta-button-color', '#FF6E00')
        widget.setAttribute('cta-button-text-color', '#ffffff')
        widget.setAttribute('border-radius', 'large')
        widget.setAttribute('size', 'small')
        widget.setAttribute('position', 'bottom-right')
        widget.setAttribute('title', 'TESTA VÅR AI-RECEPTIONIST')
        widget.setAttribute('start-button-text', 'Starta samtal')
        widget.setAttribute('end-button-text', 'Avsluta samtal')
        widget.setAttribute('chat-first-message', 'Hej! Jag är er AI-receptionist. Hur kan jag hjälpa er idag?')
        widget.setAttribute('chat-placeholder', 'Skriv ditt meddelande...')
        widget.setAttribute('voice-show-transcript', 'true')
        widget.setAttribute('consent-required', 'true')
        widget.setAttribute('consent-title', 'Villkor och samtycke')
        widget.setAttribute('consent-content', 'Genom att klicka "Godkänn" och varje gång jag interagerar med denna AI-agent, samtycker jag till inspelning, lagring och delning av min kommunikation med tredjepartsleverantörer enligt våra användarvillkor.')
        widget.setAttribute('consent-storage-key', 'vapi_widget_consent')
        
        // Style the widget to not interfere
        widget.style.position = 'fixed'
        widget.style.bottom = '20px'
        widget.style.right = '20px'
        widget.style.zIndex = '10000'
        
        document.body.appendChild(widget)
        setIsVapiLoaded(true)
        setIsOpen(false) // Close our custom widget
      }
      document.head.appendChild(script)
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] rounded-full shadow-lg shadow-[rgba(253,109,75,0.4)] flex items-center justify-center text-white hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] animate-ping opacity-20"></div>
      </motion.div>

      {/* Chat Widget Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] p-4">
              <h3 className="text-white font-semibold text-lg">Testa vår AI-receptionist</h3>
              <p className="text-white/90 text-sm">Upplev framtidens kundservice</p>
            </div>

            {/* Content */}
            <div className="p-6 text-white">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Hej! Jag är er AI-receptionist. Klicka på knappen nedan för att starta en röstkonversation och testa hur jag kan hjälpa era kunder.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Tillgänglig 24/7
                  </div>
                  <p className="text-sm text-white/70">
                    ✓ Mötesbokning<br/>
                    ✓ Kundservice<br/>
                    ✓ Flerspråkig support
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={loadVapiWidget}
                    className="w-full bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Starta röstsamtal
                  </button>
                  
                  <a
                    href="/#demo"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
                  >
                    Boka demo
                  </a>
                </div>

                <p className="text-xs text-white/50 text-center">
                  Genom att använda tjänsten godkänner du våra villkor
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
