import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, BookOpen, Users, Award } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { IconFeatureCard } from '@/components/cards/IconFeatureCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { siteConfig } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Ann Sandell High School\'s history, mission, vision, and core values that guide our educational approach.',
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Ann Sandell"
        subtitle="A legacy of excellence in education, shaping leaders for tomorrow since 1985."
        imageSrc="/images/about-hero.jpg"
        imageAlt="Ann Sandell High School campus overview"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs items={[{ label: 'About' }]} />
      </div>

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6 heading-accent">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-navy-600">
                <p>
                  Founded in {siteConfig.stats.founded}, Ann Sandell High School began as a small educational
                  institution with a big vision: to provide quality education to students in Liberia regardless
                  of their background.
                </p>
                <p>
                  Named after Ann Sandell, a pioneering educator who dedicated her life to advancing education
                  in West Africa, our school has grown from a single classroom to a comprehensive educational
                  campus serving over {siteConfig.stats.students} students.
                </p>
                <p>
                  Today, Ann Sandell High School stands as one of the most respected educational institutions
                  in the region, known for academic excellence, character development, and community engagement.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/about-history.jpg"
                  alt="Historical photo of Ann Sandell High School"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 p-6 rounded-xl">
                <div className="font-display text-4xl font-bold">{new Date().getFullYear() - siteConfig.stats.founded}+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy-50">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-navy-100">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-navy-600 text-lg">
                To provide a nurturing and challenging academic environment that empowers students to
                achieve academic excellence, develop strong character, and become responsible citizens
                who contribute positively to their communities and the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-navy-100">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-navy-600 text-lg">
                To be the leading educational institution in Liberia, recognized for producing well-rounded
                graduates who are critical thinkers, ethical leaders, and lifelong learners prepared to
                meet the challenges of a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="What We Stand For"
            title="Our Core Values"
            subtitle="These values guide everything we do at Ann Sandell High School."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <IconFeatureCard
              icon={BookOpen}
              title="Excellence"
              description="We pursue the highest standards in academics, athletics, and all endeavors, encouraging students to reach their full potential."
            />
            <IconFeatureCard
              icon={Heart}
              title="Integrity"
              description="We foster honesty, ethical behavior, and personal responsibility in all aspects of school life and beyond."
            />
            <IconFeatureCard
              icon={Users}
              title="Respect"
              description="We value diversity and treat all members of our community with dignity, kindness, and understanding."
            />
            <IconFeatureCard
              icon={Award}
              title="Perseverance"
              description="We encourage resilience and determination in the face of challenges, preparing students for lifelong success."
            />
            <IconFeatureCard
              icon={Target}
              title="Innovation"
              description="We embrace creative thinking and new approaches to education, preparing students for a changing world."
            />
            <IconFeatureCard
              icon={Eye}
              title="Service"
              description="We instill a commitment to community service and social responsibility in all our students."
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-navy-900">
        <div className="container-site">
          <SectionHeader
            title="School Leadership"
            subtitle="Meet the dedicated leaders guiding Ann Sandell High School."
            dark
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-800 p-6 rounded-xl text-center">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/staff/principal.jpg"
                  alt="Dr. James Kollie"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-1">Dr. James Kollie</h3>
              <p className="text-gold-400 font-medium mb-3">Principal</p>
              <p className="text-navy-200 text-sm">
                Leading with vision and dedication for over 15 years.
              </p>
            </div>
            <div className="bg-navy-800 p-6 rounded-xl text-center">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/staff/vice-principal.jpg"
                  alt="Mrs. Martha Weah"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-1">Mrs. Martha Weah</h3>
              <p className="text-gold-400 font-medium mb-3">Vice Principal</p>
              <p className="text-navy-200 text-sm">
                Overseeing academic excellence and student success.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/staff">
              <Button variant="primary">Meet Our Full Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gold-500">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Experience Ann Sandell
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            The best way to understand what makes Ann Sandell special is to visit our campus and see for yourself.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/admissions#tour">
              <Button variant="secondary" size="lg">Schedule a Tour</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
