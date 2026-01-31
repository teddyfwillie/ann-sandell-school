import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface ImageFeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  className?: string;
}

export function ImageFeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  className,
}: ImageFeatureCardProps) {
  return (
    <Link href={href} className={cn('group block', className)}>
      <article className="relative h-80 rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors">
            {title}
          </h3>
          <p className="text-white/80 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <span className="inline-flex items-center text-gold-400 text-sm font-medium group-hover:gap-2 transition-all">
            Learn more
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
