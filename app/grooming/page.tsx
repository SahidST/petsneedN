'use client'

import { motion } from 'framer-motion'
import { Sparkles, Scissors, Heart, Cat, Baby } from 'lucide-react'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Button from '@/components/Button'
import ReadMore from '@/components/ReadMore'
import { FloatingBubbles, PawPrintPattern } from '@/components/DecorativeElements'

const groomingFAQs: FAQItem[] = [
  {
    question: 'How often should I get my dog groomed?',
    answer: 'It depends on breed and coat type. Long-haired breeds like Shih Tzus, Golden Retrievers, and Persians benefit from grooming every 4-6 weeks. Short-haired pets typically need grooming every 8-12 weeks. We\'ll recommend a schedule based on your pet\'s specific needs.'
  },
  {
    question: 'Is grooming stressful for cats?',
    answer: 'Not when done properly! Our groomers are trained in feline handling and create a calm, quiet environment. Many cats relax once they realize grooming feels good. We take breaks if needed and never force a stressed cat.'
  },
  {
    question: 'Can you groom aggressive or anxious pets?',
    answer: 'We have experience with nervous pets and use gentle handling techniques. For extremely anxious pets, we recommend shorter sessions or consulting with your vet about mild sedation options for their comfort and safety.'
  },
  {
    question: 'Do you use safe products?',
    answer: 'Absolutely. We use only pet-safe, dermatologically tested shampoos and products. For pets with sensitive skin or allergies, we offer hypoallergenic and medicated options.'
  },
  {
    question: 'How long does grooming take?',
    answer: 'Basic grooming typically takes 1-2 hours, while full grooming packages take 2-3 hours depending on your pet\'s size, coat condition, and temperament. You\'re welcome to wait or we can call you when they\'re ready.'
  }
]

export default function GroomingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-16 md:py-20 overflow-hidden">
        <FloatingBubbles />
        <PawPrintPattern />
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center relative z-10">
          <motion.h1
            className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pet Grooming in Kolkata
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-medium mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gentle, professional grooming that keeps your dog or cat looking great and feeling even better. Book your pet's spa day at Pet's Need in Alipore today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="tel:7411576879" variant="primary">
              Book Grooming Appointment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-dark leading-relaxed mb-6">
              A clean, comfortable pet is a happy pet. At Pet's Need, we offer complete grooming services for dogs, cats, and small animals right here in Alipore, Kolkata. Whether your furry friend needs a simple bath and nail trim or a full grooming makeover, our experienced groomers treat every pet with patience, care, and professionalism.
            </p>
            <p className="text-lg text-text-dark leading-relaxed">
              We use safe, pet-friendly products and create a stress-free environment so your pet actually enjoys their grooming session.
            </p>
          </div>
        </div>
      </section>

      {/* Our Grooming Services */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Our Grooming Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-background p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-2xl font-semibold mb-3 text-text-dark">
                    Full Grooming Packages
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    Our comprehensive grooming includes a soothing bath, blow-dry, stylish haircut, coat trimming and shaping, sanitary trim, and paw pad trimming. Perfect for dogs and cats who need the complete spa experience. Every session is tailored to your pet's breed, coat type, and comfort level.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-2xl font-semibold mb-3 text-text-dark">
                    Basic Grooming
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    For routine maintenance, our basic grooming covers bath, nail clipping, and ear cleaning. We also offer dedicated de-shedding and brushing sessions to keep your home fur-free, plus tick and flea baths with medicated washes when needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-2xl font-semibold mb-3 text-text-dark">
                    Special Treatments
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    Treat your pet to something extra! We offer spa sessions with aromatherapy shampoos, teeth cleaning and breath freshening for better oral health, and coat conditioning masks with anti-shedding treatments to keep their coat shiny and healthy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Cat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-2xl font-semibold mb-3 text-text-dark">
                    Grooming for Cats
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    Cats deserve pampering too! We specialize in long-hair and Persian-specific grooming, including gentle de-matting, thorough brushing, and supervised cat baths with careful drying. Our groomers understand feline behavior and work patiently to make the experience calm and positive.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-2xl font-semibold mb-3 text-text-dark">
                    Puppy & Kitten Intro Grooming
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    First grooming experience? We offer gentle introduction sessions designed for puppies and kittens. These short, positive sessions help young pets get comfortable with grooming early on, setting them up for a lifetime of stress-free grooming visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Grooming Tips */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Seasonal Grooming Tips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                Summer Grooming
              </h3>
              <p className="text-sm text-text-medium mb-2 font-semibold">March - June</p>
              <p className="text-text-medium leading-relaxed">
                Keep your pet cool during Kolkata's hot months with summer coat thinning. Regular brushing removes excess undercoat and improves air circulation. Schedule baths more frequently to help them stay fresh, and don't forget paw pad moisturizing—hot pavements can dry out their pads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">🌧️</div>
              <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                Monsoon Grooming
              </h3>
              <p className="text-sm text-text-medium mb-2 font-semibold">July - September</p>
              <p className="text-text-medium leading-relaxed">
                The rainy season brings humidity and moisture—perfect conditions for fungal infections. Keep your pet's coat completely dry after walks, paying special attention to paws, underarms, and ears. Increase grooming frequency to prevent matting in long-haired pets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                Winter Grooming
              </h3>
              <p className="text-sm text-text-medium mb-2 font-semibold">November - February</p>
              <p className="text-text-medium leading-relaxed">
                Cold weather means dry skin for pets too. Switch to moisturizing shampoos and consider coat conditioning treatments to prevent flaking and itching. Brush regularly to distribute natural oils throughout their coat. Paw care is crucial—use pet-safe moisturizers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">🪔</div>
              <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                Festival Season
              </h3>
              <p className="text-sm text-text-medium mb-2 font-semibold">Diwali, Durga Puja</p>
              <p className="text-text-medium leading-relaxed">
                Special occasions call for special grooming! Book your pet's pre-festival grooming session early—these are busy times in Kolkata. A fresh groom helps your pet look their best for family photos and celebrations. We offer festive grooming packages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                Spring Grooming
              </h3>
              <p className="text-sm text-text-medium mb-2 font-semibold">February - March</p>
              <p className="text-text-medium leading-relaxed">
                Spring is shedding season! As the weather warms up, dogs and cats shed their winter coats. Schedule professional de-shedding treatments to remove loose fur before it takes over your home. This is also a great time for a thorough coat inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Grooming Matters */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-6 text-center text-text-dark">
              Why Professional Grooming Matters
            </h2>
            <div className="text-lg text-text-dark leading-relaxed">
              <ReadMore maxLength={250}>
                Regular grooming isn't just about looks—it's essential for your pet's health and happiness. Professional groomers can spot skin issues, lumps, parasites, or infections early, often before you notice them at home. Proper nail trimming prevents painful overgrowth and posture problems. Ear cleaning reduces infection risk. De-shedding minimizes hairballs in cats and keeps your home cleaner. Plus, many pets genuinely enjoy the attention and pampering from experienced groomers who know exactly how to make them comfortable. At Pet's Need in Alipore, we combine health-focused care with that spa day feeling every pet deserves.
              </ReadMore>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Grooming FAQs
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={groomingFAQs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-4 text-white">
            Book Your Pet's Grooming Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to pamper your pet? Call us at 7411576879 to schedule a grooming appointment at Pet's Need in Alipore, Kolkata. Walk-ins are welcome daily from 10 AM to 10 PM, but appointments ensure minimal wait time.
          </p>
          <Button
            href="tel:7411576879"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4"
          >
            Call to Book Now
          </Button>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Pet Grooming',
            provider: {
              '@type': 'LocalBusiness',
              name: "Pet's Need",
              telephone: '7411576879',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '10/1D, Diamond Harbour Road',
                addressLocality: 'Alipore',
                addressRegion: 'WB',
                postalCode: '700027',
                addressCountry: 'IN'
              }
            },
            areaServed: ['Alipore', 'Behala', 'Tollygunge', 'South Kolkata', 'Kolkata'],
            description: 'Professional pet grooming services for dogs, cats, and small animals in Alipore, Kolkata.'
          })
        }}
      />
    </>
  )
}
