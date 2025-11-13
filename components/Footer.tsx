import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-teal text-white">
      <div className="container mx-auto px-5 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐾</span>
              <span className="font-fredoka text-2xl font-semibold">Pet's Need</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              All the love, all the care. Your pet's happy place in Alipore, Kolkata.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <span className="text-xl">⭐</span>
              <span className="font-semibold">5.0 • 242+ Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-fredoka text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/grooming"
                  className="text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  Grooming
                </Link>
              </li>
              <li>
                <Link
                  href="/clinic"
                  className="text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  Clinic
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-fredoka text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Pet Grooming</li>
              <li>Veterinary Care</li>
              <li>Pet Supplies & Food</li>
              <li>Health & Pharmacy</li>
              <li>Dog Grooming Kolkata</li>
              <li>Cat Grooming Kolkata</li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="font-fredoka text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7411576879"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>7411576879</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917411576879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@petsneed.in"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>contact@petsneed.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/your-map-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors focus-visible-ring rounded"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>10/1D, Diamond Harbour Rd<br />Alipore, Kolkata 700027</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-300">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Open Daily: 10 AM - 10 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 py-6">
          <p className="text-center text-gray-300 text-sm">
            © {currentYear} Pet's Need. All rights reserved. | Trusted Pet Care Center in Alipore, Kolkata
          </p>
        </div>
      </div>
    </footer>
  )
}
