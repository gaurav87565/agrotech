'use client'

import { useState } from 'react'
import { X, Sprout, CheckCircle2, ArrowRight, Shield, User, Store, Landmark } from 'lucide-react'

interface InteractiveModalsProps {
  modalType: 'get-started' | 'sign-in' | 'partner' | null
  onClose: () => void
}

export default function InteractiveModals({ modalType, onClose }: InteractiveModalsProps) {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState<'farmer' | 'supplier' | 'buyer'>('farmer')
  const [submitted, setSubmitted] = useState(false)
  const [phone, setPhone] = useState('')

  if (!modalType) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const resetAndClose = () => {
    setStep(1)
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-agro-dark/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-agro-forest/20 overflow-hidden relative">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-agro-forest to-emerald-900 text-white relative">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
              AgroTech Ecosystem
            </span>
          </div>

          <h3 className="text-xl font-bold text-white">
            {modalType === 'get-started' && 'Join AgroTech Platform'}
            {modalType === 'sign-in' && 'Sign In to AgroTech'}
            {modalType === 'partner' && 'Partner with AgroTech'}
          </h3>
          <p className="text-xs text-emerald-100/80 mt-1">
            {modalType === 'get-started' && 'Get connected to farm insights, financial options & verified partners.'}
            {modalType === 'sign-in' && 'Access your farm dashboard, assistant history & AgriConnect matches.'}
            {modalType === 'partner' && 'Integrate your supplier inventory, buying demands or services.'}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-agro-dark">Welcome to AgroTech!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you for connecting with us. Your registration request has been confirmed. An AgroTech onboarding specialist will verify your profile shortly.
              </p>
              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-agro-forest hover:bg-agro-dark text-white font-bold text-sm rounded-xl transition-colors shadow-md"
              >
                Return to Landing Page
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Modal Type Specific Fields */}
              {modalType === 'get-started' && (
                <>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase">I am joining as a:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'farmer', label: 'Farmer', icon: User },
                        { id: 'supplier', label: 'Supplier', icon: Store },
                        { id: 'buyer', label: 'Partner/Buyer', icon: Landmark },
                      ].map((item) => {
                        const Icon = item.icon
                        const isSelected = role === item.id
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setRole(item.id as any)}
                            className={`p-3 rounded-xl border text-center text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                              isSelected
                                ? 'bg-agro-sage border-agro-forest text-agro-forest shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name / Entity Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Singh"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-agro-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (For OTP Verification)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-agro-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">State &amp; District</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ludhiana, Punjab"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-agro-forest"
                    />
                  </div>
                </>
              )}

              {modalType === 'sign-in' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Registered Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-agro-forest"
                    />
                  </div>
                  <div className="p-3 bg-agro-sage/60 rounded-xl text-xs text-agro-forest flex items-center gap-2">
                    <Shield className="w-4 h-4 shrink-0 text-agro-leaf" />
                    <span>We will send a 4-digit security code via SMS.</span>
                  </div>
                </>
              )}

              {modalType === 'partner' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Organization / Business Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Agri Inputs Pvt Ltd"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-agro-forest"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Partnership Category</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-agro-forest bg-white">
                      <option>Seed / Fertilizer Supplier</option>
                      <option>Equipment &amp; Machinery Dealer</option>
                      <option>Institutional Crop Buyer</option>
                      <option>Financial Services Provider</option>
                      <option>Agronomy / Soil Testing Service</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email or Phone</label>
                    <input
                      type="text"
                      required
                      placeholder="partner@agriprovider.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-agro-forest"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-agro-forest hover:bg-agro-dark text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-4"
              >
                <span>{modalType === 'sign-in' ? 'Send Verification OTP' : 'Submit & Connect'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
