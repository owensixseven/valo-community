'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Container, Section } from '@/components/layout'
import { Card, CardBody, CardHeader, Input, Button, Label } from '@/components/ui'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode }),
      })

      if (!response.ok) {
        throw new Error('Invalid access code')
      }

      const data = await response.json()
      
      // Store session token
      localStorage.setItem('admin_session', data.token)
      router.push('/admin/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark">
      <Container className="w-full">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader className="border-b border-brand-gray-700 text-center">
              <Lock className="mx-auto mb-4 h-8 w-8 text-brand-red" />
              <h1 className="text-2xl font-black uppercase tracking-widest">ADMIN LOGIN</h1>
              <p className="mt-2 text-sm text-brand-gray-400">VALO Community Administration</p>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="accessCode" className="mb-2 block">
                    Access Code
                  </Label>
                  <Input
                    id="accessCode"
                    type="password"
                    placeholder="Enter admin access code"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>

                {error && (
                  <div className="rounded border border-red-500/30 bg-red-500/10 p-3">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading || !accessCode}
                >
                  {loading ? 'Verifying...' : 'Login'}
                </Button>
              </form>

              <div className="mt-6 border-t border-brand-gray-700 pt-4">
                <p className="text-center text-xs text-brand-gray-500">
                  Only authorized administrators can access this panel.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </div>
  )
}
