'use client';

import React from 'react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

const posts = [
  {
    id: 1,
    title: 'First date went well, but...',
    content: 'She kept checking her phone. Is this a red flag or am I overthinking?',
    upvotes: 2,
  },
  {
    id: 2,
    title: 'Red flag: always on her phone',
    content: 'Every time we meet, she is glued to her screen. Anyone else experienced this?',
    upvotes: 5,
  },
];

export default function ForumPage() {
  return (
    <div className="container mx-auto py-8 max-w-2xl space-y-6">
      <h2 className="text-3xl font-extrabold mb-4 text-charcoal dark:text-offwhite">Anonymous Forum</h2>
      <p className="text-taupe mb-8">Share experiences, vote on polls, and flag suspicious behavior.</p>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="relative">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center mr-2">
                <Button variant="ghost" size="sm" aria-label="Upvote post" className="mb-1">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                </Button>
                <span className="text-gold font-bold text-sm">{post.upvotes}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-charcoal dark:text-offwhite">{post.title}</h3>
                <p className="text-taupe mb-2">{post.content}</p>
                <div className="flex gap-2 mt-2">
                  <Button variant="secondary" size="sm">Comment</Button>
                  <Button variant="ghost" size="sm">Flag</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
