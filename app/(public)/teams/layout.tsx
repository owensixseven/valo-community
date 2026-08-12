import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teams | VALO Community',
  description: 'Explore competitive teams in the VALO Community.',
}

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
