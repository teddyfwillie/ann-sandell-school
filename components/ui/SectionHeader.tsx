import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  align?: 'left' | 'center';
  accent?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  overline,
  align = 'center',
  accent = true,
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {overline && (
        <span
          className={cn(
            'inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-3',
            dark ? 'text-gold-400' : 'text-gold-600'
          )}
        >
          {overline}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl font-bold',
          dark ? 'text-white' : 'text-navy-900',
          accent && 'heading-accent',
          accent && align === 'center' && 'heading-accent-center'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            dark ? 'text-navy-200' : 'text-navy-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
