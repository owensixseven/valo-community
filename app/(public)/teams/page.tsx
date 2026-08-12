'use client'

import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Card, CardBody, Button, Badge } from '@/components/ui'
import { Users, Trophy, TrendingUp, MapPin } from 'lucide-react'

const mockTeams = [
  {
    id: '1',
    name: 'Team Alpha',
    tag: 'ALPHA',
    region: 'NA',
    ranking: 1,
    wins: 45,
    losses: 5,
    members: 5,
    verified: true,
  },
  {
    id: '2',
    name: 'Team Beta',
    tag: 'BETA',
    region: 'NA',
    ranking: 2,
    wins: 38,
    losses: 12,
    members: 5,
    verified: true,
  },
  {
    id: '3',
    name: 'Rising Stars',
    tag: 'RS',
    region: 'NA',
    ranking: 5,
    wins: 28,
    losses: 18,
    members: 4,
    verified: false,
  },
]

export default function TeamsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-r from-brand-dark via-brand-dark to-brand-dark/75">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">TEAMS</p>
            <h1 className="mb-6 text-5xl font-black md:text-7xl">COMPETITIVE TEAMS</h1>
            <p className="text-lg text-brand-gray-100">
              Discover and follow the best teams competing in VALO Community tournaments and events.
            </p>
          </div>
        </Container>
      </Section>

      {/* Teams Grid */}
      <Section className="bg-brand-darker">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockTeams.map((team) => (
              <Link key={team.id} href={`/teams/${team.id}`}>
                <Card className="group h-full cursor-pointer transition hover:border-brand-red">
                  <CardBody>
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <h3 className="font-black text-white">{team.name}</h3>
                        <p className="text-sm text-brand-gray-400">{team.tag}</p>
                      </div>
                      {team.verified && <Badge variant="success" size="sm">VERIFIED</Badge>}
                    </div>

                    {/* Ranking */}
                    <div className="mb-6 rounded border border-brand-gray-700 bg-brand-dark p-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-brand-red" />
                        <p className="text-xs font-bold uppercase text-brand-gray-400">Ranking</p>
                      </div>
                      <p className="text-3xl font-black text-brand-red">#{team.ranking}</p>
                    </div>

                    {/* Stats */}
                    <div className="mb-6 grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="text-xs font-bold uppercase text-brand-gray-400">Wins</p>
                        <p className="text-lg font-black text-green-400">{team.wins}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase text-brand-gray-400">Losses</p>
                        <p className="text-lg font-black text-red-400">{team.losses}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase text-brand-gray-400">Ratio</p>
                        <p className="text-lg font-black text-brand-red">
                          {((team.wins / (team.wins + team.losses)) * 100).toFixed(0)}%
                        </p>
                      </div>
                    </div>

                    {/* Members */}
                    <div className="flex items-center gap-2 text-sm text-brand-gray-300">
                      <Users size={16} />
                      <span>{team.members} Members</span>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
