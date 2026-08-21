'use client'

import { AlertTriangle, Languages, CloudRain, Layers, Unplug, UserX } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      id: 'access',
      title: 'Access',
      description: 'Farmers can face challenges accessing relevant financial opportunities and agricultural services.',
      icon: AlertTriangle,
      badge: 'Opportunity Gap',
    },
    {
      id: 'language',
      title: 'Language',
      description: "Digital platforms can become difficult to use when they are not accessible in the farmer's preferred language.",
      icon: Languages,
      badge: 'Usability Barrier',
    },
    {
      id: 'climate',
      title: 'Climate Risk',
      description: 'Weather events and crop losses require faster and better-informed response workflows.',
      icon: CloudRain,
      badge: 'Unpredictability',
    },
    {
      id: 'fragmentation',
      title: 'Fragmentation',
      description: 'Farm, soil, weather and agricultural information are often spread across disconnected systems.',
      icon: Layers,
      badge: 'Data Silos',
    },
    {
      id: 'connectivity',
      title: 'Connectivity',
      description: 'Farmers often lack direct connections with suppliers, vendors, buyers and other agricultural stakeholders.',
      icon: Unplug,
      badge: 'Ecosystem Isolation',
    },
  ]

  return (
    <section id="problem" className="py-20 md:py-28 bg-stone-50/80 border-y border-agro-forest/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <UserX className="w-3.5 h-3.5 text-red-500" />
            <span>Current Ecosystem Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-agro-dark tracking-tight">
            Agriculture Is Still Fragmented.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Farmers often have to navigate multiple disconnected systems to access information, opportunities and the people they need to grow their farms.
          </p>
        </div>

        {/* Visual Graphic: Disconnected System Graphic */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white border border-agro-forest/10 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              The Current Reality — Isolated Information &amp; Services
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-center text-center">
            {['Weather Apps', 'Bank Portals', 'Local Markets', 'Govt Forms', 'Soil Labs'].map((sys, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-dashed border-slate-300 relative group hover:border-red-300 transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 absolute -top-1 -right-1 animate-pulse" />
                <p className="text-xs font-bold text-slate-700">{sys}</p>
                <p className="text-[10px] text-red-500 font-medium mt-1">Disconnected</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              ⚡ Result: High friction, lost opportunities, delayed decisions, and lack of direct ecosystem links.
            </p>
          </div>
        </div>

        {/* 5 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon
            const isWide = idx === 3 || idx === 4
            return (
              <div
                key={prob.id}
                className={`p-7 rounded-2xl bg-white border border-agro-forest/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      {prob.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-agro-dark mb-2.5">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-red-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  Fragmented Workflow
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
