'use client';

import React from 'react';
import { Card } from '@/components/Card';

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 grid gap-8 md:grid-cols-3">
      <Card header="Alerts" className="col-span-1">
        <p className="text-taupe mb-2">Stay updated on flagged keywords and new alerts.</p>
        <ul className="text-charcoal dark:text-offwhite text-sm space-y-1">
          <li>• "Ghosting" flagged in 2 new posts</li>
          <li>• "Catfish" alert in your area</li>
        </ul>
      </Card>
      <Card header="Recent Posts" className="col-span-1 md:col-span-2">
        <p className="text-taupe mb-2">Your latest activity and community updates.</p>
        <ul className="text-charcoal dark:text-offwhite text-sm space-y-1">
          <li>• "First date went well, but..." <span className="text-gold">(2 upvotes)</span></li>
          <li>• "Red flag: always on her phone" <span className="text-gold">(5 upvotes)</span></li>
        </ul>
      </Card>
      <Card header="Check-ins" className="col-span-1 md:col-span-3">
        <p className="text-taupe mb-2">Log your mood or intentions for today.</p>
        <div className="flex gap-4">
          <button className="bg-gold text-offwhite rounded-lg px-4 py-2 font-semibold shadow-subtle hover:bg-orange transition">Check In</button>
          <button className="bg-taupe text-charcoal rounded-lg px-4 py-2 font-semibold shadow-subtle hover:bg-gold transition">View History</button>
        </div>
      </Card>
    </div>
  );
}
