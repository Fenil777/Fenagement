import { Header } from '@/components/layout/header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProfiles, getTotalAllocatedHours, getUtilizationPercentage, getBurnoutStatus } from '@/lib/mock-data';

export default function TeamPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Team" subtitle="Manage team members and view their current allocations" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockProfiles.map(member => {
            const allocatedHours = getTotalAllocatedHours(member.id);
            const utilization = getUtilizationPercentage(member.id, member.max_weekly_hours);
            const status = getBurnoutStatus(allocatedHours);

            return (
              <Card key={member.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {member.full_name?.split(' ').map(n => n[0]).join('') || '?'}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{member.full_name}</h3>
                        <p className="text-sm text-gray-500 capitalize">{member.role} · {member.department}</p>
                      </div>
                    </div>
                    {status === 'burnout-risk' && <Badge variant="danger">At Risk</Badge>}
                    {status === 'at-capacity' && <Badge variant="warning">At Capacity</Badge>}
                    {status === 'healthy' && <Badge variant="success">Healthy</Badge>}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-500">Weekly Hours</span>
                        <span className="font-medium">{allocatedHours}h / {member.max_weekly_hours}h</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${status === 'burnout-risk' ? 'bg-red-500' : status === 'at-capacity' ? 'bg-amber-500' : 'bg-green-500'}`}
                          style={{ width: `${Math.min(utilization, 100)}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Billing Rate</span>
                      <span className="font-medium">${member.billing_rate}/hr</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Utilization</span>
                      <span className="font-medium">{utilization}%</span>
                    </div>
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
