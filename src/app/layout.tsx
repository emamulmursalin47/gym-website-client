import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/src/components/providers';
import { Toaster } from '@/src/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PowerHouse Gym - Transform Your Body, Transform Your Life',
  description: 'Premium fitness center with state-of-the-art equipment, expert trainers, and a supportive community. Join PowerHouse Gym today and unlock your potential.',
  keywords: 'gym, fitness, workout, personal training, health, wellness, powerlifting, cardio',
  authors: [{ name: 'PowerHouse Gym' }],
  creator: 'PowerHouse Gym',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://powerhouse-gym.com',
    title: 'PowerHouse Gym - Transform Your Body, Transform Your Life',
    description: 'Premium fitness center with state-of-the-art equipment, expert trainers, and a supportive community.',
    siteName: 'PowerHouse Gym',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerHouse Gym - Transform Your Body, Transform Your Life',
    description: 'Premium fitness center with state-of-the-art equipment, expert trainers, and a supportive community.',
    creator: '@powerhousegym',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}