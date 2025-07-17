'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-offwhite mb-2">
            Dashboard
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-offwhite/70">
            Welcome back. Here&apos;s what&apos;s happening in your community.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-3">
          {/* Alerts Card */}
          <Card header="Alerts" className="col-span-1">
            <p className="text-taupe dark:text-taupe/80 mb-4 text-sm">
              Stay updated on flagged keywords and new alerts.
            </p>
            <ul className="text-charcoal dark:text-offwhite text-sm space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-gold mt-1">•</span>
                <span>&quot;Ghosting&quot; flagged in 2 new posts</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-gold mt-1">•</span>
                <span>&quot;Catfish&quot; alert in your area</span>
              </li>
            </ul>
          </Card>

          {/* Recent Posts Card */}
          <Card header="Recent Posts" className="col-span-1 md:col-span-2">
            <p className="text-taupe dark:text-taupe/80 mb-4 text-sm">
              Your latest activity and community updates.
            </p>
            <ul className="text-charcoal dark:text-offwhite text-sm space-y-3">
              <li className="flex items-start justify-between">
                <span>&quot;First date went well, but...&quot;</span>
                <span className="text-gold font-medium">(2 upvotes)</span>
              </li>
              <li className="flex items-start justify-between">
                <span>&quot;Red flag: always on her phone&quot;</span>
                <span className="text-gold font-medium">(5 upvotes)</span>
              </li>
            </ul>
          </Card>

          {/* Check-ins Card */}
          <Card header="Check-ins" className="col-span-1 md:col-span-3">
            <p className="text-taupe dark:text-taupe/80 mb-6 text-sm">
              Log your mood or intentions for today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto">
                Check In
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto">
                View History
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
