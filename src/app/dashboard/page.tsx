import { Users, FolderKanban, AlertTriangle, TrendingUp } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { KpiCard } from '@/components/dashboard/kpi-card';
import { UtilizationChart } from '@/components/dashboard/utilization-chart';
import { BurnoutTable } from '@/components/dashboard/burnout-table';
import { ProjectHealth } from '@/components/dashboard/project-health';
import { mockProfiles, mockProjects, getTotalAllocatedHours } from '@/lib/mock-data';

export default function DashboardPage() {
  // KPI Calculations
  const totalTeamMembers = mockProfiles.length;
  const activeProjects = mockProjects.filter(p => p.status === 'active').length;
  
  // Average utilization
  const avgUtilization = Math.round(
    mockProfiles.reduce((sum, p) => {
      const hours = getTotalAllocatedHours(p.id);
      return sum + (hours / p.max_weekly_hours) * 100;
    }, 0) / totalTeamMembers
  );

  // Budget risk count (projects >70% spent)
  const budgetRiskCount = mockProjects.filter(p =>
    p.budget && (p.spent / p.budget) > 0.7
  ).length;

  // Total capacity vs allocated
  const totalCapacity = mockProfiles.reduce((sum, p) => sum + p.max_weekly_hours, 0);
  const totalAllocated = mockProfiles.reduce((sum, p) => sum + getTotalAllocatedHours(p.id), 0);
  const availableHours = totalCapacity - totalAllocated;

  return (
    <div className="flex-1 overflow-y-auto">
      <Header
        title="Capacity Dashboard"
        subtitle="Real-time resource utilization and team health monitoring"
      />
      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <KpiCard
            title="Team Utilization"
            value={`${avgUtilization}%`}
            subtitle="Average across all members"
            icon={TrendingUp}
            trend={{ value: 8, positive: false }}
            variant={avgUtilization > 90 ? 'danger' : avgUtilization > 75 ? 'warning' : 'success'}
          />
          <KpiCard
            title="Active Projects"
            value={activeProjects}
            subtitle={`${mockProjects.length} total projects`}
            icon={FolderKanban}
            variant="default"
          />
          <KpiCard
            title="Budget Risk"
            value={budgetRiskCount}
            subtitle="Projects approaching budget limit"
            icon={AlertTriangle}
            variant={budgetRiskCount > 2 ? 'danger' : budgetRiskCount > 0 ? 'warning' : 'success'}
          />
          <KpiCard
            title="Available Capacity"
            value={`${availableHours}h`}
            subtitle={`${totalAllocated}h allocated of ${totalCapacity}h`}
            icon={Users}
            variant={availableHours < 50 ? 'warning' : 'success'}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <UtilizationChart />
          </div>
          <div>
            <ProjectHealth />
          </div>
        </div>

        {/* Burnout Table */}
        <BurnoutTable />
      </div>
    </div>
  );
}
