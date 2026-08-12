'use client'

import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Card, CardBody, Badge } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

const applicationTypes = [
  {
    number: '01',
    title: 'OFFICIAL MEMBER',
    description: 'Join as an official community member and get access to exclusive events and opportunities.',
    badge: 'POPULAR',
    href: '/join-us/member',
  },
  {
    number: '02',
    title: 'STAFF APPLICATION',
    description: 'Want to help build and manage the community? Apply for a staff position.',
    href: '/join-us/staff',
  },
  {
    number: '03',
    title: 'CREATOR',
    description: 'Content creators can apply to become an official community creator with exclusive perks.',
    href: '/join-us/creator',
  },
  {
    number: '04',
    title: 'AMBASSADOR',
    description: 'Represent the community and earn recognition for helping us grow.',
    href: '/join-us/ambassador',
  },
  {
    number: '05',
    title: 'TOURNAMENT ORGANIZER',
    description: 'Host official tournaments and become a verified organizer in our community.',
    href: '/join-us/organizer',
  },
  {
    number: '06',
    title: 'TEAM APPLICATION',
    description: 'Register your team and participate in community events and tournaments.',
    href: '/join-us/team',
  },
  {
    number: '07',
    title: 'PARTNERSHIP',
    description: 'Partner with VALO Community for mutual growth and collaboration.',
    href: '/join-us/partnership',
  },
  {
    number: '08',
    title: 'SPONSORSHIP',
    description: 'Interested in sponsoring the community? Let\'s talk about partnership opportunities.',
    href: '/join-us/sponsorship',
  },
]

export default function JoinUsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-r from-brand-dark via-brand-dark to-brand-dark/75">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">VALO COMMUNITY</p>
            <h1 className="mb-6 text-5xl font-black md:text-7xl">JOIN US</h1>
            <p className="text-lg text-brand-gray-100">
              Choose your path and become part of the VALO Community. Whether you're a player, creator, organizer, or partner, we have a place for you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Applications Grid */}
      <Section className="bg-brand-dark">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applicationTypes.map((app) => (
              <Link key={app.number} href={app.href}>
                <Card className="group h-full cursor-pointer transition hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/20">
                  <CardBody className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <p className="text-sm font-black text-brand-red">{app.number}</p>
                        {app.badge && <Badge variant="primary" size="sm">{app.badge}</Badge>}
                      </div>
                      <h3 className="mb-3 text-xl font-black">{app.title}</h3>
                      <p className="text-brand-gray-300">{app.description}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-brand-red group-hover:gap-3 transition-all">
                      <span className="text-sm font-bold uppercase tracking-widest">Apply</span>
                      <ArrowRight size={16} />
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
