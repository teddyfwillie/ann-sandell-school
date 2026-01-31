import Link from 'next/link';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils/cn';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface EventCardProps {
  title: string;
  description?: string;
  date: string;
  time?: string;
  location?: string;
  category: string;
  href?: string;
  compact?: boolean;
  className?: string;
}

export function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
  href,
  compact = false,
  className,
}: EventCardProps) {
  const eventDate = new Date(date);
  const day = format(eventDate, 'd');
  const month = format(eventDate, 'MMM');
  const fullDate = format(eventDate, 'EEEE, MMMM d, yyyy');

  const content = (
    <div className={cn('flex gap-4', compact && 'gap-3')}>
      {/* Date Badge */}
      <div
        className={cn(
          'flex-shrink-0 bg-gold-500 text-navy-900 rounded-lg text-center flex flex-col items-center justify-center',
          compact ? 'w-14 h-14' : 'w-16 h-16'
        )}
      >
        <span className={cn('font-display font-bold', compact ? 'text-xl' : 'text-2xl')}>
          {day}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide">
          {month}
        </span>
      </div>

      {/* Event Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className={cn(
              'font-display font-semibold text-navy-900 group-hover:text-gold-600 transition-colors',
              compact ? 'text-base' : 'text-lg',
              'line-clamp-1'
            )}
          >
            {title}
          </h3>
          <Badge variant="default" size="sm" className="flex-shrink-0">
            {category}
          </Badge>
        </div>

        {!compact && description && (
          <p className="text-navy-600 text-sm line-clamp-2 mb-2">
            {description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-navy-500">
          {!compact && (
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {fullDate}
            </span>
          )}
          {time && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {time}
            </span>
          )}
          {location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {location}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        <Card className={className} padding={compact ? 'sm' : 'md'}>
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card className={className} padding={compact ? 'sm' : 'md'} hover={false}>
      {content}
    </Card>
  );
}
