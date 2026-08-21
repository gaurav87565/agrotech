'use client'

import { useState } from 'react'
import { Network, Sprout, TestTube, Tractor, Handshake, ShoppingCart, Truck, ArrowRight, CheckCircle2, User } from 'lucide-react'

interface AgriConnectSectionProps {
  onOpenModal: (type: 'get-started' | 'sign-in' | 'partner') => void
}

export default function AgriConnectSection({ onOpenModal }: AgriConnectSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('seeds')

  const partnerNodes = [
    {
      id: 'seeds',
      label: 'Seed Suppliers',
      emoji: '🌱',
      icon: Sprout,
      color: 'bg-emerald-500 text-white',
      badge: 'Verified Varieties',
      detail: 'Certified high-yield hybrid & organic seed providers in your district.',
      activeCount: '14 Providers Active',
    },
    {
      id: 'fertilizer',
      label: 'Fertilizer Providers',
      emoji: '🧪',
      icon: TestTube,
      color: 'bg-teal-600 text-white',
      badge: 'Soil Specific',
      detail: 'Bio-fertilizers, micronutrients, and organic soil amendments.',
      activeCount: '9 Suppliers Active',
    },
    {
      id: 'equipment',
      label: 'Equipment Vendors',
      emoji: '🚜',
      icon: Tractor,
      color: 'bg-amber-600 text-white',
      badge: 'Rental & Sales',
      detail: 'Tractors, harvesters, solar pump dealers & machinery rental networks.',
      activeCount: '22 Dealers Active',
    },
    {
      id: 'services',
      label: 'Agri Service Providers',
      emoji: '🤝',
      icon: Handshake,
      color: 'bg-indigo-600 text-white',
      badge: 'Expert Advisory',
      detail: 'Agronomist consultations, soil testing labs & drone spraying units.',
      activeCount: '18 Experts Active',
    },
    {
      id: 'buyers',
      label: 'Buyers',
      emoji: '🛒',
      icon: ShoppingCart,
      color: 'bg-green-600 text-white',
      badge: 'Direct Procurement',
      detail: 'Wholesale grain buyers, food processors & institution buyers.',
      activeCount: '31 Buyers Active',
    },
    {
      id: 'distributors',
      label: 'Distributors',
      emoji: '🚚',
      icon: Truck,
      color: 'bg-slate-700 text-white',
      badge: 'Logistics',
      detail: 'Cold storage chains, produce transport & regional logistics.',
      activeCount: '12 Logistics Partners',
    },
  ]

  const activeNode = partnerNodes.find((n) => n.id === selectedCategory) || partnerNodes[0]

  return (
    <section id="agriconnect" className="py-20 md:py-28 bg-agro-dark text-white relative overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-agro-forest/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Network className="w-4 h-4 text-emerald-400" />
            <span>Featured Platform Pillar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Better Connections. Better Opportunities.
          </h2>
          <p className="mt-4 text-lg text-emerald-100/80 leading-relaxed">
            AgroTech helps bring farmers closer to the people and services they need.
          </p>
        </div>

        {/* Connected Ecosystem Visual Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-emerald-950/60 p-6 sm:p-10 rounded-3xl border border-emerald-500/20 shadow-2xl">
          
          {/* Left Column: Central Node Interactive Map */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center py-6">
            
            {/* Center FARMER Node */}
            <div className="z-20 p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-agro-leaf text-agro-dark shadow-2xl border-2 border-white flex items-center gap-3 animate-pulse-slow">
              <div className="w-12 h-12 rounded-xl bg-agro-dark text-white flex items-center justify-center font-bold">
                <User className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-950">Central Node</span>
                <h3 className="text-lg font-extrabold leading-none text-agro-dark">FARMER</h3>
              </div>
            </div>

            {/* Connecting Radial Web Nodes */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-8 relative z-10">
              {partnerNodes.map((node) => {
                const isSelected = node.id === selectedCategory
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedCategory(node.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 border-white text-white shadow-lg scale-105'
                        : 'bg-emerald-950/80 border-emerald-800/60 text-emerald-200 hover:bg-emerald-900/60 hover:border-emerald-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{node.emoji}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isSelected ? 'bg-white text-emerald-900' : 'bg-emerald-900 text-emerald-300'}`}>
                        {node.badge}
                      </span>
                    </div>
                    <div className="text-sm font-bold leading-tight">{node.label}</div>
                  </button>
                )
              })}
            </div>

          </div>

          {/* Right Column: Node Inspector & CTA Details */}
          <div className="lg:col-span-5 bg-agro-dark/90 p-6 rounded-2xl border border-emerald-500/30 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{activeNode.emoji}</span>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Active Partner Node</span>
                    <h3 className="text-xl font-bold text-white">{activeNode.label}</h3>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {activeNode.activeCount}
                </span>
              </div>

              <p className="text-sm text-emerald-100/90 leading-relaxed mb-4">
                {activeNode.detail}
              </p>

              <div className="space-y-2 bg-emerald-950/80 p-3.5 rounded-xl border border-emerald-800/40 text-xs">
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct contact with verified local suppliers</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent pricing &amp; input availability</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No middleman friction or search guesswork</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800/60 space-y-4">
              <p className="text-xs text-slate-300 leading-snug">
                Discover relevant agricultural partners without searching across multiple disconnected platforms.
              </p>

              <button
                onClick={() => onOpenModal('get-started')}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-agro-dark font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 group transition-all"
              >
                <span>Explore AgriConnect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
