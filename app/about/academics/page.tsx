import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, FlaskConical, Palette, Globe, Calculator, Briefcase } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { programs } from '@/lib/data/programs';

export const metadata: Metadata = {
  title: 'Academic Programs',
  description: 'Explore Ann Sandell High School\'s comprehensive academic programs including STEM, humanities, arts, and vocational training.',
};

const programIcons: Record<string, React.ElementType> = {
  stem: FlaskConical,
  humanities: BookOpen,
  arts: Palette,
  languages: Globe,
  business: Briefcase,
  vocational: Calculator,
};

export default function AcademicsPage() {
  const juniorPrograms = programs.filter((p) => p.level === 'junior');
  const seniorPrograms = programs.filter((p) => p.level === 'senior');

  return (
    <>
      <HeroSection
        title="Academic Programs"
        subtitle="Comprehensive curriculum designed to prepare students for higher education and professional success."
        imageSrc="/images/academics-hero.jpg"
        imageAlt="Students in a classroom"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs
          items={[
            { label: 'About', href: '/about' },
            { label: 'Academics' },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              A Holistic Approach to Education
            </h2>
            <p className="text-navy-600 text-lg mb-8">
              At Ann Sandell High School, we offer a balanced curriculum that combines rigorous academics
              with practical skills development. Our programs are designed to challenge students while
              providing the support they need to succeed.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-display text-3xl font-bold text-gold-500 mb-1">6</div>
                <div className="text-navy-600 text-sm">Academic Programs</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-gold-500 mb-1">20+</div>
                <div className="text-navy-600 text-sm">Subject Areas</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-gold-500 mb-1">1:15</div>
                <div className="text-navy-600 text-sm">Teacher-Student Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Secondary Programs */}
      <section className="section-padding bg-navy-50">
        <div className="container-site">
          <SectionHeader
            overline="Senior Secondary"
            title="Advanced Programs"
            subtitle="Specialized tracks for grades 10-12 preparing students for higher education."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seniorPrograms.map((program) => {
              const Icon = programIcons[program.id] || BookOpen;
              return (
                <Card key={program.id} id={program.id} padding="none" className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={program.imageSrc}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="gold">Senior</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-gold-600" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-navy-600 text-sm mb-4">
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.slice(0, 3).map((subject) => (
                        <Badge key={subject} variant="default" size="sm">
                          {subject}
                        </Badge>
                      ))}
                      {program.subjects.length > 3 && (
                        <Badge variant="default" size="sm">
                          +{program.subjects.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Junior Secondary Programs */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="Junior Secondary"
            title="Foundation Programs"
            subtitle="Core curriculum for grades 7-9 building a strong academic foundation."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {juniorPrograms.map((program) => {
              const Icon = programIcons[program.id] || BookOpen;
              return (
                <Card key={program.id} id={program.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-navy-600 text-sm mb-3">
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {program.subjects.map((subject) => (
                        <Badge key={subject} variant="default" size="sm">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Support */}
      <section className="section-padding bg-navy-900">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                Student Support
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Every Student Succeeds
              </h2>
              <p className="text-navy-200 text-lg mb-6">
                We provide comprehensive support services to ensure every student has the resources
                they need to excel academically and personally.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Academic tutoring and after-school help sessions',
                  'Career counseling and college preparation',
                  'Learning accommodations for diverse needs',
                  'Regular parent-teacher conferences',
                  'Study skills workshops and time management training',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <span className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="primary">Contact Our Counselors</Button>
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/student-support.jpg"
                alt="Teacher helping students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gold-500">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Learn more about our admissions process and how to become part of the Ann Sandell family.
          </p>
          <Link href="/admissions">
            <Button variant="secondary" size="lg">Apply Now</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
