import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Card } from '@/components/ui/Card';

interface StaffCardProps {
  name: string;
  title: string;
  department?: string;
  imageSrc: string;
  slug: string;
  email?: string;
  className?: string;
}

export function StaffCard({
  name,
  title,
  department,
  imageSrc,
  slug,
  email,
  className,
}: StaffCardProps) {
  return (
    <Card className={cn('group overflow-hidden', className)} padding="none">
      <Link href={`/staff/${slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/staff/${slug}`}>
          <h3 className="font-display text-lg font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-gold-600 text-sm font-medium mt-1">
          {title}
        </p>
        {department && (
          <p className="text-navy-500 text-sm mt-0.5">
            {department}
          </p>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-gold-600 transition-colors mt-3"
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </a>
        )}
      </div>
    </Card>
  );
}
