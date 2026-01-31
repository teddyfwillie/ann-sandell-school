import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Users, Award, ArrowRight, Calendar } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { CTASection } from '@/components/sections/CTASection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { IconFeatureCard } from '@/components/cards/IconFeatureCard';
import { ImageFeatureCard } from '@/components/cards/ImageFeatureCard';
import { NewsCard } from '@/components/cards/NewsCard';
import { EventCard } from '@/components/cards/EventCard';
import { siteConfig } from '@/lib/constants/site';
import { featuredPrograms } from '@/lib/data/programs';
import { recentNews } from '@/lib/data/news';
import { upcomingEvents } from '@/lib/data/events';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        overline="Welcome to"
        title="Ann Sandell High School"
        subtitle="A premier educational institution dedicated to academic excellence, character development, and preparing students for success in an ever-changing world."
        imageSrc="/images/hero-campus.jpg"
        imageAlt="Ann Sandell High School campus"
        variant="primary"
        actions={[
          { label: 'Schedule a Tour', href: '/admissions#tour', variant: 'primary' },
          { label: 'Learn More', href: '/about', variant: 'outline' },
        ]}
      />

      {/* Mission & Values Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="Our Foundation"
            title="Mission & Values"
            subtitle="At Ann Sandell High School, we are committed to nurturing well-rounded individuals who will become leaders in their communities."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={GraduationCap}
              title="Academic Excellence"
              description="We maintain rigorous academic standards while providing personalized support to help every student reach their full potential."
            />
            <IconFeatureCard
              icon={Users}
              title="Character Development"
              description="Beyond academics, we cultivate integrity, respect, and responsibility to shape students into ethical leaders."
            />
            <IconFeatureCard
              icon={Award}
              title="Community Engagement"
              description="We encourage students to give back through service learning and active participation in community initiatives."
            />
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-site">
          <SectionHeader
            overline="Academics"
            title="Our Programs"
            subtitle="Comprehensive academic programs designed to prepare students for higher education and professional success."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <ImageFeatureCard
                key={program.id}
                title={program.title}
                description={program.description}
                imageSrc={program.imageSrc}
                imageAlt={program.title}
                href={`/about/academics#${program.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about/academics">
              <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatsSection
        title="Ann Sandell By the Numbers"
        subtitle="Join a community with a proven track record of excellence."
        stats={[
          { value: siteConfig.stats.founded, label: 'Founded' },
          { value: siteConfig.stats.students, suffix: '+', label: 'Students' },
          { value: siteConfig.stats.teachers, suffix: '+', label: 'Educators' },
          { value: siteConfig.stats.graduationRate, suffix: '%', label: 'Graduation Rate' },
        ]}
        dark
      />

      {/* Campus Life Preview */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                Campus Life
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6 heading-accent">
                Beyond the Classroom
              </h2>
              <p className="text-navy-600 text-lg mb-6">
                At Ann Sandell, education extends far beyond textbooks. Our vibrant campus life offers
                students opportunities to explore their passions, develop new skills, and build
                lifelong friendships through clubs, sports, arts, and community service.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '12+ student clubs and organizations',
                  'Championship-winning sports teams',
                  'Award-winning arts and music programs',
                  'Active community service initiatives',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-navy-700">
                    <span className="w-2 h-2 bg-gold-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/about/extracurricular">
                  <Button variant="primary">Explore Activities</Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline">View Gallery</Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/campus-life-1.jpg"
                    alt="Students in classroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/campus-life-2.jpg"
                    alt="Sports activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/campus-life-3.jpg"
                    alt="Art class"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/campus-life-4.jpg"
                    alt="School event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Community?"
        description="Schedule a campus tour to experience the Ann Sandell difference firsthand. Meet our teachers, explore our facilities, and discover why families choose us."
        primaryAction={{ label: 'Schedule a Tour', href: '/admissions#tour' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
        variant="gold"
      />

      {/* News & Events Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 heading-accent">
                  Latest News
                </h2>
                <Link
                  href="/news"
                  className="text-gold-600 hover:text-gold-700 font-medium inline-flex items-center gap-1"
                >
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {recentNews.map((article) => (
                  <NewsCard
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    imageSrc={article.imageSrc}
                    date={article.date}
                    category={article.category}
                    slug={article.slug}
                  />
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl font-bold text-navy-900 heading-accent">
                  Upcoming
                </h2>
                <Link
                  href="/calendar"
                  className="text-gold-600 hover:text-gold-700 font-medium inline-flex items-center gap-1"
                >
                  Full calendar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.slice(0, 4).map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    category={event.category}
                    compact
                  />
                ))}
              </div>

              <Link href="/calendar" className="block mt-6">
                <Button variant="outline" className="w-full" leftIcon={<Calendar className="h-4 w-4" />}>
                  View Full Calendar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
