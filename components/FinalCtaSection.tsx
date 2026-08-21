'use client'

import { ArrowRight, Handshake, Sprout } from 'lucide-react'

interface FinalCtaSectionProps {
  onOpenModal: (type: 'get-started' | 'sign-in' | 'partner') => void
}

export default function FinalCtaSection({ onOpenModal }: FinalCtaSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-agro-dark via-agro-forest to-emerald-950 text-white relative overflow-hidden">
      
      {/* Background glow graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider">
          <Sprout className="w-4 h-4 text-emerald-400" />
          <span>Get Started Today</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
          The Future of Agriculture Starts with Better Connections.
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Join AgroTech as we build a smarter, more connected agricultural ecosystem.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenModal('get-started')}
            className="w-full sm:w-auto px-8 py-4 text-base font-extrabold text-agro-dark bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => onOpenModal('partner')}
            className="w-full sm:w-auto px-8 py-4 text-base font-extrabold text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Handshake className="w-5 h-5 text-emerald-400" />
            <span>Partner With Us</span>
          </button>
        </div>

      </div>
    </section>
  )
}
