'use client'

import { UserPlus, Compass, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Add basic information about yourself and your farm.',
      icon: UserPlus,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      number: '02',
      title: 'Understand Your Farm',
      description: 'Get organized insights based on your available farm, soil and environmental information.',
      icon: Compass,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      number: '03',
      title: 'Explore Opportunities',
      description: 'Discover crop insights, financial opportunities and useful agricultural services.',
      icon: Lightbulb,
      color: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      number: '04',
      title: 'Connect & Grow',
      description: 'Connect with suppliers, vendors, buyers and other relevant agricultural partners.',
      icon: TrendingUp,
      color: 'bg-agro-sage text-agro-forest border-agro-forest/20',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-sage border border-agro-forest/15 text-agro-forest text-xs font-bold uppercase tracking-wider mb-4">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-agro-dark tracking-tight">
            Simple for Farmers. Powerful Behind the Scenes.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Four simple steps to unlock the full potential of your farm and join the connected ecosystem.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === steps.length - 1
            return (
              <div key={step.number} className="relative group">
                
                {/* Step Card */}
                <div className="h-full p-7 rounded-3xl bg-slate-50/70 border border-agro-forest/10 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold text-agro-forest/40 group-hover:text-agro-leaf transition-colors font-mono">
                        {step.number}
                      </span>
                      <div className={`p-3 rounded-2xl border ${step.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-agro-dark mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <span>Step {step.number} of 04</span>
                  </div>
                </div>

                {/* Arrow Connector for Desktop */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                )}

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
