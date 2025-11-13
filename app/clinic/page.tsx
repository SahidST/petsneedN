'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Syringe, Heart, Phone, AlertCircle, Check, FileText, BookOpen } from 'lucide-react'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Button from '@/components/Button'
import ReadMore from '@/components/ReadMore'
import ContentTabs from '@/components/ContentTabs'
import { FloatingBubbles, PawPrintPattern } from '@/components/DecorativeElements'

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
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-16 md:py-20 overflow-hidden">
        <FloatingBubbles />
        <PawPrintPattern />
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center relative z-10">
          <motion.h1
            className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Veterinary Clinic in Alipore, Kolkata
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-medium mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert veterinary care for your dog, cat, or small pet. From checkups to vaccinations to treatments, our experienced vets are here when your furry friend needs us most.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="tel:7411576879" variant="primary">
              Call for Appointment
            </Button>
          </motion.div>
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
            <div className="text-lg text-text-dark leading-relaxed">
              <ReadMore maxLength={200}>
                Your pet's health is our priority. At Pet's Need Veterinary Clinic in Alipore, Kolkata, we provide comprehensive medical care for dogs, cats, rabbits, birds, and other small animals. Our qualified veterinarians bring years of experience treating everything from routine checkups and vaccinations to infections, injuries, and health concerns. We believe in clear communication—we'll always explain what's happening with your pet and discuss treatment options in language you understand. Whether you need preventive care, diagnosis, or treatment, we're here to keep your best friend healthy and happy.
              </ReadMore>
            </div>
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

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                    Pet Health Certificates & Travel Documentation
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    Planning to travel with your pet or relocate? We issue official pet health certificates required for domestic and international travel. Our vets conduct thorough health examinations and provide all necessary documentation for airlines, railways, and pet immigration requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-fredoka text-xl font-semibold mb-3 text-text-dark">
                    Pet Health Counseling & Education
                  </h3>
                  <p className="text-text-medium leading-relaxed">
                    New pet parent? We offer one-on-one counseling sessions covering nutrition guidance, vaccination schedules, behavioral training tips, preventive care routines, and breed-specific health concerns. Ask all your questions and get expert advice tailored to your pet's needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Health Issues */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Common Health Issues We Treat
          </h2>
          <div className="max-w-6xl mx-auto">
            <ContentTabs
              tabs={[
                {
                  id: 'dogs',
                  label: '🐕 Dogs',
                  content: (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Digestive Issues</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Diarrhea, vomiting, constipation, loss of appetite. Often caused by dietary indiscretion, infections, or parasites. We diagnose the cause and provide appropriate treatment.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Skin Allergies & Infections</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Itching, redness, hot spots, hair loss. Common in Kolkata's humid climate. We treat fungal infections, bacterial skin conditions, and allergic dermatitis.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Tick & Flea Infestations</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Especially prevalent during monsoons. Can cause anemia, tick fever, and skin irritation. We provide treatment and recommend preventive measures.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Ear Infections</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Head shaking, ear scratching, odor, discharge. Common in floppy-eared breeds and during humid weather. Early treatment prevents chronic issues.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Respiratory Infections</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Coughing, sneezing, nasal discharge, difficulty breathing. Can be viral or bacterial. Requires prompt veterinary attention, especially in puppies.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Joint & Mobility Issues</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Limping, stiffness, reluctance to move. Common in older dogs and large breeds. We provide pain management and mobility support recommendations.
                        </p>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'cats',
                  label: '🐈 Cats',
                  content: (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Urinary Tract Issues</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Frequent urination, straining, blood in urine. Especially common in male cats. Can become life-threatening if blocked—seek immediate care.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Upper Respiratory Infections</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Sneezing, watery eyes, nasal congestion, fever. Highly contagious among cats. Common in unvaccinated cats and kittens. Treatment includes antibiotics and supportive care.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Hairballs & Vomiting</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          While occasional hairballs are normal, frequent vomiting indicates a problem. May signal gastritis, dietary issues, or other digestive concerns.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Dental Disease</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Bad breath, difficulty eating, drooling. Very common in cats over 3 years. We provide dental examinations and cleaning recommendations.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Skin Parasites</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Fleas, ticks, and mites causing scratching, hair loss, scabs. Regular preventive treatment is essential, especially for outdoor cats.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Chronic Kidney Disease</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Common in senior cats. Increased thirst, frequent urination, weight loss. Early detection through annual checkups improves management and quality of life.
                        </p>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'small-pets',
                  label: '🐰 Small Pets',
                  content: (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Respiratory Problems (Birds)</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Wheezing, tail bobbing, nasal discharge in parrots and other birds. Often caused by poor ventilation, drafts, or infections. Requires immediate care.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Dental Overgrowth (Rabbits, Guinea Pigs)</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Teeth continuously grow in small animals. Improper diet leads to overgrowth, causing eating difficulties. Regular dental checks and proper diet prevent issues.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Gastrointestinal Stasis (Rabbits)</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Reduced appetite, fewer droppings, lethargy. A serious condition requiring immediate treatment. Caused by stress, pain, or dietary changes.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Mites & External Parasites</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Scratching, hair loss, scaly skin in hamsters, rabbits, guinea pigs. We diagnose the specific parasite and provide targeted treatment.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Bumblefoot (Birds, Rabbits)</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Swollen, infected foot pad caused by improper perches or cage flooring. Painful condition requiring wound care and husbandry changes.
                        </p>
                      </div>
                      <div className="bg-background p-6 rounded-xl">
                        <h4 className="font-fredoka text-lg font-semibold mb-3 text-text-dark">Heat Stress</h4>
                        <p className="text-text-medium text-sm leading-relaxed">
                          Small pets are vulnerable to Kolkata's summer heat. Panting, lethargy, weakness indicate overheating. Requires immediate cooling and veterinary care.
                        </p>
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* When to Visit the Vet */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            When to Visit the Vet
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-500" />
                <h3 className="font-fredoka text-2xl font-semibold text-red-700">
                  Urgent Symptoms - See Vet Immediately
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Difficulty breathing or gasping for air',
                  'Severe bleeding or trauma from accident',
                  'Unconsciousness or seizures',
                  'Inability to urinate or defecate',
                  'Suspected poisoning or toxin ingestion',
                  'Severe vomiting or diarrhea (especially with blood)',
                  'Extreme lethargy or unresponsiveness',
                  'Sudden collapse or inability to stand',
                  'Eye injuries or sudden blindness',
                  'Bloated, hard, painful abdomen',
                  'Heatstroke symptoms (excessive panting, drooling)',
                  'Labor complications in pregnant pets'
                ].map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span className="text-text-dark">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Check className="w-8 h-8 text-yellow-600" />
                <h3 className="font-fredoka text-2xl font-semibold text-yellow-700">
                  Schedule a Routine Appointment
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Annual checkup and vaccination booster',
                  'Mild coughing or sneezing for 2-3 days',
                  'Minor scratching or skin irritation',
                  'Slight decrease in appetite',
                  'Nail trimming or dental cleaning needed',
                  'Bad breath or tartar buildup',
                  'Weight loss or gain over time',
                  'Mild limping that improves with rest',
                  'Ear odor or head shaking',
                  'Pre-travel health certificate',
                  'New pet wellness consultation',
                  'Behavioral concerns or training questions'
                ].map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1">📅</span>
                    <span className="text-text-dark">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-text-medium mt-8 max-w-3xl mx-auto">
            <strong>When in doubt, call us!</strong> If you're unsure whether your pet's symptoms require urgent care, call <a href="tel:7411576879" className="text-primary hover:underline font-semibold">7411576879</a> and describe the situation. We'll guide you on the best course of action.
          </p>
        </div>
      </section>

      {/* Pet Wellness Tips */}
      <section className="section-padding bg-white">
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
