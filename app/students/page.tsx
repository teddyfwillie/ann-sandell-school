import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  Calendar,
  Clock,
  Download,
  GraduationCap,
  Users,
  Laptop,
  Heart,
} from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Student Resources',
  description: 'Access important resources, forms, schedules, and information for Ann Sandell High School students.',
};

const quickLinks = [
  {
    title: 'Academic Calendar',
    description: 'View important dates, holidays, and exam schedules.',
    icon: Calendar,
    href: '/calendar',
  },
  {
    title: 'Class Schedules',
    description: 'Find your daily class schedule and room assignments.',
    icon: Clock,
    href: '#schedules',
  },
  {
    title: 'Library Resources',
    description: 'Access online databases and library catalog.',
    icon: BookOpen,
    href: '#library',
  },
  {
    title: 'Student Portal',
    description: 'Check grades, attendance, and assignments.',
    icon: Laptop,
    href: '#portal',
  },
];

const forms = [
  { name: 'Absence Excuse Form', type: 'PDF' },
  { name: 'Activity Permission Slip', type: 'PDF' },
  { name: 'Transcript Request Form', type: 'PDF' },
  { name: 'Club Registration Form', type: 'PDF' },
  { name: 'Bus Transportation Request', type: 'PDF' },
  { name: 'Medical Information Update', type: 'PDF' },
];

const support = [
  {
    title: 'Academic Counseling',
    description: 'Get help with course selection, study skills, and academic planning.',
    icon: GraduationCap,
  },
  {
    title: 'Peer Tutoring',
    description: 'Connect with fellow students for subject-specific help.',
    icon: Users,
  },
  {
    title: 'Technology Help',
    description: 'Assistance with school accounts and devices.',
    icon: Laptop,
  },
  {
    title: 'Personal Support',
    description: 'Confidential counseling services available.',
    icon: Heart,
  },
];

export default function StudentsPage() {
  return (
    <>
      <HeroSection
        title="Student Resources"
        subtitle="Everything you need to succeed at Ann Sandell High School."
        imageSrc="/images/students-hero.jpg"
        imageAlt="Students studying together"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Students' }]} />
      </div>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="Quick Access"
            title="Essential Resources"
            subtitle="Find what you need quickly."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.title} href={link.href}>
                  <Card className="h-full text-center group">
                    <div className="w-14 h-14 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors">
                      <Icon className="h-7 w-7 text-gold-600" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-navy-600 text-sm">
                      {link.description}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bell Schedule */}
      <section id="schedules" className="section-padding bg-navy-50">
        <div className="container-site">
          <SectionHeader
            overline="Daily Schedule"
            title="Bell Schedule"
            subtitle="Regular school day timing."
          />

          <div className="max-w-2xl mx-auto">
            <Card hover={false}>
              <div className="divide-y divide-navy-100">
                {[
                  { period: 'Period 1', time: '7:45 AM - 8:30 AM' },
                  { period: 'Period 2', time: '8:35 AM - 9:20 AM' },
                  { period: 'Period 3', time: '9:25 AM - 10:10 AM' },
                  { period: 'Break', time: '10:10 AM - 10:30 AM', isBreak: true },
                  { period: 'Period 4', time: '10:30 AM - 11:15 AM' },
                  { period: 'Period 5', time: '11:20 AM - 12:05 PM' },
                  { period: 'Lunch', time: '12:05 PM - 12:50 PM', isBreak: true },
                  { period: 'Period 6', time: '12:50 PM - 1:35 PM' },
                  { period: 'Period 7', time: '1:40 PM - 2:25 PM' },
                  { period: 'Period 8', time: '2:30 PM - 3:15 PM' },
                ].map((item) => (
                  <div
                    key={item.period}
                    className={`flex justify-between py-3 ${
                      item.isBreak ? 'bg-gold-50 -mx-6 px-6' : ''
                    }`}
                  >
                    <span className={`font-medium ${item.isBreak ? 'text-gold-700' : 'text-navy-900'}`}>
                      {item.period}
                    </span>
                    <span className="text-navy-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Forms & Documents */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="Downloads"
            title="Forms & Documents"
            subtitle="Downloadable forms for students and parents."
          />

          <div className="max-w-3xl mx-auto">
            <Card hover={false} padding="none">
              <div className="divide-y divide-navy-100">
                {forms.map((form) => (
                  <div
                    key={form.name}
                    className="flex items-center justify-between p-4 hover:bg-navy-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-navy-400" />
                      <span className="font-medium text-navy-900">{form.name}</span>
                      <span className="text-xs bg-navy-100 text-navy-600 px-2 py-0.5 rounded">
                        {form.type}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" leftIcon={<Download className="h-4 w-4" />}>
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="section-padding bg-navy-900">
        <div className="container-site">
          <SectionHeader
            title="Student Support Services"
            subtitle="We're here to help you succeed academically and personally."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="bg-navy-800 border-navy-700">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-gold-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-navy-300 text-sm">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact">
              <Button variant="primary">Contact Counseling Office</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="section-padding bg-gold-500">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
              Need Something Else?
            </h2>
            <p className="text-navy-800 text-lg mb-8">
              Can&apos;t find what you&apos;re looking for? Reach out to us.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
              <Link href="/calendar">
                <Button variant="outline">View Calendar</Button>
              </Link>
              <Link href="/news">
                <Button variant="outline">School News</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
