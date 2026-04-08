'use client'

import styled, { keyframes } from 'styled-components'

const Section = styled.section`
  background: #0d0d0d;
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const SectionTitle = styled.h3`
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 2rem;
  font-weight: 500;
`

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const SliderWrapper = styled.div`
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
`

const SliderTrack = styled.div`
  display: flex;
  gap: 4rem;
  animation: ${scroll} 20s linear infinite;
  width: fit-content;
`

const SponsorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 164, 245, 0.1);
    border-color: rgba(0, 164, 245, 0.2);
  }
  
  span {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`

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
