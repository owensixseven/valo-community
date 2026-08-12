# VALO Community Platform

A professional, production-ready esports community platform for competitive VALORANT players, teams, and creators.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **UI Components**: Custom component library

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── (public)/          # Public routes
│   ├── (auth)/            # Auth routes (login, register)
│   ├── dashboard/         # User dashboard
│   └── admin/             # Admin panel
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── features/         # Feature-specific components
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript types
├── public/                # Static assets
└── supabase/             # Database migrations
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Supabase credentials and other configuration.

4. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

See `.env.example` for all required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_KEY` - Your Supabase service role key (server-side only)
- `ADMIN_ACCESS_CODE` - Admin authentication code
- `NEXT_PUBLIC_APP_URL` - Your application URL
- `NEXT_PUBLIC_DISCORD_INVITE` - Discord server invite link

## Security

- **Never commit `.env` files** - Use `.env.example` with placeholders
- **Admin code is server-side only** - Never exposed to client-side JavaScript
- **Role-based access control** - All authorization checks happen server-side
- **Environment variables** - All secrets loaded from environment, not hardcoded

## Features (Planned)

### Phase 1 - Foundation
- [x] Project architecture
- [ ] Design system & components
- [ ] Navigation
- [ ] Homepage
- [ ] Authentication
- [ ] Player profiles
- [ ] Teams
- [ ] Join Us / Applications
- [ ] Admin authentication & dashboard
- [ ] Role/permission system

### Phase 2 - Core Features
- [ ] Tournaments
- [ ] Matches
- [ ] LFG/LFT System
- [ ] Scrim Finder
- [ ] Events
- [ ] Community Feed

### Phase 3 - Advanced Features
- [ ] Clips
- [ ] Strategies
- [ ] Leaderboards
- [ ] Achievements
- [ ] XP/Level System
- [ ] Notifications

### Phase 4 - Business Features
- [ ] Sponsorship
- [ ] Partnerships
- [ ] Creator System
- [ ] Ambassador System
- [ ] Analytics

## Development

### TypeScript
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Building
```bash
npm run build
npm start
```

## Database Schema

See `supabase/migrations/` for the complete database schema.

Key tables:
- `users` - User accounts
- `profiles` - User profiles
- `teams` - Team data
- `players` - Player data
- `tournaments` - Tournament data
- `applications` - User applications
- `admin_logs` - Audit logs

## Contributing

1. Create a feature branch
2. Follow TypeScript and component patterns
3. Test responsive design
4. Ensure no secrets are committed
5. Submit a pull request

## License

MIT
