import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Players | VALO Community',
  description: 'Browse and discover top VALORANT players in the VALO Community.',
}

export default function PlayersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
