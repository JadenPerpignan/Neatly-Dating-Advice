import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Button } from './Button';

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-charcoal shadow-subtle dark:shadow-card border-b border-taupe/30 dark:border-taupe/40">
      <div className="container mx-auto px-4 py-3 grid grid-cols-2 md:grid-cols-3 items-center">
        <Link href="/" className="font-extrabold text-2xl tracking-tight text-gold dark:text-gold">
          Neatly
        </Link>
        <div className="hidden md:flex justify-center gap-6">
          <Link href="/dashboard" className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors">Dashboard</Link>
          <Link href="/forum" className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors">Forum</Link>
          <Link href="/alerts" className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors">Alerts</Link>
          <Link href="/profile" className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors">Profile</Link>
        </div>
        <div className="flex justify-end items-center gap-2">
          <ThemeToggle />
          <Button variant="secondary" size="sm" className="hidden md:inline-flex">Sign Out</Button>
        </div>
      </div>
    </nav>
  );
}
