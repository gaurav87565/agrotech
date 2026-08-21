'use client'

import { Sprout, Users, Database, Handshake, ShieldCheck } from 'lucide-react'

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 md:py-28 bg-white border-t border-agro-forest/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-agro-sage border border-agro-forest/15 text-agro-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Sprout className="w-3.5 h-3.5 text-agro-leaf" />
            <span>Our Core Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-agro-dark tracking-tight leading-tight">
            Building a More Connected Future for Agriculture.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Our vision is to create a digital layer that connects farmers with the information, opportunities and people they need to make better agricultural decisions.
          </p>
        </div>

        {/* Vision Ecosystem Architecture Diagram */}
        <div className="max-w-3xl mx-auto bg-stone-50/90 border border-agro-forest/15 rounded-3xl p-8 sm:p-12 text-center shadow-lg relative">
          
          {/* Top Node: FARMERS */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border-2 border-emerald-500/40 text-agro-dark font-extrabold text-lg shadow-md mb-4">
            <Users className="w-6 h-6 text-emerald-600" />
            <span>FARMERS</span>
          </div>

          {/* Vertical Double Arrow */}
          <div className="my-2 flex justify-center">
            <div className="text-agro-leaf font-extrabold text-xl font-mono">↕</div>
          </div>

          {/* Central Node: AGROTECH */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-agro-forest text-white font-extrabold text-xl shadow-xl border-2 border-agro-mint mb-8">
            <Sprout className="w-7 h-7 text-agro-mint" />
            <span>AGROTECH</span>
          </div>

          {/* Three Radial Branches (Data, Partners, Opportunities) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            
            {/* Branch 1: DATA */}
            <div className="p-4 rounded-2xl bg-white border border-agro-forest/10 shadow-xs">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-agro-dark text-base">DATA</h4>
              <p className="text-[11px] text-slate-500 mt-1">Soil, Weather &amp; Crops</p>
            </div>

            {/* Branch 2: PARTNERS */}
            <div className="p-4 rounded-2xl bg-white border border-agro-forest/10 shadow-xs">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Handshake className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-agro-dark text-base">PARTNERS</h4>
              <p className="text-[11px] text-slate-500 mt-1">Suppliers &amp; Buyers</p>
            </div>

            {/* Branch 3: OPPORTUNITIES */}
            <div className="p-4 rounded-2xl bg-white border border-agro-forest/10 shadow-xs">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-agro-dark text-base">OPPORTUNITIES</h4>
              <p className="text-[11px] text-slate-500 mt-1">Finance &amp; Services</p>
            </div>

          </div>

          {/* Takeaway Statement */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-base font-bold text-agro-forest">
              One platform connecting the agricultural ecosystem around the people who matter most — farmers.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
