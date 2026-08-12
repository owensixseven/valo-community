'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Card, CardBody, Button } from '@/components/ui'
import {
  BarChart3,
  FileText,
  Users,
  Trophy,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

const adminMenuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: BarChart3 },
  { label: 'Applications', href: '/admin/applications', icon: FileText },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Teams', href: '/admin/teams', icon: Trophy },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if admin session exists
    const session = localStorage.getItem('admin_session')
    if (!session) {
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-brand-dark">Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  function handleLogout() {
    localStorage.removeItem('admin_session')
    router.push('/admin/login')
  }

  return (
    <div className="flex min-h-screen bg-brand-dark">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-brand-gray-700 bg-brand-darker transition-transform duration-300 md:static md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="border-b border-brand-gray-700 p-6">
            <Link href="/" className="text-xl font-black tracking-wider">
              VALO<span className="text-brand-red">ADMIN</span>
            </Link>
          </div>

          {/* Menu */}
          <nav className="flex-1 space-y-2 p-4">
            {adminMenuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href}>
                  <button className="w-full flex items-center gap-3 rounded px-4 py-3 text-sm font-bold uppercase text-brand-gray-300 transition hover:bg-brand-gray-700 hover:text-white">
                    <Icon size={18} />
                    {item.label}
                  </button>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="border-t border-brand-gray-700 p-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 rounded bg-brand-red px-4 py-3 text-sm font-bold uppercase text-white transition hover:bg-red-600"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="border-b border-brand-gray-700 bg-brand-darker">
          <div className="flex items-center justify-between p-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-2xl font-black uppercase">Admin Dashboard</h1>
          </div>
        </div>

        {/* Content */}
        <Section className="bg-brand-dark">
          <Container>
            {/* Stats */}
            <div className="mb-12 grid gap-6 md:grid-cols-4">
              {[
                { label: 'Pending Applications', value: '24', variant: 'primary' },
                { label: 'Total Users', value: '2,547', variant: 'info' },
                { label: 'Active Teams', value: '184', variant: 'success' },
                { label: 'Reports', value: '8', variant: 'danger' },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardBody>
                    <p className="mb-2 text-sm font-bold uppercase text-brand-gray-400">{stat.label}</p>
                    <p className="text-3xl font-black text-brand-red">{stat.value}</p>
                  </CardBody>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardBody>
                  <h3 className="mb-4 text-xl font-black">Recent Applications</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'John Doe', type: 'MEMBER', status: 'PENDING' },
                      { name: 'Team Alpha', type: 'TEAM', status: 'UNDER_REVIEW' },
                      { name: 'Jane Smith', type: 'CREATOR', status: 'PENDING' },
                    ].map((app, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded border border-brand-gray-700 p-3">
                        <div>
                          <p className="font-bold text-white">{app.name}</p>
                          <p className="text-xs text-brand-gray-400">{app.type}</p>
                        </div>
                        <span className={`text-xs font-bold uppercase ${
                          app.status === 'PENDING' ? 'text-yellow-400' :
                          app.status === 'UNDER_REVIEW' ? 'text-blue-400' : 'text-green-400'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link href="/admin/applications">
                    <Button variant="primary" size="sm" className="mt-4 w-full">
                      View All
                    </Button>
                  </Link>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h3 className="mb-4 text-xl font-black">System Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-brand-gray-700 pb-2">
                      <span className="text-brand-gray-400">Version</span>
                      <span className="font-bold">1.0.0</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-gray-700 pb-2">
                      <span className="text-brand-gray-400">Database Status</span>
                      <span className="text-green-400 font-bold">Connected</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-gray-700 pb-2">
                      <span className="text-brand-gray-400">Last Backup</span>
                      <span className="font-bold">2 hours ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-gray-400">Security Level</span>
                      <span className="text-brand-red font-bold">High</span>
                    </div>
                  </div>
                  <Link href="/admin/settings">
                    <Button variant="secondary" size="sm" className="mt-4 w-full">
                      Settings
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  )
}
