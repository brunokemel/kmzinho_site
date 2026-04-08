'use client'

import Header from '@/components/Header/Header'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
import SponsorsSlider from '@/components/SponsorsSlider/SponsorsSlider'
import RaceCards from '@/components/RaceCards/RaceCards'
import LocationSection from '@/components/LocationMap/LocationSection'
import ContactSection from '@/components/Contact/ContactSection'
import Footer from '@/components/Footer/Footer'

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
