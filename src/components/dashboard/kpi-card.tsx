import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: { value: number; positive: boolean };
  variant?: 'default' | 'warning' | 'danger' | 'success';
}

const variantStyles = {
  default: 'text-blue-600 bg-blue-50',
  warning: 'text-amber-600 bg-amber-50',
  danger: 'text-red-600 bg-red-50',
  success: 'text-green-600 bg-green-50',
};

export function KpiCard({ title, value, subtitle, icon: Icon, trend, variant = 'default' }: KpiCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            )}
            {trend && (
              <div className={cn(
                'mt-2 inline-flex items-center text-xs font-medium',
                trend.positive ? 'text-green-600' : 'text-red-600'
              )}>
                <span>{trend.positive ? '↑' : '↓'} {Math.abs(trend.value)}%</span>
                <span className="ml-1 text-gray-500">vs last week</span>
              </div>
            )}
          </div>
          <div className={cn('p-3 rounded-xl', variantStyles[variant])}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
