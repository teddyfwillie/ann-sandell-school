'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold tracking-wide
      rounded-lg
      transition-all duration-200
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
      primary: `
        bg-gold-500 text-navy-900
        hover:bg-gold-600
        active:bg-gold-700
        shadow-[0_4px_14px_rgba(244,180,26,0.35)]
        hover:shadow-[0_6px_20px_rgba(244,180,26,0.45)]
      `,
      secondary: `
        bg-navy-900 text-white
        hover:bg-navy-800
        active:bg-navy-950
        shadow-[0_4px_14px_rgba(13,27,42,0.25)]
        hover:shadow-[0_6px_20px_rgba(13,27,42,0.35)]
      `,
      outline: `
        bg-transparent text-navy-900
        border-2 border-navy-900
        hover:bg-navy-900 hover:text-white
        active:bg-navy-950
      `,
      ghost: `
        bg-transparent text-navy-700
        hover:bg-navy-50 hover:text-navy-900
        active:bg-navy-100
      `,
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      xl: 'h-14 px-8 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
