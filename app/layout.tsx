import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgroTech — Smarter Agriculture. Better Connections.',
  description: 'AgroTech brings farm insights, agricultural opportunities and ecosystem connections into one intelligent platform designed around the farmer.',
  keywords: ['AgriTech', 'Agriculture Platform', 'Farmer Insights', 'AgriConnect', 'Financial Opportunities', 'Smart Agriculture'],
  authors: [{ name: 'AgroTech Team' }],
  openGraph: {
    title: 'AgroTech — Smarter Agriculture. Better Connections.',
    description: 'Bringing farmers, insights, opportunities and the agricultural ecosystem together.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-agro-cream text-agro-dark antialiased selection:bg-agro-leaf selection:text-white">
        {children}
      </body>
    </html>
  )
}
