import { cn } from '@/lib/utils';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'default' | 'info';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-amber-100 text-amber-800 border-amber-200',
  danger: 'bg-red-100 text-red-800 border-red-200',
  default: 'bg-gray-100 text-gray-800 border-gray-200',
  info: 'bg-blue-100 text-blue-800 border-blue-200',
};

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
      variantStyles[variant],
      className
    )}>
      {children}
    </span>
  );
}
