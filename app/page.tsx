'use client'

import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import SponsorsSlider from '@/components/SponsorsSlider'
import RaceCards from '@/components/RaceCards'
import LocationSection from '@/components/LocationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <SponsorsSlider />
      <RaceCards />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
