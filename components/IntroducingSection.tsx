'use client'

import { Sprout, CloudSun, LandPlot, ShieldCheck, Cpu, Store, Handshake, ArrowDown } from 'lucide-react'

export default function IntroducingSection() {
  const ecosystemNodes = [
    { title: 'Farm & Soil Insights', icon: LandPlot, desc: 'Real-time soil analysis & crop suitability', color: 'border-emerald-500/30 bg-emerald-50 text-emerald-800' },
    { title: 'Weather Intelligence', icon: CloudSun, desc: 'Hyperlocal weather risk & irrigation alerts', color: 'border-emerald-500/30 bg-emerald-50 text-emerald-800' },
    { title: 'Financial Opportunities', icon: ShieldCheck, desc: 'Curated agricultural loan & scheme discovery', color: 'border-amber-500/30 bg-amber-50 text-amber-900' },
    { title: 'AI Assistance', icon: Cpu, desc: 'Multilingual query support & advisory', color: 'border-emerald-500/30 bg-emerald-50 text-emerald-800' },
    { title: 'Suppliers & Vendors', icon: Store, desc: 'Direct links to seeds, fertilizer & machinery', color: 'border-emerald-500/30 bg-emerald-50 text-emerald-800' },
    { title: 'Buyers & Partners', icon: Handshake, desc: 'Fair market access & distributor networks', color: 'border-emerald-500/30 bg-emerald-50 text-emerald-800' },
  ]

  return (
    <section id="introducing" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Glow bg accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-agro-mint/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-sage border border-agro-forest/15 text-agro-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Sprout className="w-3.5 h-3.5 text-agro-leaf" />
            <span>The Unified Digital Layer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-agro-dark tracking-tight">
            One Platform. A Connected Agricultural Ecosystem.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            AgroTech brings important agricultural insights, opportunities and ecosystem connections closer to the farmer through one unified digital experience.
          </p>
        </div>

        {/* Visual Flow Architecture */}
        <div className="max-w-4xl mx-auto">
          
          {/* Step 1: Top Node (Farmer) */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="px-6 py-3.5 rounded-2xl bg-white border-2 border-slate-300 shadow-md text-agro-dark font-extrabold text-base flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
              <span>THE FARMER</span>
            </div>
            <div className="h-8 w-0.5 bg-gradient-to-b from-slate-300 to-agro-leaf my-1" />
            <ArrowDown className="w-5 h-5 text-agro-leaf -mt-2" />
          </div>

          {/* Step 2: Core Platform Node (AgroTech) */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-agro-dark text-white border-2 border-agro-leaf shadow-2xl text-center mb-8">
            <div className="absolute top-0 right-0 px-4 py-1 bg-agro-leaf text-agro-dark text-xs font-extrabold rounded-bl-xl rounded-tr-2xl uppercase">
              Intelligence &amp; Connectivity Hub
            </div>
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-agro-forest flex items-center justify-center text-agro-mint border border-emerald-500/30">
              <Sprout className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              AgroTech Platform
            </h3>
            <p className="text-sm text-emerald-200/90 mt-2 max-w-lg mx-auto">
              Aggregates data, verifies partners, processes AI insights, and opens financial pathways.
            </p>

            <div className="mt-5 pt-4 border-t border-emerald-800/60 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              <span>Insights</span> • <span>Opportunities</span> • <span>Connections</span>
            </div>
          </div>

          {/* Connection Lines Indicator */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="h-6 w-0.5 bg-gradient-to-b from-agro-leaf to-emerald-300" />
            <ArrowDown className="w-5 h-5 text-agro-forest -mt-1" />
          </div>

          {/* Step 3: Connected Nodes Grid (6 Nodes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ecosystemNodes.map((node, idx) => {
              const Icon = node.icon
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border ${node.color} shadow-xs hover:shadow-md transition-all duration-200 group flex items-start gap-4`}
                >
                  <div className="p-3 rounded-xl bg-white text-agro-forest shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-agro-dark leading-snug">
                      {node.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
