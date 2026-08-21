'use client'

import { useState } from 'react'
import { MessageSquareText, Globe, User, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function AiAccessibilitySection() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0)

  const sampleQueries = [
    {
      q: 'What crops can I grow on my farm?',
      lang: 'English',
      a: 'Based on your soil telemetry (pH 6.8, sandy loam) and regional weather forecasts in Punjab, Wheat (HD-3086), Mustard (Pusa Bold), and Gram are optimal choices for this season.',
      badge: 'Crop Match',
    },
    {
      q: 'मेरे खेत के लिए कौन से बीज सबसे अच्छे हैं? (Hindi)',
      lang: 'Hindi (हिंदी)',
      a: 'आपकी मिट्टी की नमी और मौसम रिपोर्ट के अनुसार, प्रमाणित गेहूं बीज (HD-3086) और सरसों (पूसा बोल्ड) आपके क्षेत्र के लिए सबसे उपयुक्त हैं।',
      badge: 'Multilingual Support',
    },
    {
      q: 'माझ्या शेतात जवळचे खत पुरवठादार दाखवा (Marathi)',
      lang: 'Marathi (मराठी)',
      a: 'तुमच्या ५ किमी परिसरामध्ये २ अधिकृत खत पुरवठादार उपलब्ध आहेत. सविस्तर माहिती अ‍ॅग्रीकनेक्ट मध्ये पहा.',
      badge: 'Supplier Listing',
    },
    {
      q: 'What financial opportunities are available for small farmers?',
      lang: 'English',
      a: 'Matched 2 eligible schemes: PM Kisan Credit Scheme (interest subvention) and NABARD Solar Pump Subsidy. Tap to inspect documentation checklists.',
      badge: 'Financial Discovery',
    },
  ]

  const languages = [
    { name: 'English', active: true },
    { name: 'Hindi (हिंदी)', active: true },
    { name: 'Marathi (मराठी)', active: true },
    { name: 'Tamil (தமிழ்)', active: true },
    { name: 'Telugu (తెలుగు)', active: true },
    { name: '+ Future expansion', active: false },
  ]

  const currentChat = sampleQueries[activeQueryIndex]

  return (
    <section id="ai-accessibility" className="py-20 md:py-28 bg-stone-50/80 border-t border-agro-forest/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-agro-sage border border-agro-forest/15 text-agro-forest text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5 text-agro-leaf" />
            <span>Accessible Farmer Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-agro-dark tracking-tight">
            Technology That Understands Farmers.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            AgroTech is designed with accessibility in mind, allowing farmers to interact with agricultural technology in a simpler and more natural way.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Practical Advisory Console Interface */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-agro-forest/15 shadow-xl">
            
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-agro-forest text-white flex items-center justify-center shadow-md">
                  <MessageSquareText className="w-5 h-5 text-agro-mint" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-agro-dark">AgroTech Assistant</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Agricultural Advisory &amp; Knowledge Interface
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                {currentChat.badge}
              </span>
            </div>

            {/* Conversation Messages */}
            <div className="space-y-4 mb-6">
              
              {/* Farmer Message */}
              <div className="flex items-start justify-end gap-3">
                <div className="bg-agro-forest text-white p-4 rounded-2xl rounded-tr-none text-sm max-w-lg shadow-sm">
                  <p className="font-medium">{currentChat.q}</p>
                  <span className="text-[10px] text-emerald-300 block mt-1">Farmer • Language: {currentChat.lang}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-agro-sage text-agro-forest flex items-center justify-center font-bold text-xs shrink-0">
                  <User className="w-4 h-4" />
                </div>
              </div>

              {/* Advisory Response */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-agro-forest text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquareText className="w-4 h-4 text-agro-mint" />
                </div>
                <div className="bg-agro-sage/50 border border-agro-forest/10 text-slate-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-lg shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-agro-forest mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-agro-leaf" />
                    AgroTech Advisory Response
                  </div>
                  <p className="leading-relaxed">{currentChat.a}</p>
                </div>
              </div>

            </div>

            {/* Query Chips */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Sample Farmer Queries:
              </p>
              <div className="flex flex-wrap gap-2">
                {sampleQueries.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveQueryIndex(idx)}
                    className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                      idx === activeQueryIndex
                        ? 'bg-agro-forest text-white border-agro-forest shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    "{item.q.slice(0, 34)}..."
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Multilingual Support */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-agro-forest/10 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-agro-sage text-agro-forest flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-agro-dark mb-2">
                Multilingual Experience
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Designed to support multilingual agricultural experiences, ensuring farmers across different regions can easily access ecosystem tools.
              </p>

              {/* Supported Languages List */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Supported &amp; Planned Regional Languages:
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1.5 rounded-xl font-semibold border flex items-center gap-1.5 ${
                        lang.active
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                          : 'bg-slate-50 text-slate-400 border-slate-200 border-dashed'
                      }`}
                    >
                      {lang.active && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 bg-agro-sage/40 p-3.5 rounded-2xl text-xs font-bold text-agro-forest text-center">
                ✨ Designed to support multilingual agricultural experiences.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
