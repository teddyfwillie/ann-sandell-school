import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Card } from '@/components/ui/Card';

interface IconFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function IconFeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: IconFeatureCardProps) {
  return (
    <Card className={cn('text-center', className)}>
      <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <Icon className="h-8 w-8 text-gold-600" />
      </div>
      <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
        {title}
      </h3>
      <p className="text-navy-600">
        {description}
      </p>
    </Card>
  );
}
