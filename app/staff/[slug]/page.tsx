import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { staff, getStaffBySlug } from '@/lib/data/staff';

interface StaffProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return staff.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: StaffProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getStaffBySlug(slug);

  if (!member) {
    return {
      title: 'Staff Member Not Found',
    };
  }

  return {
    title: `${member.name} - ${member.title}`,
    description: `Learn more about ${member.name}, ${member.title} at Ann Sandell High School.`,
  };
}

export default async function StaffProfilePage({ params }: StaffProfilePageProps) {
  const { slug } = await params;
  const member = getStaffBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <div className="bg-navy-900 pt-24 pb-16">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: 'Staff', href: '/staff' },
              { label: member.name },
            ]}
            className="text-navy-300 mb-8"
          />

          <Link
            href="/staff"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Staff Directory
          </Link>
        </div>
      </div>

      <div className="container-site -mt-8 pb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Photo */}
            <div className="md:w-1/3">
              <div className="relative aspect-[3/4] md:h-full">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="md:w-2/3 p-8 md:p-10">
              <Badge variant="gold" className="mb-4">{member.department}</Badge>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-2">
                {member.name}
              </h1>
              <p className="text-gold-600 text-xl font-medium mb-6">
                {member.title}
              </p>

              {/* Contact */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-navy-600 hover:text-gold-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  {member.email}
                </a>
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-2 text-navy-600 hover:text-gold-600 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {member.phone}
                  </a>
                )}
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-navy-900 mb-3">
                  About
                </h2>
                <p className="text-navy-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-navy-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-navy-900">
                      {member.yearsAtSchool}
                    </div>
                    <div className="text-navy-500 text-sm">Years at Ann Sandell</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-navy-900">
                      {member.specializations.length}
                    </div>
                    <div className="text-navy-500 text-sm">Specializations</div>
                  </div>
                </div>
              </div>

              {/* Education & Specializations */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-lg font-semibold text-navy-900 mb-3">
                    Education
                  </h2>
                  <ul className="space-y-2">
                    {member.education.map((edu) => (
                      <li key={edu} className="flex items-start gap-2 text-navy-600">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-navy-900 mb-3">
                    Specializations
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec) => (
                      <Badge key={spec} variant="default">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-8 pt-8 border-t border-navy-100">
                <a href={`mailto:${member.email}`}>
                  <Button variant="primary" leftIcon={<Mail className="h-4 w-4" />}>
                    Contact {member.name.split(' ')[0]}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
