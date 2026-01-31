'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { type NavItem } from '@/lib/data/navigation';
import { siteConfig } from '@/lib/constants/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavItem[];
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, navigation, pathname }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-navy-100">
            <Link href="/" className="flex items-center gap-3" onClick={onClose}>
              <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
                <span className="text-gold-500 font-display font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-navy-900">
                {siteConfig.shortName}
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              className="p-2 text-navy-600 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navigation.map((item) => (
              <MobileNavItem
                key={item.href}
                item={item}
                pathname={pathname}
                onClose={onClose}
              />
            ))}
          </nav>

          {/* Footer CTA */}
          <div className="p-4 border-t border-navy-100">
            <Link href="/admissions#tour" onClick={onClose}>
              <Button variant="primary" size="lg" className="w-full">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

  if (item.children) {
    return (
      <div>
        <button
          type="button"
          className={cn(
            'w-full flex items-center justify-between px-6 py-3 text-left text-base font-medium transition-colors',
            isActive ? 'text-gold-600' : 'text-navy-900 hover:bg-navy-50'
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {item.label}
          <ChevronDown
            className={cn(
              'h-5 w-5 text-navy-400 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div className="bg-navy-50/50">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'block px-10 py-2.5 text-sm transition-colors',
                  pathname === child.href
                    ? 'text-gold-600'
                    : 'text-navy-600 hover:text-navy-900'
                )}
                onClick={onClose}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'block px-6 py-3 text-base font-medium transition-colors',
        isActive ? 'text-gold-600' : 'text-navy-900 hover:bg-navy-50'
      )}
      onClick={onClose}
    >
      {item.label}
    </Link>
  );
}
