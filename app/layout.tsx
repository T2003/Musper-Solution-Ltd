import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://musper.com'),
  title: 'Musper Solutions Ltd - Empowering Businesses with Smart Solutions',
  description:
    'A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.',
  keywords:
    'business consultancy, digital transformation, business diagnostics, strategic planning, business advisory, Rwanda, Kigali',
  authors: [{ name: 'Musper Solutions Ltd' }],
  creator: 'Musper Solutions Ltd',
  publisher: 'Musper Solutions Ltd',
  generator: 'Next.js',
  applicationName: 'Musper Solutions Website',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/Logo.jpg',
    apple: '/Logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muspersolutions.com',
    title: 'Musper Solutions Ltd - Empowering Businesses with Smart Solutions',
    description:
      'A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.',
    siteName: 'Musper Solutions Ltd',
    images: [
      {
        url: '/Logo.jpg',
        width: 800,
        height: 600,
        alt: 'Musper Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musper Solutions Ltd - Empowering Businesses with Smart Solutions',
    description:
      'A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.',
    images: ['/Logo.jpg'],
    creator: '@muspersolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/Logo.jpg' />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
