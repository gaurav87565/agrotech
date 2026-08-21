'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import IntroducingSection from '@/components/IntroducingSection'
import CoreFeaturesSection from '@/components/CoreFeaturesSection'
import AgriConnectSection from '@/components/AgriConnectSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import AiAccessibilitySection from '@/components/AiAccessibilitySection'
import VisionSection from '@/components/VisionSection'
import FinalCtaSection from '@/components/FinalCtaSection'
import Footer from '@/components/Footer'
import InteractiveModals from '@/components/InteractiveModals'

export default function Home() {
  const [modalType, setModalType] = useState<'get-started' | 'sign-in' | 'partner' | null>(null)

  const handleOpenModal = (type: 'get-started' | 'sign-in' | 'partner') => {
    setModalType(type)
  }

  const handleCloseModal = () => {
    setModalType(null)
  }

  return (
    <main className="min-h-screen bg-agro-cream font-sans text-agro-dark selection:bg-agro-leaf selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Section 1: Hero */}
      <HeroSection onOpenModal={handleOpenModal} />

      {/* Section 2: The Problem */}
      <ProblemSection />

      {/* Section 3: Introducing AgroTech */}
      <IntroducingSection />

      {/* Section 4: Core Features */}
      <CoreFeaturesSection onOpenModal={handleOpenModal} />

      {/* Section 5: AgriConnect (Featured Highlight Section) */}
      <AgriConnectSection onOpenModal={handleOpenModal} />

      {/* Section 6: How It Works */}
      <HowItWorksSection />

      {/* Section 7: AI and Multilingual Accessibility */}
      <AiAccessibilitySection />

      {/* Section 8: Vision */}
      <VisionSection />

      {/* Section 9: Final CTA */}
      <FinalCtaSection onOpenModal={handleOpenModal} />

      {/* Footer */}
      <Footer />

      {/* Interactive Modal Triggers */}
      <InteractiveModals modalType={modalType} onClose={handleCloseModal} />
    </main>
  )
}
