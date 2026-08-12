'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-1000 border-b border-white/5 bg-brand-dark/92 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-wider">
          VALO<span className="text-brand-red">COMMUNITY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-brand-gray-200 transition hover:text-white">
            Home
          </Link>
          <Link href="/matches" className="text-sm font-bold uppercase tracking-widest text-brand-gray-200 transition hover:text-white">
            Matches
          </Link>
          <Link href="/tournaments" className="text-sm font-bold uppercase tracking-widest text-brand-gray-200 transition hover:text-white">
            Tournaments
          </Link>
          <Link href="/teams" className="text-sm font-bold uppercase tracking-widest text-brand-gray-200 transition hover:text-white">
            Teams
          </Link>
          <Link href="/players" className="text-sm font-bold uppercase tracking-widest text-brand-gray-200 transition hover:text-white">
            Players
          </Link>
          <Link href="/join-us" className="text-sm font-bold uppercase tracking-widest text-brand-gray-200 transition hover:text-white">
            Join Us
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#"
          className="hidden rounded bg-blue-600 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white transition hover:brightness-110 md:inline-block"
        >
          Join Discord
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/5 bg-brand-darker p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-bold uppercase">Home</Link>
            <Link href="/matches" className="text-sm font-bold uppercase">Matches</Link>
            <Link href="/tournaments" className="text-sm font-bold uppercase">Tournaments</Link>
            <Link href="/teams" className="text-sm font-bold uppercase">Teams</Link>
            <Link href="/players" className="text-sm font-bold uppercase">Players</Link>
            <Link href="/join-us" className="text-sm font-bold uppercase">Join Us</Link>
            <Link href="#" className="rounded bg-blue-600 px-4 py-2 text-sm font-bold uppercase">Join Discord</Link>
          </div>
        </div>
      )}
    </header>
  )
}
