'use client'

import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Button, Card, CardBody, Badge } from '@/components/ui'
import { Users, Trophy, Zap, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative flex items-center overflow-hidden bg-gradient-to-r from-brand-dark via-brand-dark to-brand-dark/75">
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">
              WELCOME TO VALO COMMUNITY
            </p>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl">
              PLAY.
              <span className="block text-brand-red">COMPETE.</span>
              CONNECT.
            </h1>
            <p className="mb-8 max-w-xl text-lg text-brand-gray-100">
              A community built for competitive players, teams, creators and everyone who loves tactical PvP gaming.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/join-us">
                <Button size="lg">Apply Now</Button>
              </Link>
              <Link href="#about">
                <Button variant="secondary" size="lg">
                  Explore Community
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Decorative Elements */}
        <div className="absolute -right-40 top-1/4 opacity-10">
          <div className="h-96 w-96 rounded-full border-4 border-brand-red" />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-brand-dark">
        <Container>
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">WHO WE ARE</p>
            <h2 className="text-4xl font-black md:text-5xl">BUILT FOR THE COMMUNITY</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Trophy,
                number: '01',
                title: 'Competitive',
                description: 'Join competitive matches, tournaments and community events designed for players who want to test their skills.',
              },
              {
                icon: Users,
                number: '02',
                title: 'Community',
                description: 'Meet players, teams and creators through our community Discord and build new connections.',
              },
              {
                icon: Zap,
                number: '03',
                title: 'Opportunities',
                description: 'Apply for teams, staff positions and sponsorship opportunities within the community.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.number} className="hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/20">
                  <CardBody>
                    <p className="text-sm font-black text-brand-red">{item.number}</p>
                    <Icon className="my-4 h-8 w-8 text-brand-red" />
                    <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                    <p className="text-brand-gray-300">{item.description}</p>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Featured Section */}
      <Section className="bg-brand-darker">
        <Container>
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">STATISTICS</p>
            <h2 className="text-4xl font-black md:text-5xl">GROWING EVERY DAY</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: 'Members', value: '2.5K+' },
              { label: 'Teams', value: '180+' },
              { label: 'Players', value: '8K+' },
              { label: 'Events', value: '45+' },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardBody className="text-center">
                  <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-gray-300">{stat.label}</p>
                  <p className="text-4xl font-black text-brand-red">{stat.value}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="bg-brand-dark">
        <Container className="text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-red">
            JOIN THE MOVEMENT
          </p>
          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            YOUR COMMUNITY.
            <span className="block text-brand-red">YOUR GAME.</span>
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-brand-gray-100">
            Whether you're a player, team owner, creator, staff member or sponsor, there's a place for you in VALO Community.
          </p>
          <Link href="/join-us">
            <Button size="lg" className="inline-flex gap-2">
              Apply Now
              <ArrowRight size={20} />
            </Button>
          </Link>
        </Container>
      </Section>
    </>
  )
}
