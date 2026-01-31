import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'gold' | 'navy';
  className?: string;
}

const variantStyles = {
  default: {
    bg: 'bg-navy-50',
    title: 'text-navy-900',
    desc: 'text-navy-600',
  },
  gold: {
    bg: 'bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600',
    title: 'text-navy-900',
    desc: 'text-navy-800',
  },
  navy: {
    bg: 'bg-navy-900',
    title: 'text-white',
    desc: 'text-navy-200',
  },
};

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'gold',
  className,
}: CTASectionProps) {
  const styles = variantStyles[variant];

  return (
    <section className={cn('section-padding', styles.bg, className)}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={cn(
              'font-display text-3xl md:text-4xl font-bold mb-4',
              styles.title
            )}
          >
            {title}
          </h2>

          {description && (
            <p className={cn('text-lg mb-8 max-w-2xl mx-auto', styles.desc)}>
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={primaryAction.href}>
              <Button
                variant={variant === 'gold' ? 'secondary' : 'primary'}
                size="lg"
              >
                {primaryAction.label}
              </Button>
            </Link>

            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className={
                    variant === 'navy'
                      ? 'border-white text-white hover:bg-white hover:text-navy-900'
                      : ''
                  }
                >
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
