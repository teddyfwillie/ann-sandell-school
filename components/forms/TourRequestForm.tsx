'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

const gradeOptions = [
  { value: '7', label: 'Grade 7' },
  { value: '8', label: 'Grade 8' },
  { value: '9', label: 'Grade 9' },
  { value: '10', label: 'Grade 10' },
  { value: '11', label: 'Grade 11' },
  { value: '12', label: 'Grade 12' },
];

export function TourRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-success-light rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="h-8 w-8 text-success"
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
        <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
          Tour Request Submitted!
        </h3>
        <p className="text-navy-600">
          Thank you for your interest. Our admissions team will contact you within 2 business days to confirm your tour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Parent/Guardian Name"
          name="parentName"
          placeholder="Your full name"
          required
        />
        <Input
          label="Student Name"
          name="studentName"
          placeholder="Student's full name"
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+231 XXX XXX XXX"
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Select
          label="Interested Grade"
          name="grade"
          options={gradeOptions}
          placeholder="Select grade"
          required
        />
        <Input
          label="Preferred Date"
          name="preferredDate"
          type="date"
          required
        />
      </div>

      <Textarea
        label="Questions or Comments"
        name="comments"
        placeholder="Any specific questions or requests for your visit?"
        rows={3}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
      >
        Request Tour
      </Button>
    </form>
  );
}
