import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { getActivitiesByCategory } from '@/lib/data/extracurricular';

export const metadata: Metadata = {
  title: 'Extracurricular Activities',
  description: 'Explore clubs, sports, arts, and community service opportunities at Ann Sandell High School.',
};

export default function ExtracurricularPage() {
  return (
    <>
      <HeroSection
        title="Extracurricular Activities"
        subtitle="Discover your passions and develop new skills through our diverse range of clubs, sports, and programs."
        imageSrc="/images/extracurricular-hero.jpg"
        imageAlt="Students participating in activities"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs
          items={[
            { label: 'About', href: '/about' },
            { label: 'Extracurricular' },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Life Beyond the Classroom
            </h2>
            <p className="text-navy-600 text-lg">
              At Ann Sandell, we believe education extends beyond textbooks. Our extracurricular
              programs help students discover their talents, build character, develop leadership
              skills, and form lasting friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="section-padding bg-navy-50">
        <div className="container-site">
          <SectionHeader
            overline="Academic & Interest"
            title="Student Clubs"
            subtitle="Join like-minded peers to explore your interests and develop new skills."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getActivitiesByCategory('clubs').map((activity) => (
              <Card key={activity.id} padding="none" className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.imageSrc}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-navy-600 text-sm mb-4">
                    {activity.description}
                  </p>
                  <div className="space-y-2 text-sm text-navy-500">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {activity.meetingSchedule}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {activity.advisor}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="Athletics"
            title="Sports Programs"
            subtitle="Compete, train, and grow as part of our championship-caliber athletics program."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {getActivitiesByCategory('sports').map((activity) => (
              <Card key={activity.id} padding="none" className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.imageSrc}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-lg font-semibold text-white mb-1">
                      {activity.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {activity.meetingSchedule}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-navy-600 text-sm mb-2">
                    {activity.description}
                  </p>
                  <div className="text-sm text-navy-500">
                    <span className="font-medium">Coach:</span> {activity.advisor}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Arts */}
      <section className="section-padding bg-navy-900">
        <div className="container-site">
          <SectionHeader
            overline="Creative Expression"
            title="Arts Programs"
            subtitle="Express yourself through visual arts, music, drama, and more."
            dark
          />

          <div className="grid md:grid-cols-3 gap-6">
            {getActivitiesByCategory('arts').map((activity) => (
              <Card key={activity.id} className="bg-navy-800 border-navy-700">
                <div className="relative h-40 -mx-6 -mt-6 mb-4 rounded-t-xl overflow-hidden">
                  <Image
                    src={activity.imageSrc}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <Badge variant="gold" className="mb-3">Arts</Badge>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {activity.name}
                </h3>
                <p className="text-navy-300 text-sm mb-4">
                  {activity.description}
                </p>
                <div className="space-y-2 text-sm text-navy-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {activity.meetingSchedule}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {activity.advisor}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Service */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="Making a Difference"
            title="Community Service"
            subtitle="Learn the value of giving back through meaningful service projects."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {getActivitiesByCategory('service').map((activity) => (
              <Card key={activity.id} className="flex gap-4">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={activity.imageSrc}
                    alt={activity.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-navy-600 text-sm mb-2">
                    {activity.description}
                  </p>
                  <div className="text-sm text-navy-500">
                    <span className="font-medium">Schedule:</span> {activity.meetingSchedule}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding bg-gold-500">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Students can join multiple activities throughout the year. Contact our Student Affairs
            office to learn more about joining clubs and teams.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Contact Student Affairs</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
