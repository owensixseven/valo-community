// User Types
export enum UserRole {
  USER = 'USER',
  MEMBER = 'MEMBER',
  CREATOR = 'CREATOR',
  AMBASSADOR = 'AMBASSADOR',
  TEAM_CAPTAIN = 'TEAM_CAPTAIN',
  ORGANIZER = 'ORGANIZER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface User {
  id: string
  email: string
  display_name: string
  avatar_url?: string
  bio?: string
  roles: UserRole[]
  created_at: string
  updated_at: string
}

// Application Types
export enum ApplicationType {
  MEMBER = 'MEMBER',
  STAFF = 'STAFF',
  CREATOR = 'CREATOR',
  AMBASSADOR = 'AMBASSADOR',
  ORGANIZER = 'ORGANIZER',
  TEAM = 'TEAM',
  PARTNERSHIP = 'PARTNERSHIP',
  SPONSORSHIP = 'SPONSORSHIP',
  DEVELOPER = 'DEVELOPER',
}

export enum ApplicationStatus {
  PENDING = 'PENDING',
  UNDER_REVIEW = 'UNDER_REVIEW',
  INTERVIEW = 'INTERVIEW',
  NEEDS_INFORMATION = 'NEEDS_INFORMATION',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export interface Application {
  id: string
  user_id: string
  type: ApplicationType
  status: ApplicationStatus
  answers: Record<string, any>
  created_at: string
  updated_at: string
  reviewed_by?: string
  review_notes?: string
}

// Team Types
export interface Team {
  id: string
  name: string
  tag: string
  logo_url?: string
  captain_id: string
  region: string
  ranking?: number
  wins?: number
  losses?: number
  created_at: string
  updated_at: string
}

// Player Types
export enum PlayerRank {
  UNRANKED = 'UNRANKED',
  IRON = 'IRON',
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
  DIAMOND = 'DIAMOND',
  ASCENDANT = 'ASCENDANT',
  IMMORTAL = 'IMMORTAL',
  RADIANT = 'RADIANT',
}

export interface Player {
  id: string
  riot_id: string
  region: string
  current_rank: PlayerRank
  peak_rank: PlayerRank
  main_role: string
  main_agents: string[]
  team_id?: string
  created_at: string
  updated_at: string
}

// Tournament Types
export enum TournamentFormat {
  SINGLE_ELIMINATION = 'SINGLE_ELIMINATION',
  DOUBLE_ELIMINATION = 'DOUBLE_ELIMINATION',
  ROUND_ROBIN = 'ROUND_ROBIN',
  SWISS = 'SWISS',
}

export interface Tournament {
  id: string
  name: string
  organizer_id: string
  format: TournamentFormat
  prize_pool: number
  max_teams: number
  status: 'DRAFT' | 'OPEN' | 'CLOSED' | 'IN_PROGRESS' | 'COMPLETED'
  created_at: string
  updated_at: string
}

// Match Types
export interface Match {
  id: string
  tournament_id?: string
  team_a_id: string
  team_b_id: string
  score_a: number
  score_b: number
  best_of: number
  status: 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED'
  scheduled_at: string
  created_at: string
  updated_at: string
}
