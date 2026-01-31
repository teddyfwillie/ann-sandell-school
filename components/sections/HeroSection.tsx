import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';

interface HeroAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  overline?: string;
  actions?: HeroAction[];
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'primary' | 'secondary' | 'compact';
  children?: React.ReactNode;
}

const variantStyles = {
  primary: 'min-h-screen',
  secondary: 'min-h-[60vh]',
  compact: 'min-h-[40vh]',
};

export function HeroSection({
  title,
  subtitle,
  overline,
  actions,
  imageSrc = '/images/hero-default.jpg',
  imageAlt = 'Campus view',
  variant = 'primary',
  children,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative flex items-center justify-center',
        variantStyles[variant]
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {overline && (
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4 animate-stagger-1">
              {overline}
            </span>
          )}

          <h1
            className={cn(
              'font-display font-bold text-white mb-6 animate-stagger-2',
              variant === 'primary'
                ? 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                : variant === 'secondary'
                  ? 'text-3xl md:text-4xl lg:text-5xl'
                  : 'text-2xl md:text-3xl lg:text-4xl'
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={cn(
                'text-white/90 max-w-2xl mx-auto mb-8 animate-stagger-3',
                variant === 'primary' ? 'text-lg md:text-xl' : 'text-base md:text-lg'
              )}
            >
              {subtitle}
            </p>
          )}

          {actions && actions.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 animate-stagger-4">
              {actions.map((action, index) => (
                <Link key={action.label} href={action.href}>
                  <Button
                    variant={action.variant || (index === 0 ? 'primary' : 'outline')}
                    size="lg"
                    className={
                      action.variant === 'outline' || (!action.variant && index > 0)
                        ? 'border-white text-white hover:bg-white hover:text-navy-900'
                        : ''
                    }
                  >
                    {action.label}
                  </Button>
                </Link>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>

      {/* Scroll indicator - only for primary variant */}
      {variant === 'primary' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-2.5 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      )}
    </section>
  );
}
