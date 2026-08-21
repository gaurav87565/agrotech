'use client'

import { ArrowRight, ShieldCheck, MessageSquareText, Network, LineChart, Sparkles, Sprout, CloudSun, CheckCircle2, ChevronRight } from 'lucide-react'

interface HeroSectionProps {
  onOpenModal: (type: 'get-started' | 'sign-in' | 'partner') => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const trustIndicators = [
    { label: 'Farm Intelligence', icon: LineChart },
    { label: 'Financial Schemes', icon: ShieldCheck },
    { label: 'Regional Advisory', icon: MessageSquareText },
    { label: 'AgriConnect Network', icon: Network },
  ]

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-agro-soft/40 via-agro-cream to-white">
      {/* Background Accent Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-agro-mint/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-agro-sage rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Brand Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-sage border border-agro-forest/15 text-agro-forest text-xs font-semibold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-agro-leaf" />
              <span>Smarter Agriculture • Better Connections</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-agro-dark tracking-tight leading-[1.15]">
              Agriculture, Intelligence &amp; Opportunity —{' '}
              <span className="text-gradient-emerald">Connected.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              AgroTech brings farm insights, agricultural opportunities and ecosystem connections into one intelligent platform designed around the farmer.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenModal('get-started')}
                className="px-7 py-4 text-base font-bold text-white bg-agro-forest hover:bg-agro-dark rounded-xl shadow-lg shadow-agro-forest/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#introducing"
                className="px-7 py-4 text-base font-bold text-agro-dark bg-white hover:bg-agro-sage/50 border border-agro-forest/20 rounded-xl shadow-xs hover:border-agro-forest/40 transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Explore AgroTech</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Grounded Platform Pillars */}
            <div className="pt-6 border-t border-agro-forest/10">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Unified Ecosystem Capabilities
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustIndicators.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-agro-forest/10 shadow-2xs hover:bg-white transition-colors"
                    >
                      <div className="p-1.5 rounded-md bg-agro-sage text-agro-forest">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 leading-tight">
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Professional Farm Console Preview */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-3xl bg-agro-dark text-white p-6 sm:p-7 shadow-2xl border border-emerald-500/20 overflow-hidden">
              
              {/* Card Header: Real Farmer Profile */}
              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-agro-forest flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    SK
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">Suresh Kumar</h3>
                    <p className="text-xs text-emerald-300/80">Ludhiana, Punjab • 8.5 Acres</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Verified Farm Profile
                </span>
              </div>

              {/* Data Cards Grid */}
              <div className="space-y-4">
                
                {/* Soil & Weather Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-950/70 rounded-2xl p-3.5 border border-emerald-800/40">
                    <div className="flex items-center justify-between text-xs text-emerald-300 mb-1">
                      <span>Soil Health</span>
                      <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-base font-bold text-white">Sandy Loam (pH 6.8)</div>
                    <p className="text-[11px] text-emerald-400/80 mt-0.5">High Nitrogen • Moisture 74%</p>
                  </div>

                  <div className="bg-emerald-950/70 rounded-2xl p-3.5 border border-emerald-800/40">
                    <div className="flex items-center justify-between text-xs text-emerald-300 mb-1">
                      <span>Weather Advisory</span>
                      <CloudSun className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-base font-bold text-white">26°C • Moderate</div>
                    <p className="text-[11px] text-emerald-400/80 mt-0.5">Light showers in 48h</p>
                  </div>
                </div>

                {/* AgriConnect Local Dealer Match Banner */}
                <div className="bg-gradient-to-r from-emerald-900/90 to-agro-dark p-4 rounded-2xl border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300">
                      <Network className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-300 font-medium">AgriConnect Network</div>
                      <div className="text-sm font-bold text-white">4 Verified Input Dealers in 10 km</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                </div>

                {/* Government & Financial Opportunities */}
                <div className="bg-emerald-950/90 p-3.5 rounded-2xl border border-amber-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-bold shrink-0">
                    Financial Discovery
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-100">Kisan Credit Card (Subsidized Interest)</p>
                    <p className="text-[10px] text-slate-300">Matched based on your verified land profile</p>
                  </div>
                </div>

              </div>

              {/* Bottom Footer Line */}
              <div className="mt-5 pt-4 border-t border-emerald-800/50 flex items-center justify-between text-xs text-emerald-300/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Unified Platform Active
                </span>
                <span className="font-mono text-[10px] text-emerald-400/60">AGROTECH-V2026</span>
              </div>

            </div>

            {/* Clean Trust Badge */}
            <div className="absolute -bottom-5 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-agro-forest/15 flex items-center gap-3 text-agro-dark hidden sm:flex">
              <div className="p-2 rounded-xl bg-agro-sage text-agro-forest">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold">Unified Agricultural Network</p>
                <p className="text-[11px] text-slate-500">Connecting Farmers, Suppliers &amp; Markets</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
