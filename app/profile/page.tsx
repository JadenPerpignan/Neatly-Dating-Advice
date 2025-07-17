import React from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-offwhite dark:bg-charcoal px-4">
      <Card className="w-full max-w-md mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-2 text-charcoal dark:text-offwhite">Your Profile</h2>
        <p className="text-taupe mb-6">Manage your account and alert subscriptions here.</p>
        <div className="flex flex-col gap-3">
          <Button variant="secondary" size="md" className="w-full">Edit Profile</Button>
          <Button variant="ghost" size="md" className="w-full">Manage Alerts</Button>
          <Button variant="primary" size="md" className="w-full mt-2">Sign Out</Button>
        </div>
      </Card>
    </div>
  );
}
