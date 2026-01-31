'use client';

import { type LucideIcon } from 'lucide-react';
import { useCountUp } from '@/lib/hooks/useCountUp';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils/cn';
import { Card } from '@/components/ui/Card';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function StatCard({
  value,
  suffix,
  label,
  icon: Icon,
  className,
}: StatCardProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    triggerOnce: true,
  });

  const count = useCountUp({
    end: value,
    duration: 2000,
    enabled: isVisible,
  });

  return (
    <Card ref={ref} className={cn('text-center', className)} hover={false}>
      {Icon && (
        <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="h-6 w-6 text-gold-600" />
        </div>
      )}
      <div className="font-display text-4xl md:text-5xl font-bold text-navy-900 mb-2">
        {count}
        {suffix && <span className="text-gold-500">{suffix}</span>}
      </div>
      <div className="text-navy-600 font-medium">
        {label}
      </div>
    </Card>
  );
}
