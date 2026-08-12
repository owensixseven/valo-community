'use client'

import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { Card, CardBody, CardHeader, Badge, Button } from '@/components/ui'
import { ChevronRight, CheckCircle, Clock, XCircle } from 'lucide-react'

const mockApplications = [
  {
    id: '1',
    applicantName: 'John Doe',
    type: 'MEMBER',
    status: 'PENDING',
    submittedAt: '2026-08-12T10:30:00Z',
    reviewer: null,
  },
  {
    id: '2',
    applicantName: 'Team Alpha',
    type: 'TEAM',
    status: 'UNDER_REVIEW',
    submittedAt: '2026-08-11T14:20:00Z',
    reviewer: 'Admin User',
  },
  {
    id: '3',
    applicantName: 'Jane Smith',
    type: 'CREATOR',
    status: 'PENDING',
    submittedAt: '2026-08-12T09:15:00Z',
    reviewer: null,
  },
  {
    id: '4',
    applicantName: 'Mike Johnson',
    type: 'STAFF',
    status: 'ACCEPTED',
    submittedAt: '2026-08-10T16:45:00Z',
    reviewer: 'Admin User',
  },
]

const statusConfig = {
  PENDING: { icon: Clock, bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Pending' },
  UNDER_REVIEW: { icon: Clock, bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'Under Review' },
  ACCEPTED: { icon: CheckCircle, bg: 'bg-green-500/20', text: 'text-green-400', label: 'Accepted' },
  REJECTED: { icon: XCircle, bg: 'bg-red-500/20', text: 'text-red-400', label: 'Rejected' },
}

export default function AdminApplicationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark md:flex-row">
      {/* Sidebar - would be included from layout */}
      <div className="flex-1">
        <Section className="bg-brand-dark">
          <Container>
            <div className="mb-8">
              <h1 className="text-4xl font-black uppercase">Applications</h1>
              <p className="mt-2 text-brand-gray-400">Review and manage community applications</p>
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-2">
              {['ALL', 'PENDING', 'UNDER_REVIEW', 'ACCEPTED', 'REJECTED'].map((status) => (
                <button
                  key={status}
                  className="rounded border border-brand-gray-600 px-4 py-2 text-sm font-bold uppercase transition hover:border-brand-red hover:text-brand-red"
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              {mockApplications.map((app) => {
                const status = statusConfig[app.status as keyof typeof statusConfig]
                const Icon = status.icon
                return (
                  <Link key={app.id} href={`/admin/applications/${app.id}`}>
                    <Card className="group cursor-pointer transition hover:border-brand-red">
                      <CardBody>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            <div className={`rounded p-2 ${status.bg}`}>
                              <Icon size={24} className={status.text} />
                            </div>

                            <div className="flex-1">
                              <h3 className="font-black text-white">{app.applicantName}</h3>
                              <p className="text-sm text-brand-gray-400">{app.type}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <Badge variant="primary" size="sm" className={status.text}>
                                {status.label}
                              </Badge>
                              <p className="mt-2 text-xs text-brand-gray-500">
                                {new Date(app.submittedAt).toLocaleDateString()}
                              </p>
                            </div>
                            <ChevronRight className="text-brand-gray-500 group-hover:text-brand-red transition" />
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
      </div>
    </div>
  )
}
