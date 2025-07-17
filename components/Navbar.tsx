import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Button } from './Button';

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-charcoal shadow-subtle dark:shadow-card border-b border-taupe/30 dark:border-taupe/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <span className="font-extrabold text-2xl tracking-tight text-gold dark:text-gold group-hover:text-orange transition-colors duration-200">
              Neatly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/dashboard" 
              className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-md text-sm"
            >
              Dashboard
            </Link>
            <Link 
              href="/forum" 
              className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-md text-sm"
            >
              Forum
            </Link>
            <Link 
              href="/alerts" 
              className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-md text-sm"
            >
              Alerts
            </Link>
            <Link 
              href="/profile" 
              className="font-medium text-charcoal dark:text-offwhite hover:text-gold dark:hover:text-gold transition-colors duration-200 px-3 py-2 rounded-md text-sm"
            >
              Profile
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="secondary" 
              size="sm" 
              className="hidden md:inline-flex font-medium"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
