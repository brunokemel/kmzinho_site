'use client'
import {
  Section,
  Container,
  SectionTitle,
  SliderWrapper,
  SliderTrack,
  SponsorItem
} from './Style'

const sponsorNames = [
  'PATRICIONIO', 'PATRICIONIO', 'PATRICIONIO', 'PATRICIONIO', 'PATRICIONIO',
  'PATRICIONIO', 'PATRICIONIO', 'PATRICIONIO', 'PATRICIONIO', 'PATRICIONIO'
]

export default function SponsorsSlider() {
  const duplicatedSponsors = [...sponsorNames, ...sponsorNames]

  return (
    <Section id="patrocinadores">
      <Container>
        <SectionTitle>Patrocinadores Oficiais</SectionTitle>
        <SliderWrapper>
          <SliderTrack>
            {duplicatedSponsors.map((name, index) => (
              <SponsorItem key={index}>
                <span>{name}</span>
              </SponsorItem>
            ))}
          </SliderTrack>
        </SliderWrapper>
      </Container>
    </Section>
  )
}
