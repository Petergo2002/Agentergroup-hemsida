'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, Mic, MicOff } from 'lucide-react'
import Vapi from '@vapi-ai/web'

export default function VapiWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)
  const [vapi, setVapi] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isVisible, setIsVisible] = useState(true)

  const handleStartCall = async () => {
    if (!hasAcceptedTerms) {
      setShowTerms(true)
      return
    }

    setError(null)
    setIsLoading(true)

    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID

    if (!vapi) {
      setError('Voice assistant not initialized')
      setIsLoading(false)
      return
    }

    if (!assistantId) {
      setError('Assistant ID not configured')
      setIsLoading(false)
      return
    }

    try {
      await vapi.start(assistantId)
      setIsOpen(true)
    } catch (error) {
      setError('Failed to start call: ' + (error.message || 'Unknown error'))
      setIsLoading(false)
      setIsConnected(false)
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    // Check if user has previously accepted terms
    const acceptedTerms = localStorage.getItem('vapi_terms_accepted')
    if (acceptedTerms === 'true') {
      setHasAcceptedTerms(true)
    }

    // Initialize Vapi directly via npm package
    const setup = async () => {
      try {
        const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY
        if (!publicKey) {
          setError('Missing API key')
          return
        }

        const vapiInstance = new Vapi(publicKey)

        // Add event listeners
        vapiInstance.on('call-start', () => {
          setIsConnected(true)
          setIsLoading(false)
        })

        vapiInstance.on('call-end', () => {
          setIsConnected(false)
          setIsLoading(false)
        })

        vapiInstance.on('error', (error) => {
          setError('Call failed: ' + (error?.message || 'Unknown error'))
          setIsLoading(false)
          setIsConnected(false)
        })

        setVapi(vapiInstance)
      } catch (error) {
        setError('Failed to initialize voice assistant')
      }
    }

    setup()

    // Listen for custom event to open widget
    const handleOpenWidget = () => {
      if (vapi) {
        handleStartCall()
      } else {
        // If Vapi isn't ready yet, show the widget with loading state
        setIsOpen(true)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('openVapiWidget', handleOpenWidget)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('openVapiWidget', handleOpenWidget)
      }
    }
  }, [])

  const handleEndCall = async () => {
    if (vapi) {
      try {
        await vapi.stop()
        setIsConnected(false)
        setIsOpen(false)
      } catch {
      }
    }
  }

  const acceptTerms = () => {
    setHasAcceptedTerms(true)
    localStorage.setItem('vapi_terms_accepted', 'true')
    setShowTerms(false)
    handleStartCall()
  }

  return (
    <>
      {/* Terms Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-bold text-white mb-4">Villkor och samtycke</h3>
              <p className="text-slate-300 text-sm mb-6">
                Genom att klicka "Godkänn" och varje gång jag interagerar med denna AI-assistent, 
                samtycker jag till inspelning, lagring och delning av min kommunikation med 
                tredjepartsleverantörer, och enligt våra användarvillkor.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowTerms(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  Avbryt
                </button>
                <button
                  onClick={acceptTerms}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] text-white font-medium hover:from-[#ff7b62] hover:to-[#ff8a1a] transition-colors"
                >
                  Godkänn
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Widget */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 w-80 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">Testa AI Assistent</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-red-600/20 border border-red-600/30 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                  <button
                    onClick={() => setError(null)}
                    className="mt-2 text-xs text-red-300 hover:text-red-200"
                  >
                    Stäng
                  </button>
                </div>
              )}

              {isConnected ? (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] flex items-center justify-center animate-pulse">
                      <Mic className="text-white" size={24} />
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">Samtalet är aktivt. Prata nu!</p>
                  <button
                    onClick={handleEndCall}
                    className="w-full px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                  >
                    Avsluta samtal
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-slate-300 text-sm mb-4">
                    Prata med vår AI-assistent för att få hjälp med dina frågor.
                  </p>
                  <button
                    onClick={handleStartCall}
                    disabled={isLoading || !vapi}
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] hover:from-[#ff7b62] hover:to-[#ff8a1a] text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Startar...' : 'Starta samtal'}
                  </button>
                  {!vapi && (
                    <p className="text-slate-500 text-xs mt-2">Laddar röstassistent...</p>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Combined Button with Text */}
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={() => isConnected ? handleEndCall() : handleStartCall()}
            className={`flex items-center gap-2 rounded-full shadow-lg px-5 py-3 transition-all ${
              isConnected 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] hover:from-[#ff7b62] hover:to-[#ff8a1a]'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {isConnected ? (
              <>
                <MicOff className="text-white" size={20} />
                <span className="text-white font-medium text-sm">Avsluta samtal</span>
              </>
            ) : (
              <>
                <Phone className="text-white" size={20} />
                <span className="text-white font-medium text-sm">Testa vår AI assistent</span>
              </>
            )}
          </motion.button>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}