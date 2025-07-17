'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function AlertsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-offwhite dark:bg-charcoal px-4">
      <Card className="w-full max-w-md mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-2 text-charcoal dark:text-offwhite">Alerts</h2>
        <p className="text-taupe mb-6">Search for names or handles and subscribe to real-time alerts.</p>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter name or handle..."
            className="w-full border border-taupe/50 rounded-lg px-3 py-2 bg-transparent focus:ring-gold focus:border-gold text-charcoal dark:text-offwhite placeholder-taupe/70"
          />
          <Button variant="primary" size="md" className="w-full">Subscribe</Button>
        </form>
      </Card>
    </div>
  );
}
