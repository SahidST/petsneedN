'use client'

import { motion } from 'framer-motion'
import { Scissors, Stethoscope, ShoppingBag, Store, Users, Heart, Check } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import ServiceCard from '@/components/ServiceCard'
import RotatingTestimonials from '@/components/RotatingTestimonials'
import FAQTabs from '@/components/FAQTabs'
import { FAQItem } from '@/components/FAQAccordion'
import Button from '@/components/Button'
import { PawPrintPattern } from '@/components/DecorativeElements'

const generalFAQs: FAQItem[] = [
  {
    question: 'Do I need an appointment for the vet?',
    answer: 'For clinic services, please call us at 7411576879 before visiting to check doctor availability. Our store and grooming services welcome walk-ins daily from 10 AM to 10 PM.'
  },
  {
    question: 'What are your hours of operation?',
    answer: 'Our store, grooming, and pharmacy are open daily from 10 AM to 10 PM. For clinic services, please call before visiting as doctor availability varies.'
  },
  {
    question: 'Is parking available near your center?',
    answer: 'Yes, parking is available near our location at 10/1D Diamond Harbour Road, Alipore. We\'re easily accessible from all parts of South Kolkata.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash and all major digital payment methods including UPI, cards, and mobile wallets for your convenience.'
  }
]

const groomingFAQs: FAQItem[] = [
  {
    question: 'How often should I get my dog groomed?',
    answer: 'It depends on breed and coat type. Long-haired breeds like Shih Tzus, Golden Retrievers, and Persians benefit from grooming every 4-6 weeks. Short-haired pets typically need grooming every 8-12 weeks.'
  },
  {
    question: 'Do you groom cats?',
    answer: 'Absolutely! We offer gentle, professional grooming for cats, including long-haired breeds like Persians. Our experienced groomers handle every pet with care and patience.'
  },
  {
    question: 'Is grooming stressful for cats?',
    answer: 'Not when done properly! Our groomers are trained in feline handling and create a calm, quiet environment. Many cats relax once they realize grooming feels good.'
  },
  {
    question: 'How long does grooming take?',
    answer: 'Basic grooming typically takes 1-2 hours, while full grooming packages take 2-3 hours depending on your pet\'s size, coat condition, and temperament. You\'re welcome to wait or we can call you when they\'re ready.'
  }
]

const clinicFAQs: FAQItem[] = [
  {
    question: 'Do you handle emergency cases?',
    answer: 'We provide first-aid and stabilization for many urgent situations during our operating hours. For life-threatening emergencies outside our doctor\'s availability or beyond our facility\'s scope, we can guide you to 24-hour emergency veterinary hospitals in Kolkata.'
  },
  {
    question: 'Can I get pet medicines from your pharmacy?',
    answer: 'Yes! Our pharmacy stocks commonly needed pet medications, supplements, vitamins, and preventive treatments. Prescription medications are dispensed when the doctor is available or with a valid prescription from another vet.'
  },
  {
    question: 'Do you treat birds and small animals?',
    answer: 'Yes, we provide care for rabbits, hamsters, guinea pigs, parrots, and other birds. Our vets have experience with various species beyond just dogs and cats.'
  },
  {
    question: 'What vaccinations does my pet need?',
    answer: 'For dogs, we recommend rabies, distemper, parvovirus, and hepatitis vaccines. For cats, we recommend rabies, feline distemper, and calicivirus vaccines. Our vets will create a customized vaccination schedule based on your pet\'s age and health.'
  }
]

const productsFAQs: FAQItem[] = [
  {
    question: 'What brands do you carry in your store?',
    answer: 'We stock popular and trusted brands like Pedigree, Royal Canin, Drools, Farmina, Whiskas, SmartHeart, and more for dogs, cats, birds, and small animals.'
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Currently, we operate as a walk-in store. Visit us in Alipore to shop our full range of products. Our convenient location makes shopping easy for pet parents across Kolkata.'
  },
  {
    question: 'Can I return products?',
    answer: 'Please check products before purchase. For any concerns about product quality or issues, speak with our team in-store and we\'ll do our best to help.'
  },
  {
    question: 'Do you have grain-free options?',
    answer: 'Yes! We stock grain-free and special diet formulas for pets with allergies or sensitivities. Our staff can help you choose the right nutrition for your pet.'
  }
]

const faqCategories = [
  { id: 'general', label: 'General', faqs: generalFAQs },
  { id: 'grooming', label: 'Grooming', faqs: groomingFAQs },
  { id: 'clinic', label: 'Clinic', faqs: clinicFAQs },
  { id: 'products', label: 'Products', faqs: productsFAQs },
]

const testimonials = [
  { name: 'Imran Rahaman', review: 'I was blown away by the exceptional service, wide range of products, and dedication to animal welfare. Pet\'s Need exceeded my expectations in every way.' },
  { name: 'KOUMARI NAG', review: 'Extremely satisfied with the gentle and professional way they handled my Shitzu while grooming. Very good experience!' },
  { name: 'Rabin Halder', review: 'Best place for my pet—neat, clean, comfortable. All pet foods and doctors are available, and the grooming services are too good!' },
  { name: 'Nasreen Khan', review: 'Excellent place. Dam good service, caring and cooperative staff members. I can never trust any other place over this. Thank you.' },
  { name: 'Sneha Dasgupta', review: 'I bring my dogs for grooming here, they do a wonderful job every time. Very friendly and Amar da does a good job.' },
  { name: 'Nausheen Iqbal', review: 'Best services within affordable rates. Staff\'s behaviour is very good. Premium quality food. Overall amazing 💯💯' },
  { name: 'NexGen Tech', review: 'THIS IS THE BEST PETS CLINIC AND BEST PET PARLOUR IN KOLKATA YOU CAN SEE AND FIND AROUND KOLKATA IT IS BETTER THAN PAW AVENUE AND OTHERS' },
  { name: 'Dona Saha', review: 'Awesome place. Thank you Pets Need... My Leo & Coco is so much happy 😄' },
  { name: 'Zaid Nawaz', review: 'Best pet\'s parlour in Kolkata. Must visit grooming rate also vary low cost. Must be visit all pet\'s lover everything available what you want for your pet\'s like food, accessories, doctor available also.' },
]

const productCategories = [
  { icon: '🍖', name: 'Pet Food', description: 'Quality nutrition for all pets' },
  { icon: '🦴', name: 'Treats', description: 'Delicious rewards' },
  { icon: '🎾', name: 'Toys', description: 'Fun and interactive' },
  { icon: '🎒', name: 'Accessories', description: 'Everything they need' },
  { icon: '✂️', name: 'Grooming', description: 'Care products' },
  { icon: '💊', name: 'Health', description: 'Wellness essentials' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        <PawPrintPattern />
        <div className="container mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 relative z-10">
          {/* Rating Badge - Desktop Right */}
          <motion.div
            className="hidden lg:block absolute top-8 right-12 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="bg-white px-6 py-4 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div className="text-left">
                  <div className="font-fredoka font-semibold text-text-dark">5.0</div>
                  <div className="text-xs text-text-medium">242+ Happy Reviews</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                <span className="gradient-text">All the Love, All the Care.</span>
                <br />
                All in One Place.
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-8 leading-relaxed">
                Your pet's happy place in Alipore! We offer expert vet care, joyful grooming, and all the supplies your best friend deserves.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button href="tel:7411576879" variant="primary">
                  Book an Appointment
                </Button>
                <Button
                  href="#services"
                  variant="secondary"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Explore Services
                </Button>
              </div>

              {/* Rating Badge - Mobile */}
              <div className="lg:hidden inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold text-text-dark">5.0 • 242+ Happy Reviews</span>
              </div>
            </motion.div>

            {/* Hero Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <HeroCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-accent py-8">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-center md:text-left">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="font-semibold text-text-dark">5.0 Star Rating on Google</span>
            </div>
            <div className="flex items-center gap-3 text-center md:text-left">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="font-semibold text-text-dark">3000+ Happy Pet Parents</span>
            </div>
            <div className="flex items-center gap-3 text-center md:text-left">
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="font-semibold text-text-dark">All-in-One Pet Care Center</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Your Pet's Needs Section */}
      <section id="services" className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-text-dark">
              All Your Pet's Needs
            </h2>
            <p className="text-lg text-text-medium max-w-3xl mx-auto">
              From playtime to checkups, we've got you covered under one friendly roof. Quality care for dogs, cats, and small pets across Alipore and South Kolkata.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Pet Grooming"
              description="Spa-like pampering for your furry friends. Safe baths, stylish cuts, de-shedding, and seasonal grooming to keep them looking and feeling their best."
              icon={Scissors}
              href="/grooming"
              imagePlaceholder="bg-gradient-to-br from-pink-200 to-purple-200"
              delay={0}
            />
            <ServiceCard
              title="Veterinary Clinic"
              description="Expert veterinary care when you need it most. Checkups, vaccinations, treatments, and trusted health advice from experienced doctors in Kolkata."
              icon={Stethoscope}
              href="/clinic"
              imagePlaceholder="bg-gradient-to-br from-blue-200 to-cyan-200"
              delay={0.15}
            />
            <ServiceCard
              title="Pet Store"
              description="Everything for your pet's happiness in one place. Quality food, fun toys, comfy accessories, health essentials from trusted brands like Royal Canin, Drools, and more."
              icon={ShoppingBag}
              href="/products"
              imagePlaceholder="bg-gradient-to-br from-green-200 to-emerald-200"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Pet's Need Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-text-dark">
              Why Pet Parents Trust Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Store,
                title: 'All-in-One Convenience',
                description: 'Vet care, grooming, and shopping—all under one roof in Alipore. Save time while giving your pet the best.'
              },
              {
                icon: Users,
                title: 'Experienced Team',
                description: 'Qualified veterinarians and professional groomers who treat every pet with patience, care, and expertise.'
              },
              {
                icon: Check,
                title: 'Quality You Can Trust',
                description: 'Carefully selected food, toys, medicines, and accessories from brands pet parents across Kolkata rely on.'
              },
              {
                icon: Heart,
                title: '3000+ Happy Pet Parents',
                description: 'Trusted by pet families across Alipore, Behala, Tollygunge, and beyond. Join our caring community today.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                  {feature.title}
                </h3>
                <p className="text-text-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Pet Parents Say Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-text-dark">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-text-medium">
              Don't just take our word for it—hear from families who trust us with their furry friends.
            </p>
          </motion.div>

          <RotatingTestimonials testimonials={testimonials} itemsPerPage={3} interval={6000} />

          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/your-google-business-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-poppins font-semibold text-lg transition-colors focus-visible-ring rounded-lg px-4 py-2"
            >
              Read All 242+ Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-text-dark">
              Our In-Store Products
            </h2>
            <p className="text-lg text-text-medium">
              We stock hundreds of items from trusted brands. Visit us in Alipore to browse our full selection for dogs, cats, and small pets.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 mb-8">
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 min-w-max md:min-w-0">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-6 rounded-2xl text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-48 md:w-auto"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-5xl mb-3 block" role="img" aria-label={category.name}>
                    {category.icon}
                  </span>
                  <h3 className="font-fredoka text-lg font-semibold mb-2 text-text-dark">
                    {category.name}
                  </h3>
                  <p className="text-sm text-text-medium">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button href="/products" variant="primary">
              Visit Our Store to Explore Full Range!
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#fffbf5]">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-text-dark">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <FAQTabs categories={faqCategories} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-[#ff9f88]">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-fredoka text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">
              Come Say Hi!
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Visit us at 10/1D Diamond Harbour Road, Alipore, or give us a call. We're here to make your pet's day brighter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7411576879"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible-ring"
              >
                Call Now
              </a>
              <a
                href="https://maps.app.goo.gl/your-map-link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 focus-visible-ring"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: "Pet's Need",
            image: 'https://petsneed.in/og-image.jpg',
            '@id': 'https://petsneed.in',
            url: 'https://petsneed.in',
            telephone: '7411576879',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '10/1D, Diamond Harbour Road',
              addressLocality: 'Alipore',
              addressRegion: 'WB',
              postalCode: '700027',
              addressCountry: 'IN'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 22.5232,
              longitude: 88.3279
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '10:00',
              closes: '22:00'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '242'
            }
          })
        }}
      />
    </>
  )
}
