import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';
import { siteConfig } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Ann Sandell High School. Contact our admissions, academics, or administration offices.',
};

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: `${siteConfig.contact.address.street}\n${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`
    )}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday - Friday\n7:30 AM - 4:00 PM',
  },
];

const departments = [
  {
    name: 'Admissions Office',
    email: 'admissions@annsandell.edu',
    phone: '+231 XXX XXX XXX',
    description: 'For enrollment inquiries and campus tours.',
  },
  {
    name: 'Academic Affairs',
    email: 'academics@annsandell.edu',
    phone: '+231 XXX XXX XXX',
    description: 'For curriculum, transcripts, and academic concerns.',
  },
  {
    name: 'Student Affairs',
    email: 'students@annsandell.edu',
    phone: '+231 XXX XXX XXX',
    description: 'For extracurricular activities and student support.',
  },
  {
    name: 'Finance Office',
    email: 'finance@annsandell.edu',
    phone: '+231 XXX XXX XXX',
    description: 'For tuition, fees, and payment inquiries.',
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or to schedule a visit."
        imageSrc="/images/contact-hero.jpg"
        imageAlt="School reception"
        variant="secondary"
      />

      <div className="container-site">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
      </div>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-navy-600 mb-6">
                Fill out the form below and we&apos;ll get back to you within 24-48 hours.
              </p>
              <Card>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-gold-600" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-900">{item.label}</p>
                        <p className="text-navy-600 whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block hover:bg-navy-50 -mx-3 px-3 py-2 rounded-lg transition-colors"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-navy-100">
                <p className="font-medium text-navy-900 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
                    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-navy-100 hover:bg-gold-500 text-navy-600 hover:text-navy-900 rounded-lg flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-padding bg-navy-50">
        <div className="container-site">
          <SectionHeader
            overline="Direct Lines"
            title="Department Contacts"
            subtitle="Reach out directly to the department that can best assist you."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Card key={dept.name}>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
                  {dept.name}
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-navy-600 hover:text-gold-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {dept.email}
                  </a>
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 text-navy-600 hover:text-gold-600 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {dept.phone}
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="h-96 bg-navy-200">
        <div className="w-full h-full flex items-center justify-center bg-navy-100">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-navy-400 mx-auto mb-4" />
            <p className="text-navy-600 font-medium">
              Map: {siteConfig.contact.address.street}
            </p>
            <p className="text-navy-500 text-sm">
              {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="section-padding bg-navy-900">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-navy-200 text-lg mb-8">
              Subscribe to our newsletter for school updates, event announcements, and important news.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
