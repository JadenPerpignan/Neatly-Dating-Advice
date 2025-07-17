'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-offwhite mb-4">
            Your Profile
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-offwhite/70 max-w-2xl mx-auto">
            Manage your account settings, alert subscriptions, and privacy preferences.
          </p>
        </div>

        {/* Profile Content */}
        <div className="max-w-2xl mx-auto">
          {/* Profile Info Card */}
          <Card className="mb-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/20 dark:bg-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-charcoal dark:text-offwhite mb-2">
                  Anonymous User
                </h2>
                <p className="text-charcoal/70 dark:text-offwhite/70 text-sm">
                  Member since January 2024
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gold">12</div>
                  <div className="text-sm text-charcoal/70 dark:text-offwhite/70">Posts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold">5</div>
                  <div className="text-sm text-charcoal/70 dark:text-offwhite/70">Alerts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold">89</div>
                  <div className="text-sm text-charcoal/70 dark:text-offwhite/70">Upvotes</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Actions Card */}
          <Card>
            <h3 className="text-lg font-semibold text-charcoal dark:text-offwhite mb-6">
              Account Actions
            </h3>
            <div className="space-y-4">
              <Button variant="secondary" size="lg" className="w-full justify-start">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profile
              </Button>
              
              <Button variant="secondary" size="lg" className="w-full justify-start">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v1zm0 6h6V9H4v2zm0 4h6v-2H4v2z" />
                </svg>
                Manage Alerts
              </Button>
              
              <Button variant="secondary" size="lg" className="w-full justify-start">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Privacy Settings
              </Button>
              
              <div className="pt-4 border-t border-taupe/30 dark:border-taupe/40">
                <Button size="lg" className="w-full justify-start text-red-600 hover:text-red-700">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
