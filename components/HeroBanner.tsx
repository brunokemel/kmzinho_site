'use client'

import styled from 'styled-components'
import { Calendar, MapPin, ChevronDown } from 'lucide-react'
import { eventInfo } from '@/data/race-data'

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(0, 164, 245, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(245, 1, 135, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 900px;
`

const Badge = styled.span`
  display: inline-block;
  background: rgba(245, 1, 135, 0.2);
  color: #F50187;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(245, 1, 135, 0.3);
`

const Title = styled.h1`
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 900;
  color: #fff;
  line-height: 1;
  margin-bottom: 0.5rem;
  
  strong {
    color: #00A4F5;
  }
`

const Subtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const InfoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  
  svg {
    color: #39FF14;
  }
  
  span {
    font-size: 1rem;
  }
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #F50187 0%, #00A4F5 100%);
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #D00175 0%, #008CD5 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(245, 1, 135, 0.4);
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  a {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s;
    
    &:hover {
      color: #39FF14;
    }
  }
`

const RunnerSilhouette = styled.div`
  position: absolute;
  right: -5%;
  bottom: 10%;
  width: 40%;
  height: 70%;
  background: linear-gradient(to right, transparent, rgba(0, 164, 245, 0.05));
  clip-path: polygon(30% 100%, 35% 85%, 40% 70%, 50% 55%, 55% 45%, 65% 35%, 70% 25%, 75% 15%, 80% 5%, 85% 0%, 100% 0%, 100% 100%);
  pointer-events: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`

export default function HeroBanner() {
  return (
    <HeroWrapper id="inicio">
      <RunnerSilhouette />
      <Content>
        <Badge>Corrida de Rua 2026</Badge>
        <Title><strong>1km</strong>zinho</Title>
        <Subtitle>{eventInfo.tagline}</Subtitle>
        
        <InfoGrid>
          <InfoItem>
            <Calendar size={20} />
            <span>{eventInfo.date}</span>
          </InfoItem>
          <InfoItem>
            <MapPin size={20} />
            <span>{eventInfo.location.name}</span>
          </InfoItem>
        </InfoGrid>
        
        <CTAButton href="#corridas">
          Inscreva-se Agora
        </CTAButton>
      </Content>
      
      <ScrollIndicator>
        <a href="#patrocinadores">
          <ChevronDown size={32} />
        </a>
      </ScrollIndicator>
    </HeroWrapper>
  )
}
