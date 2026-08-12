import { verifyAdminAccess } from '@/lib/auth-server'
import { NextRequest, NextResponse } from 'next/server'

interface VerifyRequest {
  accessCode: string
}

export async function POST(request: NextRequest) {
  try {
    const body: VerifyRequest = await request.json()

    if (!body.accessCode) {
      return NextResponse.json(
        { error: 'Access code required' },
        { status: 400 }
      )
    }

    const isValid = await verifyAdminAccess(body.accessCode)

    if (!isValid) {
      // Log failed attempt (rate limiting could be added here)
      return NextResponse.json(
        { error: 'Invalid access code' },
        { status: 401 }
      )
    }

    // Generate a simple session token (in production, use proper JWT)
    const token = Buffer.from(`admin:${Date.now()}:${Math.random()}`).toString('base64')

    return NextResponse.json({
      success: true,
      token,
      message: 'Authentication successful',
    })
  } catch (error) {
    console.error('Admin verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
