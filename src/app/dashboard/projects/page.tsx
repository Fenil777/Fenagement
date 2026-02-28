import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProjects, mockAllocations } from '@/lib/mock-data';

function getStatusVariant(status: string) {
  switch (status) {
    case 'active': return 'info' as const;
    case 'completed': return 'success' as const;
    case 'at-risk': return 'danger' as const;
    case 'on-hold': return 'warning' as const;
    default: return 'default' as const;
  }
}

export default function ProjectsPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Projects" subtitle="Overview of all active and upcoming projects" />
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mockProjects.map(project => {
            const budgetPct = project.budget ? Math.round((project.spent / project.budget) * 100) : 0;
            const teamSize = new Set(mockAllocations.filter(a => a.project_id === project.id).map(a => a.profile_id)).size;

            return (
              <Card key={project.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base">{project.name}</h3>
                      <p className="text-sm text-gray-500">{project.client_name}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getStatusVariant(project.status)}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">Budget Utilization</span>
                        <span className={`font-medium ${budgetPct >= 90 ? 'text-red-600' : budgetPct >= 70 ? 'text-amber-600' : 'text-green-600'}`}>
                          {budgetPct}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${budgetPct >= 90 ? 'bg-red-500' : budgetPct >= 70 ? 'bg-amber-500' : 'bg-green-500'}`}
                          style={{ width: `${Math.min(budgetPct, 100)}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Budget</p>
                        <p className="font-medium">${project.budget?.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Spent</p>
                        <p className="font-medium">${project.spent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Team Size</p>
                        <p className="font-medium">{teamSize} members</p>
                      </div>
                    </div>
                    {project.end_date && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">End Date</span>
                        <span className="font-medium">{new Date(project.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
