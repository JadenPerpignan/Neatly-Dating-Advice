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
    <div className="min-h-screen bg-offwhite dark:bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal dark:text-offwhite mb-4">
            Anonymous Forum
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-offwhite/70 max-w-2xl">
            Share experiences, vote on polls, and flag suspicious behavior in a safe, anonymous environment.
          </p>
        </div>

        {/* Create Post Button */}
        <div className="mb-8">
          <Button size="lg" className="w-full sm:w-auto">
            Create New Post
          </Button>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="relative">
              <div className="flex items-start gap-4">
                {/* Upvote Section */}
                <div className="flex flex-col items-center mr-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    aria-label="Upvote post" 
                    className="mb-2 hover:bg-gold/10"
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      className="text-gold"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 15l7-7 7 7" 
                      />
                    </svg>
                  </Button>
                  <span className="text-gold font-bold text-sm">{post.upvotes}</span>
                </div>

                {/* Post Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-3 text-charcoal dark:text-offwhite">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/80 dark:text-offwhite/80 mb-4 leading-relaxed">
                    {post.content}
                  </p>
                  
                  {/* Post Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" size="sm">
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm">
                      Flag
                    </Button>
                    <span className="text-sm text-taupe dark:text-taupe/70 self-center">
                      2 hours ago
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
