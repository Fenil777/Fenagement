# Fenagement — Resource Management SaaS

A full-stack **Resource Management SaaS** built with Next.js 14, TypeScript, Tailwind CSS, and Supabase. Designed to help engineering managers track team capacity, prevent employee burnout, and monitor project health in real-time.

## Features

- **Capacity Dashboard** — Real-time KPIs: team utilization, active projects, budget risk, available capacity
- **Burnout Risk Detection** — Automatically flags employees allocated over 40h/week
- **Project Health Overview** — Budget utilization progress bars with warning thresholds
- **Utilization Chart** — 8-week area chart showing team utilization trends vs max capacity
- **Allocation Matrix** — Full resource × project matrix view showing hour breakdowns
- **Team Management** — Individual team member cards with utilization, billing rate, and status
- **Projects Page** — Project cards with budget, team size, and end date tracking

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **ORM**: Supabase JS Client
- **Deployment**: Vercel

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Fenil777/Fenagement.git
cd Fenagement

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Database Setup

Run the SQL in `supabase-schema.sql` in your Supabase SQL editor to create:
- `profiles` — Team member records with roles, billing rates, and capacity
- `projects` — Project records with budget, status, and timeline
- `allocations` — Many-to-many table linking members to projects with weekly hours

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page
│   └── dashboard/
│       ├── layout.tsx              # Dashboard layout with sidebar
│       ├── page.tsx                # Main capacity dashboard
│       ├── team/page.tsx           # Team member cards
│       ├── projects/page.tsx       # Project health cards
│       ├── allocations/page.tsx    # Allocation matrix
│       └── settings/page.tsx       # Settings page
├── components/
│   ├── ui/                         # Reusable UI primitives
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── button.tsx
│   ├── dashboard/                  # Dashboard-specific components
│   │   ├── kpi-card.tsx
│   │   ├── utilization-chart.tsx
│   │   ├── burnout-table.tsx
│   │   └── project-health.tsx
│   └── layout/
│       ├── sidebar.tsx
│       └── header.tsx
└── lib/
    ├── database.types.ts           # TypeScript interfaces
    ├── supabase.ts                 # Supabase client
    ├── mock-data.ts                # Demo data + helper functions
    └── utils.ts                    # cn() utility
```

## License

MIT
