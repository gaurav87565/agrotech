'use client'

import { Activity, Sprout, Landmark, Network, MessageSquareText, CloudSun, AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react'

interface CoreFeaturesSectionProps {
  onOpenModal: (type: 'get-started' | 'sign-in' | 'partner') => void
}

export default function CoreFeaturesSection({ onOpenModal }: CoreFeaturesSectionProps) {
  return (
    <section id="features" className="py-20 md:py-28 bg-stone-50/70 border-t border-agro-forest/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-sage border border-agro-forest/15 text-agro-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-agro-leaf" />
            <span>Integrated Platform Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-agro-dark tracking-tight">
            Everything Your Farm Needs to Move Forward.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Integrated tools and verified connections engineered to simplify complex agricultural decisions for every farmer.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Farm Intelligence */}
          <div className="p-7 rounded-3xl bg-white border border-agro-forest/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-agro-sage text-agro-forest flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-agro-dark mb-3">
                Farm Intelligence
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Understand important information about your farm, soil and agricultural profile.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-agro-forest">
              <span>Soil &amp; Field Telemetry</span>
              <CheckCircle2 className="w-4 h-4 text-agro-leaf" />
            </div>
          </div>

          {/* Card 2: Smart Crop Insights */}
          <div className="p-7 rounded-3xl bg-white border border-agro-forest/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-agro-dark mb-3">
                Smart Crop Insights
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Receive crop recommendations based on available farm and environmental information.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
              <span>Seasonal Agronomy Advisory</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
          </div>

          {/* Card 3: Financial Opportunities (With Disclaimers) */}
          <div className="p-7 rounded-3xl bg-white border border-agro-forest/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-agro-dark mb-3">
                Financial Opportunities
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Explore potentially relevant agricultural loan schemes and financial opportunities.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] text-amber-900 leading-snug">
              <div className="flex items-center gap-1.5 font-bold mb-0.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Information &amp; Aggregation Hub</span>
              </div>
              AgroTech connects you with options; we do not directly issue or approve loans.
            </div>
          </div>

          {/* Card 4: AgriConnect (VISUALLY HIGHLIGHTED FEATURE) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-agro-dark via-agro-forest to-emerald-950 text-white border-2 border-emerald-400/40 shadow-2xl hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1 flex flex-col justify-between group relative">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-extrabold tracking-wider uppercase border border-emerald-400/30">
              Featured Highlight
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3 flex items-center gap-2">
                AgriConnect
                <ArrowUpRight className="w-5 h-5 text-emerald-400" />
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed mb-6">
                Connect directly with verified suppliers, seed vendors, fertilizer providers, equipment providers, buyers, and agricultural service providers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-emerald-300 font-semibold mb-2">Ecosystem Network</div>
              <div className="flex flex-wrap gap-1.5">
                {['Seed Suppliers', 'Fertilizers', 'Equipment', 'Service Providers', 'Buyers'].map((item, idx) => (
                  <span key={idx} className="text-[10px] font-medium bg-emerald-950/80 border border-emerald-500/30 text-emerald-200 px-2.5 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onOpenModal('get-started')}
                className="w-full mt-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-agro-dark font-bold text-xs rounded-xl shadow-md transition-colors text-center"
              >
                Join AgriConnect Network
              </button>
            </div>
          </div>

          {/* Card 5: AgroTech Advisory & Support */}
          <div className="p-7 rounded-3xl bg-white border border-agro-forest/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <MessageSquareText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-agro-dark mb-3">
                AgroTech Assistant
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Ask questions and get help through an intelligent agricultural assistant tailored to your region.
              </p>
              
              <div className="space-y-1.5 pt-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase">Example Questions:</p>
                <div className="text-xs text-emerald-900 bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                  "What crops are suitable for my soil?"
                </div>
                <div className="text-xs text-emerald-900 bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                  "Show suppliers near me."
                </div>
                <div className="text-xs text-emerald-900 bg-emerald-50/60 p-2 rounded-lg border border-emerald-100">
                  "What financial opportunities are available?"
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Climate Insights */}
          <div className="p-7 rounded-3xl bg-white border border-agro-forest/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <CloudSun className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-agro-dark mb-3">
                Climate Insights
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Access weather and environmental information relevant to agricultural decision-making.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
              <span>Hyperlocal Weather &amp; Loss Prevention</span>
              <CheckCircle2 className="w-4 h-4 text-sky-500" />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
