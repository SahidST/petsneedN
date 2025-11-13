import type { Metadata } from 'next'
import { Heart, Users, Store, Award } from 'lucide-react'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'About Pet\'s Need | Trusted Pet Care Center in Alipore, Kolkata',
  description: 'Learn about Pet\'s Need - Alipore\'s complete pet care center serving 3000+ happy pet parents. Professional grooming, veterinary care, quality supplies. 5.0★ rated with 242+ reviews. Visit us in South Kolkata.',
  keywords: ['pet care center Alipore', 'about Pet\'s Need', 'pet grooming Kolkata', 'veterinary clinic Alipore'],
}

const allTestimonials = [
  { name: 'Imran Rahaman', review: 'I recently visited Pet\'s Need, and I was blown away by the exceptional service, wide range of products, and dedication to animal welfare. As a pet owner, it\'s essential to find a reliable and trustworthy store that caters to all my furry friend\'s needs, and Pet\'s Need exceeded my expectations in every way.' },
  { name: 'KOUMARI NAG', review: 'Very good experience. Extremely satisfied with the gentle and professional way they handled my Shitzu while grooming 👍😊' },
  { name: 'Nasreen Khan', review: 'Excellent place. Dam good service, caring and cooperative staff members. I can never trust any other place over this. Thank you.' },
  { name: 'Rabin Halder', review: 'This is the best place for my pet because it\'s very neat and clean and comfortable for my pet and all pet foods and doctors are available here and specially the grooming services are too good 👍' },
  { name: 'Sneha Dasgupta', review: 'I bring my dogs for grooming here, they do a wonderful job every time. Very friendly and Amar da does a good job.' },
  { name: 'Nausheen Iqbal', review: 'Best services within affordable rates. Staff\'s behaviour is very good. Premium quality food. Overall amazing 💯💯' },
  { name: 'NexGen Tech', review: 'THIS IS THE BEST PETS CLINIC AND BEST PET PARLOUR IN KOLKATA YOU CAN SEE AND FIND AROUND KOLKATA IT IS BETTER THAN PAW AVENUE AND OTHERS' },
  { name: 'Dona Saha', review: 'Awesome place. Thank you Pets Need... My Leo & Coco is so much happy 😄' },
  { name: 'Zaid Nawaz', review: 'Best pet\'s parlour in Kolkata. Must visit grooming rate also vary low cost. Must be visit all pet\'s lover everything available what you want for your pet\'s like food, accessories, doctor available also. Thank you Pet\'s Need and team for your best service.' },
  { name: 'JYOTI PINTO', review: 'I like the grooming service of this Clinic. The groomer is highly professional and very patient. I recommend pet parents to come here.' },
  { name: 'Sanchita Bhanja', review: 'Good service. Expert groomer & doctor available here. Pet\'s medicine, foods & others available here.' },
  { name: 'Swapna Banerjee', review: 'This grooming parlour is a very good place for the pets. All the staffs are very very cooperative and supportive. The groomers are very professional and caring. My pets were very comfortable to them. I am fully satisfied with their work. Thank you all ...🙏' }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-dark">
            About Pet's Need
          </h1>
          <p className="text-lg md:text-xl text-text-medium max-w-3xl mx-auto">
            Your neighborhood pet care partner in Alipore, Kolkata. Caring for pets and their families since day one.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-8 text-text-dark">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-text-dark leading-relaxed">
              <p>
                Pet's Need was born from a simple belief: every pet deserves exceptional care close to home. What started as a small neighborhood shop has grown into Alipore's trusted complete pet care center, serving thousands of happy pet families across South Kolkata.
              </p>
              <p>
                We understand the bond between pets and their parents because we're pet lovers ourselves. We know that choosing where to take your furry friend for care isn't just about convenience—it's about trust. That's why we've built Pet's Need to be the kind of place we'd want to bring our own pets: clean, welcoming, staffed by people who genuinely care, and stocked with products and services that meet the highest standards.
              </p>
              <p>
                Every wagging tail that walks through our door, every purr of contentment during a grooming session, every relieved pet parent leaving our clinic with their healthy companion—these moments remind us why we do what we do. We're not just a business; we're part of the Alipore community, and your pet's happiness is our greatest reward.
              </p>
              <p>
                Whether you're here for a quick checkup, a complete grooming session, or just picking up your pet's favorite treats, you'll always find friendly faces ready to help. We take the time to know you and your pet, remember your preferences, and provide personalized care that makes every visit feel special.
              </p>
              <p>
                Thank you for trusting Pet's Need with your beloved companions. We're honored to be part of your pet care journey, and we look forward to serving you and your furry, feathered, or scaled friends for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg">
            <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-6 text-text-dark text-center">
              Our Mission
            </h2>
            <p className="text-lg text-text-dark leading-relaxed text-center">
              To provide comprehensive, compassionate, and convenient pet care that enriches the lives of pets and their families throughout Kolkata. We're committed to combining professional expertise with genuine warmth, making quality pet care accessible to every pet parent in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-fredoka text-2xl font-semibold mb-4 text-text-dark">
                Compassion
              </h3>
              <p className="text-text-medium leading-relaxed">
                Every pet deserves to be treated with patience, kindness, and respect. We approach every interaction—from nervous first-time groomings to urgent vet visits—with empathy and understanding.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-fredoka text-2xl font-semibold mb-4 text-text-dark">
                Quality
              </h3>
              <p className="text-text-medium leading-relaxed">
                We never compromise on the products we sell or the services we provide. From the brands on our shelves to the training of our team, we maintain high standards in everything we do.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Store className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-fredoka text-2xl font-semibold mb-4 text-text-dark">
                Convenience
              </h3>
              <p className="text-text-medium leading-relaxed">
                Pet care shouldn't be complicated. By bringing grooming, veterinary services, and shopping under one roof, we save you time and give you peace of mind knowing all your pet's needs are covered.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-fredoka text-2xl font-semibold mb-4 text-text-dark">
                Trust
              </h3>
              <p className="text-text-medium leading-relaxed">
                We earn your trust through transparency, consistency, and genuine care. When you choose Pet's Need, you're choosing a partner who will always put your pet's wellbeing first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-fredoka font-bold mb-2">5.0⭐</div>
              <div className="text-lg md:text-xl">Google Rating</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-fredoka font-bold mb-2">242+</div>
              <div className="text-lg md:text-xl">Happy Reviews</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-fredoka font-bold mb-2">3000+</div>
              <div className="text-lg md:text-xl">Pet Parents</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-fredoka font-bold mb-2">3</div>
              <div className="text-lg md:text-xl">Experienced Vets</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                review={testimonial.review}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Serving South Kolkata */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-6 text-text-dark">
              Serving South Kolkata
            </h2>
            <p className="text-lg text-text-dark leading-relaxed">
              Located in the heart of Alipore, Pet's Need proudly serves pet families throughout South Kolkata including <strong>Alipore, New Alipore, Kidderpore, Behala, Taratala, Mominpore, Ekbalpur, Majherhat, Bhowanipore, Kalighat, Hastings, Watganj, Garden Reach, Chetla, Sahapur, Tollygunge, Lake Gardens, Behala Chowrasta, Parnashree, Barisha</strong>, and surrounding neighborhoods. Our convenient Diamond Harbour Road location makes us easily accessible from anywhere in the area.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
