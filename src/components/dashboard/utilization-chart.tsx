'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { utilizationChartData } from '@/lib/mock-data';

export function UtilizationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Utilization Trend</CardTitle>
        <p className="text-sm text-gray-500 mt-1">Weekly utilization across all active projects</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={utilizationChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="utilizationGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="week" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
            <Tooltip
              formatter={(value: number | undefined) => [`${value ?? 0}%`, 'Utilization']}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
            />
            <ReferenceLine y={100} stroke="#EF4444" strokeDasharray="4 4" label={{ value: 'Max Capacity', position: 'right', fontSize: 11, fill: '#EF4444' }} />
            <Area
              type="monotone"
              dataKey="utilization"
              stroke="#3B82F6"
              strokeWidth={2.5}
              fill="url(#utilizationGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
