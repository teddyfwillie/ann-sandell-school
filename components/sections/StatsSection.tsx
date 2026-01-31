'use client';

import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { useCountUp } from '@/lib/hooks/useCountUp';
import { cn } from '@/lib/utils/cn';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}

export function StatsSection({
  stats,
  title,
  subtitle,
  dark = true,
  className,
}: StatsSectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={cn(
        'section-padding',
        dark ? 'bg-navy-900' : 'bg-white',
        className
      )}
    >
      <div className="container-site">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2
                className={cn(
                  'font-display text-3xl md:text-4xl font-bold mb-4',
                  dark ? 'text-white' : 'text-navy-900'
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  'text-lg max-w-2xl mx-auto',
                  dark ? 'text-navy-200' : 'text-navy-600'
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
              dark={dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  isVisible,
  delay,
  dark,
}: {
  stat: Stat;
  isVisible: boolean;
  delay: number;
  dark: boolean;
}) {
  const count = useCountUp({
    end: stat.value,
    duration: 2000,
    delay,
    enabled: isVisible,
  });

  return (
    <div className="text-center">
      <div
        className={cn(
          'font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2',
          dark ? 'text-gold-500' : 'text-navy-900'
        )}
      >
        {count}
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <div
        className={cn(
          'text-sm md:text-base uppercase tracking-wider font-medium',
          dark ? 'text-navy-300' : 'text-navy-600'
        )}
      >
        {stat.label}
      </div>
    </div>
  );
}
