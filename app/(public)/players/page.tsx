'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Card, CardBody, Button, Badge, Input, Label } from '@/components/ui'
import { RANKS, AGENTS, ROLES } from '@/lib/constants'
import { Search, Filter, MapPin, Trophy } from 'lucide-react'

const mockPlayers = [
  {
    id: '1',
    riotId: 'Player#NA1',
    region: 'NA',
    currentRank: 'RADIANT',
    peakRank: 'RADIANT',
    role: 'Duelist',
    agents: ['Jett', 'Raze'],
    team: 'Team Alpha',
    wins: 245,
    lft: false,
  },
  {
    id: '2',
    riotId: 'Sentinel#NA2',
    region: 'NA',
    currentRank: 'IMMORTAL',
    peakRank: 'RADIANT',
    role: 'Sentinel',
    agents: ['Cypher', 'Killjoy'],
    team: 'Team Beta',
    wins: 189,
    lft: false,
  },
  {
    id: '3',
    riotId: 'Controller#NA3',
    region: 'NA',
    currentRank: 'IMMORTAL',
    peakRank: 'IMMORTAL',
    role: 'Controller',
    agents: ['Omen', 'Astra'],
    team: null,
    wins: 156,
    lft: true,
  },
]

export default function PlayersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRank, setSelectedRank] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [filteredPlayers, setFilteredPlayers] = useState(mockPlayers)

  useEffect(() => {
    let filtered = mockPlayers

    if (searchQuery) {
      filtered = filtered.filter(
        (p) => p.riotId.toLowerCase().includes(searchQuery.toLowerCase()) ||
               p.team?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedRank) {
      filtered = filtered.filter((p) => p.currentRank === selectedRank)
    }

    if (selectedRole) {
      filtered = filtered.filter((p) => p.role === selectedRole)
    }

    setFilteredPlayers(filtered)
  }, [searchQuery, selectedRank, selectedRole])

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-r from-brand-dark via-brand-dark to-brand-dark/75">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">PLAYERS</p>
            <h1 className="mb-6 text-5xl font-black md:text-7xl">FIND TOP TALENT</h1>
            <p className="text-lg text-brand-gray-100">
              Browse the community's best players. Filter by rank, role, and region to find your next teammate.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filters & Search */}
      <Section className="bg-brand-darker">
        <Container>
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-brand-gray-400" />
              <Input
                placeholder="Search by Riot ID or team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <div>
                <Label className="mb-2 block text-xs">RANK</Label>
                <div className="flex flex-wrap gap-2">
                  {RANKS.slice(-5).map((rank) => (
                    <button
                      key={rank}
                      onClick={() => setSelectedRank(selectedRank === rank ? null : rank)}
                      className={`rounded px-3 py-1 text-sm font-bold uppercase transition ${
                        selectedRank === rank
                          ? 'bg-brand-red text-white'
                          : 'border border-brand-gray-600 text-brand-gray-300 hover:border-brand-red'
                      }`}
                    >
                      {rank}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="mb-2 block text-xs">ROLE</Label>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(selectedRole === role ? null : role)}
                      className={`rounded px-3 py-1 text-sm font-bold uppercase transition ${
                        selectedRole === role
                          ? 'bg-brand-red text-white'
                          : 'border border-brand-gray-600 text-brand-gray-300 hover:border-brand-red'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Players Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <Link key={player.id} href={`/players/${player.id}`}>
                  <Card className="group h-full cursor-pointer transition hover:border-brand-red">
                    <CardBody>
                      {/* Header */}
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="font-black text-white">{player.riotId}</h3>
                          <p className="text-xs text-brand-gray-400">{player.region}</p>
                        </div>
                        {player.lft && <Badge variant="danger" size="sm">LFT</Badge>}
                      </div>

                      {/* Stats */}
                      <div className="mb-4 grid grid-cols-2 gap-3">
                        <div className="rounded border border-brand-gray-700 bg-brand-dark p-2">
                          <p className="text-xs font-bold text-brand-gray-400">RANK</p>
                          <p className="text-sm font-black text-brand-red">{player.currentRank}</p>
                        </div>
                        <div className="rounded border border-brand-gray-700 bg-brand-dark p-2">
                          <p className="text-xs font-bold text-brand-gray-400">WINS</p>
                          <p className="text-sm font-black text-brand-red">{player.wins}</p>
                        </div>
                      </div>

                      {/* Role & Agents */}
                      <div className="mb-4">
                        <p className="mb-2 text-xs font-bold uppercase text-brand-gray-400">Role</p>
                        <Badge variant="info" size="sm" className="mr-2">{player.role}</Badge>
                      </div>

                      {/* Agents */}
                      <div className="mb-4">
                        <p className="mb-2 text-xs font-bold uppercase text-brand-gray-400">Agents</p>
                        <div className="flex gap-2">
                          {player.agents.map((agent) => (
                            <Badge key={agent} variant="primary" size="sm">{agent}</Badge>
                          ))}
                        </div>
                      </div>

                      {/* Team */}
                      {player.team && (
                        <div className="rounded border border-brand-gray-700 bg-brand-dark p-2 text-xs">
                          <p className="text-brand-gray-400">TEAM</p>
                          <p className="font-bold text-white">{player.team}</p>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-brand-gray-400">No players found matching your filters.</p>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  )
}
