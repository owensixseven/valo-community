import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VALO Community',
  description: 'A professional esports community platform for competitive VALORANT players, teams, and creators.',
  keywords: 'VALORANT, esports, community, competitive gaming',
  openGraph: {
    title: 'VALO Community',
    description: 'Professional esports community for VALORANT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-brand-dark text-white">
        {children}
      </body>
    </html>
  )
}
