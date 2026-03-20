import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CursorGlow } from '@/components/CursorGlow'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ARCHITECH Studio - Luxury Architecture & Design',
  description: 'Premium architectural design studio creating billion-dollar-worthy spaces. Residential, commercial, and interior design excellence.',
  generator: 'v0.app',
  keywords: ['architecture', 'design', 'luxury', 'commercial', 'residential', 'interior design'],
  authors: [{ name: 'ARCHITECH Studio' }],
  openGraph: {
    title: 'ARCHITECH Studio - Luxury Architecture & Design',
    description: 'Creating architectural masterpieces worth billions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARCHITECH Studio',
    description: 'Premium Architecture & Design',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">
        <CursorGlow />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
