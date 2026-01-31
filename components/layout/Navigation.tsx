'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { navigation, type NavItem } from '@/lib/data/navigation';
import { siteConfig } from '@/lib/constants/site';
import { MobileMenu } from './MobileMenu';

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // Schedule state update after render to avoid cascading renders
      requestAnimationFrame(() => {
        setIsMobileMenuOpen(false);
      });
    }
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        )}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label={`${siteConfig.name} - Home`}
            >
              <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
                <span className="text-gold-500 font-display font-bold text-xl">A</span>
              </div>
              <div className="hidden sm:block">
                <span
                  className={cn(
                    'font-display font-bold text-lg leading-tight block transition-colors',
                    isScrolled ? 'text-navy-900' : 'text-white'
                  )}
                >
                  Ann Sandell
                </span>
                <span
                  className={cn(
                    'text-xs uppercase tracking-wider transition-colors',
                    isScrolled ? 'text-navy-600' : 'text-white/80'
                  )}
                >
                  High School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <NavItemComponent
                  key={item.href}
                  item={item}
                  isScrolled={isScrolled}
                  pathname={pathname}
                />
              ))}
            </div>

            {/* CTA + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link href="/admissions#tour" className="hidden sm:block">
                <Button variant="primary" size="md">
                  Schedule a Tour
                </Button>
              </Link>

              <button
                type="button"
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  isScrolled
                    ? 'text-navy-900 hover:bg-navy-50'
                    : 'text-white hover:bg-white/10'
                )}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
        pathname={pathname}
      />
    </>
  );
}

function NavItemComponent({
  item,
  isScrolled,
  pathname,
}: {
  item: NavItem;
  isScrolled: boolean;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  if (item.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          type="button"
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
            isScrolled
              ? isActive
                ? 'text-gold-600'
                : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
              : isActive
                ? 'text-gold-400'
                : 'text-white/90 hover:text-white hover:bg-white/10'
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {item.label}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 pt-2">
            <div className="bg-white rounded-xl shadow-xl border border-navy-100 py-2 min-w-[200px]">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    'block px-4 py-2.5 text-sm transition-colors',
                    pathname === child.href
                      ? 'text-gold-600 bg-gold-50'
                      : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
        isScrolled
          ? isActive
            ? 'text-gold-600'
            : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
          : isActive
            ? 'text-gold-400'
            : 'text-white/90 hover:text-white hover:bg-white/10'
      )}
    >
      {item.label}
    </Link>
  );
}
