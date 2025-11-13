import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCTABar from '@/components/MobileCTABar'

export const metadata: Metadata = {
  metadataBase: new URL('https://petsneed.in'),
  title: {
    default: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata | Grooming, Vet, Supplies",
    template: "%s | Pet's Need"
  },
  description: "Pet's Need is Alipore's trusted all-in-one pet care center offering professional grooming, veterinary services, and quality pet supplies for dogs, cats, and small pets. 5.0★ rated. Open daily 10 AM-10 PM. Call 7411576879.",
  keywords: ['pet care center Alipore', 'pet grooming Kolkata', 'vet clinic Alipore', 'pet shop near me', 'dog grooming Kolkata', 'cat grooming Alipore', 'pet supplies Kolkata', 'veterinary doctor Kolkata', 'pet store Diamond Harbour Road', 'pet care center South Kolkata', 'Behala', 'Tollygunge'],
  authors: [{ name: "Pet's Need" }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://petsneed.in',
    siteName: "Pet's Need",
    title: "Pet's Need | Complete Pet Care Center in Alipore, Kolkata",
    description: "Alipore's trusted all-in-one pet care center. Professional grooming, veterinary services, quality pet supplies. 5.0★ rated. Open daily 10 AM-10 PM.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Pet's Need - Pet Care Center Alipore Kolkata"
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pet's Need | Pet Care Center Alipore Kolkata",
    description: "Professional grooming, veterinary services, quality pet supplies. 5.0★ rated. Call 7411576879",
    images: ['/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600&family=Quicksand:wght@400&family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-quicksand bg-background text-text-dark antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  )
}
