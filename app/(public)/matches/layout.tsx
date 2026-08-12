import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matches | VALO Community',
  description: 'Watch live matches and view results from VALO Community competitions.',
}

export default function MatchesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
