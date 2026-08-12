import { NextRequest, NextResponse } from 'next/server'

// Simple middleware to check admin session
// In production, use proper JWT verification
export function isAdminAuthenticated(request: NextRequest): boolean {
  const token = request.headers.get('authorization')?.split('Bearer ')[1]
  return !!token // Simple check - in production, verify JWT
}

export async function middleware(request: NextRequest) {
  // Check if accessing admin routes
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    
    // In a real app, verify the token here
    // For now, just allow access (client-side will handle auth)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
