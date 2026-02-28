import Link from 'next/link';
import { ArrowRight, BarChart3, Users, Shield, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl">Fenagement</span>
        </div>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Open Dashboard <ArrowRight className="w-4 h-4" />
        </Link>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Open Source · Portfolio Project
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Resource Management
          <br />
          <span className="text-blue-400">Made Intelligent</span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Track team bandwidth, prevent employee burnout, monitor project budgets,
          and optimize resource allocation — all in one powerful dashboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            View Live Dashboard <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://github.com/Fenil777/Fenagement"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            View on GitHub
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: BarChart3, title: 'Capacity Planning', desc: 'Real-time KPIs and utilization metrics', iconBg: 'bg-blue-600/20', iconColor: 'text-blue-400' },
            { icon: Users, title: 'Burnout Detection', desc: 'Proactively identify over-allocated employees', iconBg: 'bg-red-600/20', iconColor: 'text-red-400' },
            { icon: Shield, title: 'Budget Tracking', desc: 'Monitor spend vs budget with visual alerts', iconBg: 'bg-green-600/20', iconColor: 'text-green-400' },
            { icon: Zap, title: 'Smart Allocation', desc: 'Visualize resource distribution across projects', iconBg: 'bg-purple-600/20', iconColor: 'text-purple-400' },
          ].map(({ icon: Icon, title, desc, iconBg, iconColor }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:bg-white/10 transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        Built with Next.js 14, TypeScript, Tailwind CSS, and Recharts · MIT License
      </footer>
    </div>
  );
}
