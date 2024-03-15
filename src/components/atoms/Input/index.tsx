import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'h-12 w-full rounded-md border border-transparent bg-white2 text-xs transition ease-in-out placeholder:text-gray2 focus:border-transparent focus:outline-0 focus:outline-offset-0 focus:ring-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
