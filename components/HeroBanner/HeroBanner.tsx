'use client'

import { Calendar, MapPin, ChevronDown } from 'lucide-react'
import { eventInfo } from '@/data/race-data'
import {
  HeroWrapper,
  RunnerSilhouette,
  Content,
  Badge,
  Title,
  Subtitle,
  InfoGrid,
  InfoItem,
  CTAButton,
  ScrollIndicator
} from './Style'

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
