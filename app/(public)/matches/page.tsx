'use client'

import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Card, CardBody, Button, Badge } from '@/components/ui'
import { Clock, Users, Zap, Trophy } from 'lucide-react'

const mockMatches = [
  {
    id: '1',
    teamA: { name: 'Team Alpha', tag: 'ALPHA' },
    teamB: { name: 'Team Beta', tag: 'BETA' },
    status: 'SCHEDULED',
    scheduledAt: '2026-08-13T20:00:00Z',
    tournament: 'Weekly Showdown',
    bestOf: 3,
  },
  {
    id: '2',
    teamA: { name: 'Rising Stars', tag: 'RS' },
    teamB: { name: 'Pro Team', tag: 'PRO' },
    status: 'IN_PROGRESS',
    scheduledAt: '2026-08-12T18:30:00Z',
    tournament: 'Season Championship',
    bestOf: 5,
    scoreA: 1,
    scoreB: 0,
  },
  {
    id: '3',
    teamA: { name: 'Team Alpha', tag: 'ALPHA' },
    teamB: { name: 'Pro Team', tag: 'PRO' },
    status: 'COMPLETED',
    scheduledAt: '2026-08-11T19:00:00Z',
    tournament: 'Weekly Showdown',
    bestOf: 3,
    scoreA: 2,
    scoreB: 1,
  },
]

const statusColors = {
  SCHEDULED: { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'Scheduled' },
  IN_PROGRESS: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Live' },
  COMPLETED: { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Completed' },
}

export default function MatchesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-r from-brand-dark via-brand-dark to-brand-dark/75">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">MATCHES</p>
            <h1 className="mb-6 text-5xl font-black md:text-7xl">LIVE MATCHES</h1>
            <p className="text-lg text-brand-gray-100">
              Follow live matches, check schedules, and view match results from community competitions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Matches List */}
      <Section className="bg-brand-darker">
        <Container>
          <div className="space-y-6">
            {mockMatches.map((match) => {
              const status = statusColors[match.status as keyof typeof statusColors]
              return (
                <Link key={match.id} href={`/matches/${match.id}`}>
                  <Card className="group cursor-pointer transition hover:border-brand-red">
                    <CardBody>
                      <div className="grid gap-6 md:grid-cols-3">
                        {/* Teams */}
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-right">
                            <p className="font-black text-white">{match.teamA.name}</p>
                            <p className="text-sm text-brand-gray-400">{match.teamA.tag}</p>
                          </div>

                          <div className="flex w-16 items-center justify-center text-center">
                            {match.status === 'COMPLETED' ? (
                              <>
                                <span className="text-2xl font-black text-brand-red">{match.scoreA}</span>
                                <span className="text-brand-gray-500">-</span>
                                <span className="text-2xl font-black text-brand-red">{match.scoreB}</span>
                              </>
                            ) : match.status === 'IN_PROGRESS' ? (
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-brand-red">{match.scoreA}</span>
                                <Zap size={20} className="animate-pulse text-brand-red" />
                                <span className="text-2xl font-black text-brand-red">{match.scoreB}</span>
                              </div>
                            ) : (
                              <Badge variant="info">VS</Badge>
                            )}
                          </div>

                          <div className="text-left">
                            <p className="font-black text-white">{match.teamB.name}</p>
                            <p className="text-sm text-brand-gray-400">{match.teamB.tag}</p>
                          </div>
                        </div>

                        {/* Match Info */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Trophy size={16} className="text-brand-red" />
                            <span className="text-brand-gray-300">{match.tournament}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users size={16} className="text-brand-red" />
                            <span className="text-brand-gray-300">Best of {match.bestOf}</span>
                          </div>
                        </div>

                        {/* Status & Time */}
                        <div className="flex flex-col items-end justify-between">
                          <Badge variant={status.label as any} size="sm">{status.label}</Badge>
                          <div className="flex items-center gap-2 text-sm text-brand-gray-400">
                            <Clock size={16} />
                            {new Date(match.scheduledAt).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}
