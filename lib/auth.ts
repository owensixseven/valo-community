import { UserRole } from '@/types'

// Server-side authorization checks
export function requireRole(userRoles: UserRole[], requiredRoles: UserRole[]): boolean {
  return requiredRoles.some((role) => userRoles.includes(role))
}

export function isAdmin(userRoles: UserRole[]): boolean {
  return requireRole(userRoles, [UserRole.ADMIN, UserRole.SUPER_ADMIN])
}

export function isSuperAdmin(userRoles: UserRole[]): boolean {
  return userRoles.includes(UserRole.SUPER_ADMIN)
}

export function isModerator(userRoles: UserRole[]): boolean {
  return requireRole(userRoles, [UserRole.MODERATOR, UserRole.ADMIN, UserRole.SUPER_ADMIN])
}

export function isTeamCaptain(userRoles: UserRole[]): boolean {
  return requireRole(userRoles, [UserRole.TEAM_CAPTAIN, UserRole.ADMIN, UserRole.SUPER_ADMIN])
}

export function isOrganizer(userRoles: UserRole[]): boolean {
  return requireRole(userRoles, [UserRole.ORGANIZER, UserRole.ADMIN, UserRole.SUPER_ADMIN])
}
