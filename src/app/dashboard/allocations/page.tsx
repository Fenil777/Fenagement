import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockProfiles, mockProjects, mockAllocations, getTotalAllocatedHours } from '@/lib/mock-data';

export default function AllocationsPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Allocations" subtitle="Resource allocation matrix across all projects" />
      <div className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Allocation Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-4 font-semibold text-gray-600 min-w-[180px]">Team Member</th>
                    {mockProjects.map(p => (
                      <th key={p.id} className="text-center py-3 px-3 font-semibold text-gray-600 min-w-[120px]">
                        <div className="text-xs">{p.name}</div>
                      </th>
                    ))}
                    <th className="text-center py-3 px-4 font-semibold text-gray-600">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProfiles.map(profile => {
                    const totalHours = getTotalAllocatedHours(profile.id);
                    const isOverAllocated = totalHours > profile.max_weekly_hours;

                    return (
                      <tr key={profile.id} className={`border-b border-gray-50 ${isOverAllocated ? 'bg-red-50' : ''}`}>
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900">{profile.full_name}</div>
                          <div className="text-xs text-gray-500 capitalize">{profile.role}</div>
                        </td>
                        {mockProjects.map(project => {
                          const allocation = mockAllocations.find(
                            a => a.profile_id === profile.id && a.project_id === project.id
                          );
                          return (
                            <td key={project.id} className="py-3 px-3 text-center">
                              {allocation ? (
                                <div className="inline-flex flex-col items-center">
                                  <span className="font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs">
                                    {allocation.weekly_hours}h
                                  </span>
                                  <span className="text-xs text-gray-400 mt-0.5">{allocation.role_on_project}</span>
                                </div>
                              ) : (
                                <span className="text-gray-300">—</span>
                              )}
                            </td>
                          );
                        })}
                        <td className="py-3 px-4 text-center">
                          <span className={`font-bold text-sm ${isOverAllocated ? 'text-red-700' : 'text-gray-900'}`}>
                            {totalHours}h
                          </span>
                          {isOverAllocated && (
                            <Badge variant="danger" className="ml-2 text-xs">Over</Badge>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
