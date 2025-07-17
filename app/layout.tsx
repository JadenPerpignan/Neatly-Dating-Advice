import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Neatly – Men's Dating Safety & Advice",
  description: 'Confident, respectful, and supportive dating safety for men.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container mx-auto px-4 py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
