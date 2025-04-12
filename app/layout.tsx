import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://musper.com'),
  title: 'Musper Solutions - Empowering Businesses with Smart Solutions',
  description:
    'A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.',
  keywords:
    'business consultancy, digital transformation, business diagnostics, strategic planning, business advisory, Rwanda, Kigali',
  authors: [{ name: 'Musper Solutions' }],
  creator: 'Musper Solutions',
  publisher: 'Musper Solutions',
  generator: 'Next.js',
  applicationName: 'Musper Solutions Website',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://musper.com',
    title: 'Musper Solutions - Empowering Businesses with Smart Solutions',
    description:
      'A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.',
    siteName: 'Musper Solutions',
    images: [
      {
        url: '/Logo.png',
        width: 800,
        height: 600,
        alt: 'Musper Solutions Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musper Solutions - Empowering Businesses with Smart Solutions',
    description:
      'A premier consultancy firm specializing in empowering businesses with innovative and sustainable solutions.',
    images: ['/Logo.png'],
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
        <link rel='icon' href='/Logo.png' />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
