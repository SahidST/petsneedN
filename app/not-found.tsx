import Link from 'next/link'
import { Home, ShoppingBag, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-5">
      <div className="text-center max-w-2xl mx-auto">
        {/* Illustration */}
        <div className="mb-8 animate-float">
          <span className="text-9xl" role="img" aria-label="Confused puppy">
            🐶
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-dark">
          Oops! This Page Went to the Park
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl text-text-medium mb-12 leading-relaxed">
          We couldn't find what you're looking for. Maybe it's chasing squirrels? Let's get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hover focus-visible-ring"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-text-dark px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible-ring"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Products
          </Link>

          <a
            href="tel:7411576879"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-text-dark px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible-ring"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-text-medium">
            Need help? Call us at{' '}
            <a href="tel:7411576879" className="text-primary hover:underline font-semibold">
              7411576879
            </a>{' '}
            or visit our{' '}
            <Link href="/contact" className="text-primary hover:underline font-semibold">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
