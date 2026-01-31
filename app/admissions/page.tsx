import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, FileText, Calendar, HelpCircle, Phone } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TourRequestForm } from '@/components/forms/TourRequestForm';

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Learn about the admissions process at Ann Sandell High School. Apply now and join our community of learners.',
};

const admissionSteps = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Complete the online application form with student and family information.',
  },
  {
    step: 2,
    title: 'Submit Documents',
    description: 'Provide academic records, birth certificate, and other required documents.',
  },
  {
    step: 3,
    title: 'Entrance Assessment',
    description: 'Students complete an entrance assessment in English and Mathematics.',
  },
  {
    step: 4,
    title: 'Interview',
    description: 'Meet with our admissions team for a brief student and family interview.',
  },
  {
    step: 5,
    title: 'Decision & Enrollment',
    description: 'Receive your admission decision and complete enrollment if accepted.',
  },
];

const requirements = [
  'Completed application form',
  'Birth certificate or valid ID',
  'Previous school records/transcripts',
  'Two passport-sized photographs',
  'Health/immunization records',
  'Recommendation letter from previous school',
];

const faqs = [
  {
    question: 'What grades do you accept students for?',
    answer: 'We accept students for grades 7 through 12 (Junior and Senior Secondary).',
  },
  {
    question: 'What are the tuition fees?',
    answer: 'Tuition varies by grade level. Please contact our admissions office for current fee schedules.',
  },
  {
    question: 'Do you offer scholarships?',
    answer: 'Yes, we offer merit-based and need-based scholarships. See our Excellence Scholarship Program for details.',
  },
  {
    question: 'What is the student-to-teacher ratio?',
    answer: 'We maintain a 15:1 student-to-teacher ratio to ensure personalized attention.',
  },
  {
    question: 'Is transportation provided?',
    answer: 'Yes, we offer bus service covering major routes in and around Monrovia.',
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <HeroSection
        title="Join Ann Sandell"
        subtitle="Begin your journey to academic excellence. We welcome students who are eager to learn and grow."
        imageSrc="/images/admissions-hero.jpg"
        imageAlt="Students on campus"
        variant="secondary"
        actions={[
          { label: 'Apply Now', href: '#apply', variant: 'primary' },
          { label: 'Schedule a Tour', href: '#tour', variant: 'outline' },
        ]}
      />

      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Admissions' }]} />
      </div>

      {/* Admission Process */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="How to Apply"
            title="Admission Process"
            subtitle="Our straightforward admission process is designed to help you join our community with ease."
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold-200 hidden md:block" />

              <div className="space-y-8">
                {admissionSteps.map((step) => (
                  <div key={step.step} className="flex gap-6">
                    <div className="relative z-10 w-12 h-12 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-navy-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-navy-50">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                What You Need
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6 heading-accent">
                Application Requirements
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Ensure you have the following documents ready before starting your application.
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="#apply">
                  <Button variant="primary" size="lg" leftIcon={<FileText className="h-4 w-4" />}>
                    Start Application
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/admissions-apply.jpg"
                alt="Student filling out application"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Tour */}
      <section id="tour" className="section-padding bg-navy-900">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-400 text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
                Visit Our Campus
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Schedule a Tour
              </h2>
              <p className="text-navy-200 text-lg mb-6">
                The best way to experience Ann Sandell is to visit our campus. Schedule a tour to:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Meet our faculty and staff',
                  'Explore our facilities and classrooms',
                  'Learn about our academic programs',
                  'See student life in action',
                  'Get your questions answered',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <span className="w-2 h-2 bg-gold-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 text-navy-300">
                <Calendar className="h-5 w-5" />
                <span>Tours available Monday - Friday, 9:00 AM - 3:00 PM</span>
              </div>
            </div>
            <Card className="bg-white">
              <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">
                Request a Campus Tour
              </h3>
              <TourRequestForm />
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            overline="Questions?"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about admissions."
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} hover={false}>
                  <div className="flex gap-4">
                    <HelpCircle className="h-6 w-6 text-gold-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-navy-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-navy-600 mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button variant="secondary" leftIcon={<Phone className="h-4 w-4" />}>
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="section-padding bg-gold-500">
        <div className="container-site text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Applications are accepted on a rolling basis. Start your application today and join
            the Ann Sandell family.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:admissions@annsandell.edu?subject=Application%20Request"
              className="inline-block"
            >
              <Button variant="secondary" size="lg">
                Request Application Form
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
              >
                Contact Admissions Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
