import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils/cn';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface NewsCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  category: string;
  slug: string;
  featured?: boolean;
  className?: string;
}

export function NewsCard({
  title,
  excerpt,
  imageSrc,
  date,
  category,
  slug,
  featured = false,
  className,
}: NewsCardProps) {
  const formattedDate = format(new Date(date), 'MMM d, yyyy');

  if (featured) {
    return (
      <Card className={cn('group overflow-hidden', className)} padding="none">
        <Link href={`/news/${slug}`} className="flex flex-col md:flex-row">
          <div className="relative md:w-1/2 aspect-video md:aspect-auto">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="gold">{category}</Badge>
              <span className="flex items-center gap-1.5 text-sm text-navy-500">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
              {title}
            </h3>
            <p className="text-navy-600 mb-4 line-clamp-3">
              {excerpt}
            </p>
            <span className="inline-flex items-center text-gold-600 font-medium group-hover:gap-2 transition-all">
              Read more
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card className={cn('group overflow-hidden', className)} padding="none">
      <Link href={`/news/${slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="gold" size="sm">{category}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-navy-500">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-navy-600 text-sm line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </Card>
  );
}
