import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProjects } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

function getBudgetStatus(spent: number, budget: number): 'safe' | 'warning' | 'critical' {
  const pct = (spent / budget) * 100;
  if (pct >= 90) return 'critical';
  if (pct >= 70) return 'warning';
  return 'safe';
}

function getStatusBadgeVariant(status: string) {
  switch (status) {
    case 'active': return 'info' as const;
    case 'completed': return 'success' as const;
    case 'at-risk': return 'danger' as const;
    case 'on-hold': return 'warning' as const;
    default: return 'default' as const;
  }
}

function getDaysRemaining(endDate: string | null): number | null {
  if (!endDate) return null;
  const end = new Date(endDate);
  const now = new Date('2024-04-01'); // Fixed date for demo
  return Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export function ProjectHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Health Overview</CardTitle>
        <p className="text-sm text-gray-500 mt-1">Budget utilization and project status</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockProjects.map(project => {
            const budgetPct = project.budget ? Math.round((project.spent / project.budget) * 100) : 0;
            const budgetStatus = project.budget ? getBudgetStatus(project.spent, project.budget) : 'safe';
            const daysRemaining = getDaysRemaining(project.end_date);

            return (
              <div key={project.id} className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{project.name}</h4>
                      <Badge variant={getStatusBadgeVariant(project.status)}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                      </Badge>
                      {project.priority === 'high' && (
                        <Badge variant="danger">High Priority</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{project.client_name}</p>
                  </div>
                  {daysRemaining !== null && (
                    <span className={cn(
                      'text-xs font-medium px-2 py-1 rounded-md',
                      daysRemaining < 30 ? 'bg-red-50 text-red-700' :
                      daysRemaining < 60 ? 'bg-amber-50 text-amber-700' : 'bg-gray-50 text-gray-600'
                    )}>
                      {daysRemaining > 0 ? `${daysRemaining}d left` : 'Overdue'}
                    </span>
                  )}
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Budget: ${project.spent.toLocaleString()} / ${project.budget?.toLocaleString()}</span>
                    <span className={cn(
                      'font-medium',
                      budgetStatus === 'critical' ? 'text-red-600' :
                      budgetStatus === 'warning' ? 'text-amber-600' : 'text-green-600'
                    )}>{budgetPct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className={cn(
                        'h-2 rounded-full transition-all',
                        budgetStatus === 'critical' ? 'bg-red-500' :
                        budgetStatus === 'warning' ? 'bg-amber-500' : 'bg-green-500'
                      )}
                      style={{ width: `${Math.min(budgetPct, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
