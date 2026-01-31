'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface NewsletterSignupProps {
  variant?: 'light' | 'dark';
}

export function NewsletterSignup({ variant = 'light' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`flex items-center gap-3 ${variant === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        <div className="w-10 h-10 bg-success-light rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="h-5 w-5 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="text-sm">
          Thanks for subscribing! Check your email to confirm.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={variant === 'dark' ? 'bg-navy-800 border-navy-700 text-white placeholder:text-navy-400' : ''}
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        isLoading={isSubmitting}
        leftIcon={!isSubmitting ? <Mail className="h-4 w-4" /> : undefined}
      >
        Subscribe
      </Button>
    </form>
  );
}
