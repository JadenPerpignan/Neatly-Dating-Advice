'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, header, children, footer, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'bg-white dark:bg-charcoal rounded-xl shadow-card p-6 border border-taupe/30 dark:border-taupe/40',
          className
        )}
        ref={ref}
        {...(props as any)}
      >
        {header && <div className="mb-4 font-semibold text-lg">{header}</div>}
        <div>{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </motion.div>
    );
  }
);
Card.displayName = 'Card'; 