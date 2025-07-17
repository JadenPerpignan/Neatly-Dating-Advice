'use client';

import { Button } from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal dark:text-offwhite">
              <span className="text-gold dark:text-gold">Neatly</span>
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-charcoal/80 dark:text-offwhite/80 leading-relaxed max-w-3xl mx-auto">
            A supportive, anonymous community for men to share dating experiences,
            flag red flags, and move with intention—not fear.
          </p>

          {/* Description */}
          <p className="text-lg text-charcoal/70 dark:text-offwhite/70 leading-relaxed max-w-2xl mx-auto">
            Join a community where you can learn from others&apos; experiences, 
            share your own stories, and build confidence in your dating journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/dashboard">
              <Button size="xl" className="w-full sm:w-auto font-semibold">
                Get Started
              </Button>
            </Link>
            <Link href="/forum">
              <Button variant="secondary" size="xl" className="w-full sm:w-auto font-semibold">
                Explore Forum
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-taupe/5 dark:bg-taupe/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gold/20 dark:bg-gold/30 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal dark:text-offwhite">Anonymous & Safe</h3>
              <p className="text-charcoal/70 dark:text-offwhite/70">Share your experiences without revealing your identity</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gold/20 dark:bg-gold/30 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal dark:text-offwhite">Community Support</h3>
              <p className="text-charcoal/70 dark:text-offwhite/70">Connect with others who understand your journey</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gold/20 dark:bg-gold/30 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal dark:text-offwhite">Smart Insights</h3>
              <p className="text-charcoal/70 dark:text-offwhite/70">Learn from collective wisdom and avoid common pitfalls</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
