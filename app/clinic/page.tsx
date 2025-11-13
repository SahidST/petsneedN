import type { Metadata } from 'next'
import { Stethoscope, Syringe, Heart, Phone, AlertCircle, Check } from 'lucide-react'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Vet Clinic in Alipore Kolkata | Veterinary Doctor Near Me',
  description: 'Trusted veterinary clinic in Alipore, Kolkata. Experienced vets provide checkups, vaccinations, treatments for dogs, cats, birds. Serving South Kolkata. Call 7411576879 for appointment.',
  keywords: ['vet clinic Alipore', 'veterinary doctor Kolkata', 'pet doctor near me', 'dog vet Kolkata', 'cat vet Alipore', 'pet checkup South Kolkata'],
}

const clinicFAQs: FAQItem[] = [
  {
    question: 'Do you handle emergency cases?',
    answer: 'We provide first-aid and stabilization for many urgent situations during our operating hours. For life-threatening emergencies outside our doctor\'s availability or beyond our facility\'s scope, we can guide you to 24-hour emergency veterinary hospitals in Kolkata.'
  },
  {
    question: 'How much do consultations cost?',
    answer: 'Please call us for current consultation fees and treatment costs. Prices vary based on the services needed, and we\'re always transparent about costs before proceeding with treatment.'
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
    question: 'Is payment required immediately?',
    answer: 'Yes, payment is typically required at the time of service. We accept cash and digital payments for your convenience.'
  }
]

export default function ClinicPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-dark">
            Veterinary Clinic in Alipore, Kolkata
          </h1>
          <p className="text-lg md:text-xl text-text-medium mb-8 max-w-3xl mx-auto">
            Expert veterinary care for your dog, cat, or small pet. From checkups to vaccinations to treatments, our experienced vets are here when your furry friend needs us most.
          </p>
          <Button href="tel:7411576879" variant="primary">
            Call for Appointment
          </Button>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-6">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-poppins font-semibold text-lg text-text-dark mb-2">
                📞 Please call before visiting for clinic services
              </h3>
              <p className="text-text-medium">
                Clinic hours vary based on doctor availability. Our store and grooming services are open daily 10 AM - 10 PM. Call <a href="tel:7411576879" className="text-primary hover:underline font-semibold">7411576879</a> to confirm doctor availability before your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-text-dark leading-relaxed mb-6">
              Your pet's health is our priority. At Pet's Need Veterinary Clinic in Alipore, Kolkata, we provide comprehensive medical care for dogs, cats, rabbits, birds, and other small animals. Our qualified veterinarians bring years of experience treating everything from routine checkups and vaccinations to infections, injuries, and health concerns.
            </p>
            <p className="text-lg text-text-dark leading-relaxed">
              We believe in clear communication—we'll always explain what's happening with your pet and discuss treatment options in language you understand. Whether you need preventive care, diagnosis, or treatment, we're here to keep your best friend healthy and happy.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Veterinary Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Meet Our Veterinary Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl">👨‍⚕️</span>
              </div>
              <h3 className="font-fredoka text-2xl font-semibold mb-2 text-text-dark">
                Dr. Amit Chatterjee
              </h3>
              <p className="text-primary font-semibold mb-3">BVSc & AH</p>
              <div className="space-y-2 text-text-medium">
                <p><strong>Experience:</strong> 8 years</p>
                <p><strong>Specialization:</strong> Small Animal Medicine & Surgery</p>
              </div>
              <p className="text-sm text-text-medium mt-4 leading-relaxed">
                Dr. Chatterjee completed his veterinary degree from West Bengal University of Animal & Fishery Sciences and has been caring for pets across Kolkata for nearly a decade.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl">👩‍⚕️</span>
              </div>
              <h3 className="font-fredoka text-2xl font-semibold mb-2 text-text-dark">
                Dr. Priya Banerjee
              </h3>
              <p className="text-primary font-semibold mb-3">BVSc & AH, MVSc</p>
              <div className="space-y-2 text-text-medium">
                <p><strong>Experience:</strong> 6 years</p>
                <p><strong>Specialization:</strong> Preventive Care & Pet Nutrition</p>
              </div>
              <p className="text-sm text-text-medium mt-4 leading-relaxed">
                Dr. Banerjee holds both bachelor's and master's degrees in veterinary science, with advanced training in preventive medicine and animal nutrition.
              </p>
            </div>

            <div className="bg-background p-8 rounded-2xl text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl">👨‍⚕️</span>
              </div>
              <h3 className="font-fredoka text-2xl font-semibold mb-2 text-text-dark">
                Dr. Arjun Das
              </h3>
              <p className="text-primary font-semibold mb-3">BVSc & AH</p>
              <div className="space-y-2 text-text-medium">
                <p><strong>Experience:</strong> 7 years</p>
                <p><strong>Specialization:</strong> Emergency Care & Surgical Procedures</p>
              </div>
              <p className="text-sm text-text-medium mt-4 leading-relaxed">
                Dr. Das brings extensive experience in emergency veterinary medicine and has performed hundreds of successful surgeries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Veterinary Services */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Our Veterinary Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                    General Consultation
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    Walk-in consultations for common pet health concerns including digestive issues, skin problems, behavioral changes, lethargy, or anything that seems unusual. Our vets perform thorough physical examinations and provide clear diagnosis and treatment plans.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Syringe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                    Vaccination & Preventive Care
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    Protect your pet from serious diseases with our comprehensive vaccination programs. We administer puppy and kitten vaccine series, annual booster shots, and anti-rabies vaccinations required by law. Our preventive care includes regular deworming schedules and tick treatment programs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                    Treatment Services
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    We treat a wide range of health issues right here in Alipore. Common treatments include fever management, bacterial and viral infections, wound care and minor injury treatment, dehydration therapy with fluid administration, and skin conditions including allergies and fungal infections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                    Home Visit Services
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    Can't bring your pet to the clinic? Our doctors provide at-home veterinary visits for aged, immobile, or extremely anxious pets. Home visits include checkups, vaccinations, follow-up consultations, and health assessments in the comfort of your own home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Wellness Tips */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Pet Wellness Tips
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md">
            <h3 className="font-fredoka text-2xl font-semibold mb-6 text-text-dark">
              Keep Your Pet Healthy Year-Round:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Check, text: 'Regular Checkups: Annual vet visits catch problems early' },
                { icon: Check, text: 'Stay Current on Vaccines: Prevention is better than treatment' },
                { icon: Check, text: 'Quality Nutrition: Feed age-appropriate, quality food' },
                { icon: Check, text: 'Maintain Healthy Weight: Obesity causes serious health issues' },
                { icon: Check, text: 'Dental Care: Brush teeth regularly, provide dental chews' },
                { icon: Check, text: 'Parasite Prevention: Monthly tick/flea treatment in Kolkata\'s climate' },
                { icon: Check, text: 'Exercise Daily: Physical activity keeps body and mind healthy' },
                { icon: Check, text: 'Fresh Water Always: Hydration is crucial, especially in summer' },
                { icon: Check, text: 'Grooming Routine: Regular grooming prevents skin issues' },
                { icon: Check, text: 'Watch for Changes: You know your pet best—trust your instincts' },
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <tip.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-text-dark">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Clinic FAQs
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={clinicFAQs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-4 text-white">
            Schedule Your Pet's Checkup
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Keep your furry friend healthy and happy with regular veterinary care. Call Pet's Need at 7411576879 to book an appointment with our experienced vets in Alipore, Kolkata.
          </p>
          <Button
            href="tel:7411576879"
            className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4"
          >
            Call for Appointment
          </Button>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VeterinaryCare',
            name: "Pet's Need Veterinary Clinic",
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
            description: 'Trusted veterinary clinic providing comprehensive medical care for dogs, cats, and small animals in Alipore, Kolkata.'
          })
        }}
      />
    </>
  )
}
