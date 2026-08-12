import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-700">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex-1">
            <Link href="/" className="text-xl font-black tracking-wider">
              VALO<span className="text-brand-red">COMMUNITY</span>
            </Link>
            <p className="mt-3 text-sm text-brand-gray-300">
              A professional esports community for competitive VALORANT players, teams, and creators.
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/" className="text-sm font-bold text-brand-gray-200 transition hover:text-brand-red">Home</Link>
            <Link href="/join-us" className="text-sm font-bold text-brand-gray-200 transition hover:text-brand-red">Join Us</Link>
            <Link href="#" className="text-sm font-bold text-brand-gray-200 transition hover:text-brand-red">Discord</Link>
          </div>
        </div>
        <div className="border-t border-brand-gray-700 pt-8">
          <p className="text-xs text-brand-gray-500">
            © 2026 VALO Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
