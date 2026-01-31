import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '@/lib/constants/site';
import { footerNavigation } from '@/lib/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-display font-bold text-2xl">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl block">
                  Ann Sandell
                </span>
                <span className="text-navy-300 text-sm">High School</span>
              </div>
            </Link>

            <p className="text-navy-300 mb-6 max-w-sm">
              {siteConfig.description}
            </p>

            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-navy-200 hover:text-gold-400 transition-colors"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-navy-200 hover:text-gold-400 transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-navy-200">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              {footerNavigation.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Admissions</h3>
            <ul className="space-y-3">
              {footerNavigation.admissions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Students</h3>
            <ul className="space-y-3">
              {footerNavigation.students.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-site py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-400 text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-400 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
