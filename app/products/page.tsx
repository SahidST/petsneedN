import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import ProductTabs from '@/components/ProductTabs'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Pet Supplies in Alipore Kolkata | Pet Food, Toys, Accessories',
  description: 'Quality pet supplies in Alipore - food, toys, accessories, health products for dogs, cats, birds, small pets. Brands: Royal Canin, Pedigree, Drools, Farmina. Visit our store near Tollygunge!',
  keywords: ['pet supplies Kolkata', 'pet food Alipore', 'dog food Kolkata', 'cat food Alipore', 'pet toys Kolkata', 'pet store South Kolkata'],
}

const productFAQs: FAQItem[] = [
  {
    question: 'Do you offer delivery?',
    answer: 'Currently, we operate as a walk-in store. Visit us in Alipore to shop our full range of products. Our convenient location makes shopping easy for pet parents across Kolkata.'
  },
  {
    question: 'Can I return products?',
    answer: 'Please check products before purchase. For any concerns about product quality or issues, speak with our team in-store and we\'ll do our best to help.'
  },
  {
    question: 'Do you stock prescription medications?',
    answer: 'Yes, our pharmacy stocks common prescription medications. These are dispensed when our veterinarian is available or with a valid prescription from another vet.'
  },
  {
    question: 'What if you don\'t have what I\'m looking for?',
    answer: 'We\'re always happy to help! If we don\'t currently stock an item, let us know and we\'ll see if we can order it for you or recommend suitable alternatives.'
  },
  {
    question: 'Are your products authentic?',
    answer: 'Absolutely. We source all products through authorized distributors and official brand channels to ensure authenticity and quality.'
  }
]

const productTabs = [
  {
    id: 'food',
    label: 'Pet Food',
    products: [
      { name: 'Dry Dog Food', description: 'Complete nutrition for all breeds and life stages', icon: '🥩', brands: 'Pedigree, Royal Canin, Drools, Farmina' },
      { name: 'Wet Dog Food', description: 'Flavorful meals in cans and pouches', icon: '🥫', brands: 'Pedigree, Cesar, Purina' },
      { name: 'Cat Food', description: 'Complete meals for feline health', icon: '🐟', brands: 'Whiskas, Royal Canin, Me-O' },
      { name: 'Breed-Specific Formulas', description: 'Tailored nutrition for specific breeds', icon: '⭐', brands: 'Royal Canin, Farmina' },
      { name: 'Puppy & Kitten Food', description: 'Growth formulas for young pets', icon: '🍼', brands: 'Royal Canin, Drools, Whiskas' },
      { name: 'Small Pet Food', description: 'Pellets and mixes for rabbits, hamsters, guinea pigs', icon: '🌾', brands: 'Vitapol, Taiyo' },
    ]
  },
  {
    id: 'treats',
    label: 'Treats',
    products: [
      { name: 'Training Treats', description: 'Perfect for positive reinforcement training', icon: '🎯', brands: 'Choostix, Meat Up' },
      { name: 'Chew Sticks', description: 'Long-lasting chews for dental health', icon: '🦴', brands: 'Pedigree, Choostix' },
      { name: 'Jerky Strips', description: 'Real meat treats dogs love', icon: '🥓', brands: 'Meat Up, Drools' },
      { name: 'Biscuits', description: 'Crunchy rewards in various flavors', icon: '🍪', brands: 'Pedigree, Choostix' },
      { name: 'Dental Chews', description: 'Reduce plaque and freshen breath', icon: '🦷', brands: 'Pedigree, Whimzees' },
      { name: 'Catnip Products', description: 'Dried catnip and catnip-infused treats', icon: '🌿', brands: 'Various brands' },
    ]
  },
  {
    id: 'toys',
    label: 'Toys',
    products: [
      { name: 'Chew Toys', description: 'Safe, durable toys for aggressive chewers', icon: '🎾', brands: 'Kong, Trixie' },
      { name: 'Plush Toys', description: 'Soft, cuddly companions for gentle play', icon: '🧸', brands: 'Various brands' },
      { name: 'Squeaky Toys', description: 'Interactive toys that make sound', icon: '🎵', brands: 'Various brands' },
      { name: 'Cat Teasers', description: 'Wand toys with feathers and strings', icon: '🪶', brands: 'Various brands' },
      { name: 'Laser Pointers', description: 'Interactive chase toys for cats', icon: '🔦', brands: 'Various brands' },
      { name: 'Scratching Posts', description: 'Essential for healthy cat claws', icon: '🪵', brands: 'Various brands' },
      { name: 'Cat Tunnels', description: 'Collapsible tunnels for hiding and playing', icon: '🌈', brands: 'Various brands' },
      { name: 'Bird Swings & Bells', description: 'Entertaining toys for caged birds', icon: '🔔', brands: 'Various brands' },
      { name: 'Exercise Wheels', description: 'Essential exercise for small mammals', icon: '⚙️', brands: 'Various brands' },
      { name: 'Interactive Puzzle Toys', description: 'Mental stimulation through play', icon: '🧩', brands: 'Trixie, Nina Ottosson' },
    ]
  },
  {
    id: 'accessories',
    label: 'Accessories',
    products: [
      { name: 'Collars & Leashes', description: 'Comfortable, adjustable, and stylish', icon: '🦴', brands: 'Various brands' },
      { name: 'Harnesses', description: 'Secure and comfortable walking gear', icon: '🎒', brands: 'Various brands' },
      { name: 'Pet Clothing', description: 'Jackets, sweaters, and costumes', icon: '👕', brands: 'Various brands' },
      { name: 'Feeding Bowls', description: 'Durable, easy-to-clean food and water bowls', icon: '🥣', brands: 'Various brands' },
      { name: 'Water Dispensers', description: 'Fresh water fountains and gravity feeders', icon: '💧', brands: 'Various brands' },
      { name: 'Pet Beds', description: 'Comfortable sleeping spots for rest', icon: '🛏️', brands: 'Various brands' },
      { name: 'Litter Boxes', description: 'Essential for indoor cats', icon: '📦', brands: 'Various brands' },
      { name: 'Pee Pads', description: 'Indoor training and accident protection', icon: '🟦', brands: 'Various brands' },
      { name: 'ID Tags', description: 'Custom identification for pet safety', icon: '🏷️', brands: 'Various brands' },
      { name: 'Carriers & Crates', description: 'Safe transport for vet visits and travel', icon: '🧳', brands: 'Various brands' },
    ]
  },
  {
    id: 'grooming',
    label: 'Grooming',
    products: [
      { name: 'Shampoos', description: 'Gentle cleansing for healthy coats', icon: '🧴', brands: 'Himalaya, Beaphar' },
      { name: 'Conditioners', description: 'Moisturizing formulas for soft fur', icon: '💆', brands: 'Various brands' },
      { name: 'Brushes & Combs', description: 'Remove loose fur and prevent matting', icon: '🪮', brands: 'FURminator, Trixie' },
      { name: 'De-Shedding Tools', description: 'Reduce shedding by up to 90%', icon: '✂️', brands: 'FURminator-style' },
      { name: 'Nail Clippers', description: 'Safe, sharp trimmers for all sizes', icon: '💅', brands: 'Various brands' },
      { name: 'Ear Cleaning Pads', description: 'Gentle cleaning for healthy ears', icon: '👂', brands: 'Himalaya, Beaphar' },
      { name: 'Eye Wipes', description: 'Remove tear stains and debris', icon: '👁️', brands: 'Various brands' },
      { name: 'Pet Perfumes', description: 'Fresh scents between baths', icon: '💐', brands: 'Various brands' },
      { name: 'Toothbrushes & Toothpaste', description: 'Dental care for fresh breath', icon: '🪥', brands: 'Beaphar, Trixie' },
    ]
  },
  {
    id: 'health',
    label: 'Health & Pharmacy',
    products: [
      { name: 'Deworming Tablets', description: 'Regular parasite prevention', icon: '💊', brands: 'Trusted veterinary formulas' },
      { name: 'Tick & Flea Prevention', description: 'Topical treatments and collars', icon: '🦟', brands: 'Various brands' },
      { name: 'Antiseptic Sprays', description: 'Clean and protect minor wounds', icon: '🩹', brands: 'Himalaya, Beaphar' },
      { name: 'Wound Healing Creams', description: 'Promote faster recovery', icon: '🧪', brands: 'Various brands' },
      { name: 'Vitamins & Supplements', description: 'Support overall health and vitality', icon: '💉', brands: 'Himalaya, Pet Health' },
      { name: 'Probiotics', description: 'Digestive health support', icon: '🌱', brands: 'Various brands' },
      { name: 'Joint Supplements', description: 'Mobility support for aging pets', icon: '🦴', brands: 'Various brands' },
      { name: 'Ear Drops', description: 'Treatment for ear infections and mites', icon: '💧', brands: 'Veterinary formulas' },
      { name: 'Eye Drops', description: 'Relief for eye irritation and infections', icon: '👁️', brands: 'Veterinary formulas' },
      { name: 'First Aid Kit', description: 'Essential supplies for emergencies', icon: '🏥', brands: 'Various brands' },
    ]
  }
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-20">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-text-dark">
            Pet Supplies in Alipore, Kolkata
          </h1>
          <p className="text-lg md:text-xl text-text-medium mb-8 max-w-3xl mx-auto">
            Everything your dog, cat, bird, or small pet needs—all in one store. Quality food, fun toys, comfy accessories, and health essentials from brands you trust.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-text-dark leading-relaxed">
              At Pet's Need, we stock hundreds of pet care products for every species, breed, and life stage. Whether you're looking for nutritious food, entertaining toys, practical accessories, or health supplies, you'll find it here in our Alipore store. We carefully select items from trusted brands to ensure quality, safety, and value. Can't find what you need? Just ask—we're always happy to help you find the perfect products for your pet.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <ProductTabs tabs={productTabs} />
        </div>
      </section>

      {/* Visit Our Store CTA */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-4 text-text-dark">
            Visit Our Store to Explore Our Full Range!
          </h2>
          <p className="text-lg text-text-medium mb-8 max-w-2xl mx-auto">
            We stock hundreds of items beyond what's listed here. Come browse our complete selection at 10/1D Diamond Harbour Road, Alipore, Kolkata. Our friendly team will help you find exactly what your pet needs.
          </p>
          <div className="text-primary font-semibold text-xl mb-6">
            Open daily 10 AM to 10 PM!
          </div>
          <Button href="/contact" variant="primary">
            Get Store Directions
          </Button>
        </div>
      </section>

      {/* Why Shop at Pet's Need */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Why Shop at Pet's Need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Wide Selection: Products for dogs, cats, birds, fish, and small animals',
              'Trusted Brands: Royal Canin, Pedigree, Drools, Farmina, Whiskas, and more',
              'Expert Advice: Our staff helps you choose the right products',
              'Quality Assured: We stock only safe, tested pet products',
              'Convenient Location: Easy to reach from anywhere in South Kolkata',
              'Pharmacy Available: Health products and medicines in stock'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-sm">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-text-dark">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-12">
          <h2 className="font-fredoka text-3xl md:text-4xl font-semibold mb-12 text-center text-text-dark">
            Products FAQ
          </h2>
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={productFAQs} />
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PetStore',
            name: "Pet's Need",
            description: 'Quality pet supplies for dogs, cats, birds, and small animals in Alipore, Kolkata',
            telephone: '7411576879',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '10/1D, Diamond Harbour Road',
              addressLocality: 'Alipore',
              addressRegion: 'WB',
              postalCode: '700027',
              addressCountry: 'IN'
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '10:00',
              closes: '22:00'
            }
          })
        }}
      />
    </>
  )
}
