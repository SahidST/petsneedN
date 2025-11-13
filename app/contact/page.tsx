import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Contact Pet\'s Need | Pet Care Center in Alipore Kolkata | Get Directions',
  description: 'Contact Pet\'s Need at 10/1D Diamond Harbour Rd, Alipore, Kolkata. Call 7411576879 for grooming, vet services, pet supplies. Open daily 10 AM-10 PM. Serving South Kolkata pet families.',
  keywords: ['contact Pet\'s Need', 'pet care Alipore address', 'pet grooming Kolkata contact', 'vet clinic Alipore phone'],
}

const contactFAQs: FAQItem[] = [
  {
    question: 'What\'s the best way to reach you?',
    answer: 'For immediate assistance, call us at 7411576879. For non-urgent questions, you can also WhatsApp us or email contact@petsneed.in.'
  },
  {
    question: 'Do I need an appointment?',
    answer: 'For grooming and shopping, walk-ins are welcome daily from 10 AM to 10 PM. For veterinary services, please call ahead to confirm doctor availability.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, parking is available near our location on Diamond Harbour Road, Alipore.'
  },
  {
    question: 'How do I get directions?',
    answer: 'Click "Get Directions" on our contact cards or map, or search "Pet\'s Need Alipore" on Google Maps. We\'re easily accessible from all parts of South Kolkata.'
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-dark">
            Come Say Hi!
          </h1>
          <p className="text-lg md:text-xl text-text-medium max-w-3xl mx-auto">
            Visit us in Alipore, give us a call, or send a message. We're here to help with all your pet care needs.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <a
              href="tel:7411576879"
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center focus-visible-ring group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-fredoka text-xl font-semibold mb-2 text-text-dark">
                Call Us
              </h3>
              <p className="text-primary font-semibold text-lg mb-1">7411576879</p>
              <p className="text-text-medium text-sm">Talk to our team</p>
            </a>

            <a
              href="https://wa.me/917411576879"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center focus-visible-ring group"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-text-dark" />
              </div>
              <h3 className="font-fredoka text-xl font-semibold mb-2 text-text-dark">
                WhatsApp Us
              </h3>
              <p className="text-text-medium text-sm mb-1">Quick responses</p>
              <p className="text-primary font-semibold">Chat with us now</p>
            </a>

            <a
              href="https://maps.app.goo.gl/your-map-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center focus-visible-ring group"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-fredoka text-xl font-semibold mb-2 text-text-dark">
                Visit Us
              </h3>
              <p className="text-text-dark text-sm mb-1">10/1D, Diamond Harbour Rd</p>
              <p className="text-text-dark text-sm">Alipore, Kolkata 700027</p>
            </a>

            <a
              href="mailto:contact@petsneed.in"
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center focus-visible-ring group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-fredoka text-xl font-semibold mb-2 text-text-dark">
                Email Us
              </h3>
              <p className="text-primary font-semibold text-sm mb-1">contact@petsneed.in</p>
              <p className="text-text-medium text-sm">We'll reply soon</p>
            </a>
          </div>
        </div>
      </section>

      {/* Store Hours */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto bg-accent p-8 md:p-12 rounded-3xl shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock className="w-10 h-10 text-primary" />
              <h2 className="font-fredoka text-3xl md:text-4xl font-semibold text-text-dark">
                Store Hours
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-poppins font-semibold text-xl mb-3 text-text-dark">
                  Store, Grooming & Pharmacy:
                </h3>
                <p className="text-primary font-semibold text-2xl">Open Daily: 10:00 AM - 10:00 PM</p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h3 className="font-poppins font-semibold text-xl mb-3 text-text-dark">
                  Veterinary Clinic:
                </h3>
                <p className="text-text-medium mb-2">Please call before visiting</p>
                <p className="text-text-medium mb-2">Doctor availability varies</p>
                <a href="tel:7411576879" className="text-primary font-semibold hover:underline">
                  Call 7411576879 to confirm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Address */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Get Directions
          </h2>

          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Map */}
            <div className="lg:col-span-3">
              <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-text-dark mb-2">
                    Interactive Map
                  </p>
                  <p className="text-text-medium mb-4">
                    Search "Pet's Need Alipore" on Google Maps
                  </p>
                  <a
                    href="https://maps.app.goo.gl/your-map-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-primary-hover transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Address Info */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-center">
                <h3 className="font-fredoka text-2xl font-semibold mb-6 text-text-dark">
                  Visit Our Store
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text-dark mb-1">Address</p>
                      <p className="text-text-medium">
                        Pet's Need<br />
                        10/1D, Diamond Harbour Road<br />
                        Alipore, Kolkata<br />
                        West Bengal 700027
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text-dark mb-1">Phone</p>
                      <a href="tel:7411576879" className="text-primary hover:underline">
                        7411576879
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-text-dark mb-1">Hours</p>
                      <p className="text-text-medium">Open Daily: 10 AM - 10 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-text-medium mb-4">
                    Easily accessible from all parts of South Kolkata including Behala, Tollygunge, New Alipore, and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-4 text-center text-text-dark">
            Have Questions?
          </h2>
          <p className="text-center text-text-medium mb-12 max-w-2xl mx-auto">
            Check out our FAQ section for quick answers, or give us a call at <a href="tel:7411576879" className="text-primary hover:underline font-semibold">7411576879</a>. We're always happy to help!
          </p>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={contactFAQs} />
          </div>
        </div>
      </section>
    </>
  )
}
