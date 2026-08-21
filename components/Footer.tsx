'use client'

import { Sprout, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-agro-dark text-white border-t border-emerald-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-agro-forest flex items-center justify-center text-agro-mint border border-emerald-500/30">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                AgroTech
              </span>
            </a>
            
            <p className="text-sm font-semibold text-emerald-400">
              Smarter Agriculture. Better Connections.
            </p>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Bringing farmers, insights, opportunities and the agricultural ecosystem together into one intelligent digital platform.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#agriconnect" className="hover:text-white transition-colors">AgriConnect</a></li>
              <li><a href="#vision" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Platform Pillars */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-4">
              Platform Features
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#features" className="hover:text-white transition-colors">Farm Intelligence</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Smart Crop Insights</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Financial Opportunities</a></li>
              <li><a href="#agriconnect" className="hover:text-white transition-colors">Supplier &amp; Buyer Network</a></li>
              <li><a href="#ai-accessibility" className="hover:text-white transition-colors">AI Assistant</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-4">
              Connect With AgroTech
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>contact@agrotech.platform</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 1800-AGRO-TECH</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>AgriTech Innovation Center, New Delhi, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 AgroTech. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Ecosystem Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
