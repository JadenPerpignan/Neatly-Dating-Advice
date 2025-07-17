'use client';

import { getCsrfToken } from 'next-auth/react';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export default async function SignIn() {
  const csrfToken = await getCsrfToken();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-offwhite dark:bg-charcoal px-4">
      <Card className="w-full max-w-sm mx-auto shadow-card">
        <form
          method="post"
          action="/api/auth/callback/credentials"
          className="space-y-6"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken ?? ''} />
          <div className="mb-2">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-charcoal dark:text-offwhite">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-taupe/50 rounded-lg px-3 py-2 bg-transparent focus:ring-gold focus:border-gold text-charcoal dark:text-offwhite placeholder-taupe/70"
              placeholder="you@email.com"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-charcoal dark:text-offwhite">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full border border-taupe/50 rounded-lg px-3 py-2 bg-transparent focus:ring-gold focus:border-gold text-charcoal dark:text-offwhite placeholder-taupe/70"
              placeholder="••••••••"
            />
          </div>
          <Button type="submit" className="w-full" variant="primary" size="md">
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
}
