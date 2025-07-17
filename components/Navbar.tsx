import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-2 border-b">
      <Link href="/" className="font-bold text-xl">
        Neatly
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/forum">Forum</Link>
        <Link href="/alerts">Alerts</Link>
        <Link href="/profile">Profile</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
