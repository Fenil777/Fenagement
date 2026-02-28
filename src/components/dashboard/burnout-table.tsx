import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProfiles, getTotalAllocatedHours, getUtilizationPercentage, getBurnoutStatus } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { AlertTriangle } from 'lucide-react';

export function BurnoutTable() {
  const teamData = mockProfiles.map(profile => {
    const allocatedHours = getTotalAllocatedHours(profile.id);
    const utilization = getUtilizationPercentage(profile.id, profile.max_weekly_hours);
    const status = getBurnoutStatus(allocatedHours);
    return { ...profile, allocatedHours, utilization, status };
  }).sort((a, b) => b.allocatedHours - a.allocatedHours);

  const burnoutCount = teamData.filter(m => m.status === 'burnout-risk').length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Burnout Risk Detection</CardTitle>
            <p className="text-sm text-gray-500 mt-1">Employee bandwidth and utilization analysis</p>
          </div>
          {burnoutCount > 0 && (
            <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-3 py-1.5 rounded-lg">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">{burnoutCount} at risk</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Role</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Department</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600">Allocated Hrs</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600">Utilization</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((member, i) => (
                <tr
                  key={member.id}
                  className={cn(
                    'border-b border-gray-50 transition-colors',
                    member.status === 'burnout-risk' ? 'bg-red-50 hover:bg-red-100' :
                    member.status === 'at-capacity' ? 'bg-amber-50 hover:bg-amber-100' :
                    i % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-gray-50/50 hover:bg-gray-100'
                  )}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold',
                        member.status === 'burnout-risk' ? 'bg-red-500' :
                        member.status === 'at-capacity' ? 'bg-amber-500' : 'bg-blue-500'
                      )}>
                        {member.full_name?.split(' ').map(n => n[0]).join('') || '?'}
                      </div>
                      <span className={cn(
                        'font-medium',
                        member.status === 'burnout-risk' ? 'text-red-900' : 'text-gray-900'
                      )}>
                        {member.full_name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600 capitalize">{member.role}</td>
                  <td className="py-3 px-4 text-gray-600">{member.department}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={cn(
                      'font-bold',
                      member.status === 'burnout-risk' ? 'text-red-700' :
                      member.status === 'at-capacity' ? 'text-amber-700' : 'text-gray-900'
                    )}>
                      {member.allocatedHours}h
                    </span>
                    <span className="text-gray-400 text-xs ml-1">/ 40h</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-1.5">
                        <div
                          className={cn(
                            'h-1.5 rounded-full transition-all',
                            member.utilization > 100 ? 'bg-red-500' :
                            member.utilization === 100 ? 'bg-amber-500' : 'bg-green-500'
                          )}
                          style={{ width: `${Math.min(member.utilization, 100)}%` }}
                        />
                      </div>
                      <span className={cn(
                        'text-xs font-medium w-10',
                        member.utilization > 100 ? 'text-red-700' :
                        member.utilization === 100 ? 'text-amber-700' : 'text-gray-600'
                      )}>
                        {member.utilization}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {member.status === 'burnout-risk' && (
                      <Badge variant="danger">⚠ Burnout Risk</Badge>
                    )}
                    {member.status === 'at-capacity' && (
                      <Badge variant="warning">At Capacity</Badge>
                    )}
                    {member.status === 'healthy' && (
                      <Badge variant="success">Healthy</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
