import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'India AI Safety Coordination Hub',
  description:
    'A coordination hub for AI Safety research, organisations, and policy practitioners across India.',
  openGraph: {
    title: 'India AI Safety Coordination Hub',
    description:
      'A coordination hub for AI Safety research, organisations, and policy practitioners across India.',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India AI Safety Coordination Hub',
    description:
      'A coordination hub for AI Safety research, organisations, and policy practitioners across India.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
