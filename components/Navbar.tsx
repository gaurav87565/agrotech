'use client'

import { useState, useEffect } from 'react'
import { Sprout, Menu, X, ArrowRight } from 'lucide-react'

interface NavbarProps {
  onOpenModal: (type: 'get-started' | 'sign-in' | 'partner') => void
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'AgriConnect', href: '#agriconnect' },
    { name: 'About', href: '#vision' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-agro-forest/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a href="#hero" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-agro-forest flex items-center justify-center text-white shadow-md shadow-agro-forest/20 group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6 text-agro-mint" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-agro-dark group-hover:text-agro-forest transition-colors">
                AgroTech
              </span>
              <span className="text-[10px] font-semibold text-agro-leaf tracking-wider uppercase -mt-1">
                Ecosystem
              </span>
            </div>
          </a>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/60 backdrop-blur-sm border border-agro-forest/10 px-4 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-agro-forest hover:bg-agro-sage/60 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenModal('sign-in')}
              className="px-4 py-2 text-sm font-semibold text-agro-dark hover:text-agro-forest hover:bg-agro-sage/50 rounded-xl transition-all"
            >
              Sign In
            </button>
            <button
              onClick={() => onOpenModal('get-started')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-agro-forest hover:bg-agro-dark rounded-xl shadow-md shadow-agro-forest/20 hover:shadow-lg transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-agro-dark hover:text-agro-forest hover:bg-agro-sage rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-agro-forest/10 px-4 pt-3 pb-6 space-y-3 shadow-xl transition-all">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-800 hover:bg-agro-sage hover:text-agro-forest rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenModal('sign-in')
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-agro-dark border border-agro-forest/20 rounded-xl hover:bg-agro-sage/40"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenModal('get-started')
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-agro-forest hover:bg-agro-dark rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
