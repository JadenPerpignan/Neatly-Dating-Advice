'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-offwhite mb-4">
            Alerts
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-offwhite/70 max-w-2xl mx-auto">
            Search for names or handles and subscribe to real-time alerts to stay informed about potential red flags.
          </p>
        </div>

        {/* Alert Subscription Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-charcoal dark:text-offwhite mb-2">
                  Subscribe to Alerts
                </h2>
                <p className="text-charcoal/70 dark:text-offwhite/70 text-sm">
                  Enter a name or handle to receive notifications when they're mentioned in the community.
                </p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="alert-input" className="block text-sm font-medium text-charcoal dark:text-offwhite mb-2">
                    Name or Handle
                  </label>
                  <input
                    id="alert-input"
                    type="text"
                    placeholder="Enter name or handle..."
                    className="w-full border border-taupe/50 rounded-lg px-4 py-3 bg-transparent focus:ring-2 focus:ring-gold focus:border-gold text-charcoal dark:text-offwhite placeholder-taupe/70 transition-colors"
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  Subscribe to Alerts
                </Button>
              </form>
            </div>
          </Card>
        </div>

        {/* Active Alerts Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-charcoal dark:text-offwhite mb-6">
            Active Alerts
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-charcoal dark:text-offwhite">@sarah_j</h3>
                  <p className="text-sm text-taupe dark:text-taupe/70">Added 2 days ago</p>
                </div>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-charcoal dark:text-offwhite">Jessica M.</h3>
                  <p className="text-sm text-taupe dark:text-taupe/70">Added 1 week ago</p>
                </div>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
