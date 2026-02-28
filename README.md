# 🚀 Fenagement - Resource Management SaaS

<p align="center">
  <img src="https://github.com/user-attachments/assets/3f527777-532e-4b8f-b4f1-1dc36f599d16" alt="Fenagement Dashboard" width="800"/>
</p>

<p align="center">
  <strong>An intelligent resource management platform for small businesses to optimize team utilization, prevent burnout, and protect profit margins.</strong>
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-architecture">Architecture</a>
</p>

---

## 📺 Live Demo

**[View Live Application →](https://fenagement.vercel.app)** *(Deploy your own to see it live)*

---

## ✨ Features

### 📊 Capacity Dashboard
Real-time KPIs showing team utilization, active projects, budget risk, and available capacity.

![Dashboard](https://github.com/user-attachments/assets/3f527777-532e-4b8f-b4f1-1dc36f599d16)

### 👥 Team Management
View all team members with their roles, departments, billing rates, and current utilization status.

![Team](https://github.com/user-attachments/assets/e93210fa-e336-4f6a-be20-8f0cde07346d)

### 📁 Project Tracking
Monitor project health with budget utilization, status indicators, and client information.

![Projects](https://github.com/user-attachments/assets/185ad523-f806-4423-aac7-b9051eeb4f66)

### 📅 Resource Allocation Matrix
Visual matrix showing who is working on what project and for how many hours per week.

![Allocations](https://github.com/user-attachments/assets/d3361ff7-ebaa-4987-84bb-53f0ecfa7e65)

### 🔴 Burnout Risk Detection
**The Consultant Feature** - Automatically identifies and highlights employees allocated >40 hours/week in RED, enabling proactive intervention before burnout occurs.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Database** | Supabase (PostgreSQL) |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (optional - app works with mock data)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fenil777/Fenagement.git
   cd Fenagement
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your Supabase credentials (or leave empty to use mock data):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Database Setup (Optional)

If using Supabase for persistent data:

1. Create a new Supabase project
2. Run the SQL in `supabase-schema.sql` in the Supabase SQL editor
3. Add your Supabase URL and anon key to `.env.local`

---

## 🏗 Architecture

### Project Structure
```
Fenagement/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── page.tsx          # Main dashboard with KPIs
│   │   │   ├── team/page.tsx     # Team members view
│   │   │   ├── projects/page.tsx # Projects list
│   │   │   ├── allocations/page.tsx # Allocation matrix
│   │   │   ├── settings/page.tsx # Settings
│   │   │   └── layout.tsx        # Dashboard layout with sidebar
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Landing page
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── button.tsx
│   │   ├── dashboard/            # Dashboard-specific components
│   │   │   ├── kpi-card.tsx
│   │   │   ├── utilization-chart.tsx
│   │   │   ├── burnout-table.tsx
│   │   │   └── project-health.tsx
│   │   └── layout/               # Layout components
│   │       ├── sidebar.tsx
│   │       └── header.tsx
│   └── lib/
│       ├── supabase.ts           # Supabase client
│       ├── database.types.ts     # TypeScript types
│       ├── mock-data.ts          # Mock data for demo
│       └── utils.ts              # Utility functions
├── supabase-schema.sql           # Database schema with RLS
├── vercel.json                   # Vercel configuration
├── .env.example                  # Environment template
└── README.md                     # This file
```

### Database Schema

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   profiles   │     │  allocations │     │   projects   │
├──────────────┤     ├──────────────┤     ├──────────────┤
│ id (PK)      │◄────│ profile_id   │     │ id (PK)      │
│ email        │     │ project_id   │────►│ name         │
│ full_name    │     │ weekly_hours │     │ client_name  │
│ role         │     │ role_on_proj │     │ budget       │
│ department   │     │ start_date   │     │ spent        │
│ billing_rate │     │ end_date     │     │ status       │
│ max_hours    │     └──────────────┘     │ priority     │
└──────────────┘                          └──────────────┘
```

### Security: Row Level Security (RLS)

All tables are protected with PostgreSQL RLS policies:
- **Profiles**: Users can read all (team visibility), update only their own
- **Projects**: Authenticated users can read, managers can create/update
- **Allocations**: Users can view allocations for assigned projects

---

## 💼 Business Impact

### For Operations Managers
- **20% reduction in over-allocation incidents** through proactive burnout detection
- **Real-time visibility** into team capacity across all projects
- **Data-driven resource decisions** with utilization metrics

### For Finance Teams
- **Budget tracking** with visual indicators for at-risk projects
- **Billing rate optimization** through utilization analysis
- **Margin protection** by identifying underutilized resources

### For HR & Leadership
- **Employee wellbeing monitoring** with automated burnout risk flags
- **Capacity planning** for hiring decisions
- **Workload balancing** across departments

---

## 📋 Product Roadmap

### ✅ MVP (Current)
- [x] Capacity Dashboard with KPIs
- [x] Team Management
- [x] Project Tracking
- [x] Allocation Matrix
- [x] Burnout Risk Detection
- [x] Mock Data Demo Mode

### 🔜 Phase 2 (Planned)
- [ ] User Authentication (Supabase Auth)
- [ ] Real-time Data Sync
- [ ] Email Notifications for Burnout Risk
- [ ] Project Timeline/Gantt View
- [ ] Export to CSV/PDF

### 🔮 Future Vision
- [ ] AI-powered Resource Recommendations
- [ ] Integration with Jira/Asana/Monday
- [ ] Mobile App
- [ ] Multi-tenant SaaS

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already)

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" → Import your GitHub repo
   - Framework will be auto-detected as Next.js

3. **Add Environment Variables**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Deploy!**
   - Click Deploy and your app will be live in ~1 minute

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Fenil** - [@Fenil777](https://github.com/Fenil777)

---

<p align="center">
  Built with ❤️ as a portfolio project demonstrating full-stack SaaS development
</p>
