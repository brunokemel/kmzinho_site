'use client'

import styled from 'styled-components'
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react'
import { eventInfo } from '@/data/race-data'

const Section = styled.section`
  background: linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%);
  padding: 5rem 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
  
  strong {
    color: #00A4F5;
  }
`

const SectionSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: linear-gradient(145deg, #141414 0%, #1a1a1a 100%);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(0, 164, 245, 0.3);
    transform: translateY(-5px);
  }
`

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(245, 1, 135, 0.15);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    color: #F50187;
  }
`

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: #39FF14;
    flex-shrink: 0;
    margin-top: 2px;
  }
`

const InfoContent = styled.div`
  h4 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`

const MapButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 164, 245, 0.15);
  color: #00A4F5;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  margin-top: 1.5rem;
  transition: all 0.2s;
  border: 1px solid rgba(0, 164, 245, 0.3);
  
  &:hover {
    background: rgba(0, 164, 245, 0.25);
    transform: translateX(5px);
  }
`

export default function LocationSection() {
  const { location, kitPickup } = eventInfo

  return (
    <Section id="local">
      <Container>
        <SectionHeader>
          <SectionTitle>Local do <strong>Evento</strong></SectionTitle>
          <SectionSubtitle>
            Confira onde será a largada e os pontos de retirada do seu kit
          </SectionSubtitle>
        </SectionHeader>
        
        <Grid>
          <Card>
            <CardIcon>
              <MapPin size={28} />
            </CardIcon>
            <CardTitle>Local da Corrida</CardTitle>
            
            <InfoList>
              <InfoItem>
                <MapPin size={18} />
                <InfoContent>
                  <h4>{location.name}</h4>
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <Calendar size={18} />
                <InfoContent>
                  <h4>Data do Evento</h4>
                  <p>{eventInfo.date}</p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <Clock size={18} />
                <InfoContent>
                  <h4>Horário da Largada</h4>
                  <p>{eventInfo.time}h</p>
                </InfoContent>
              </InfoItem>
            </InfoList>
            
            <MapButton 
              href={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={16} />
              Ver no Google Maps
            </MapButton>
          </Card>
          
          <Card>
            <CardIcon>
              <Calendar size={28} />
            </CardIcon>
            <CardTitle>Retirada do Kit</CardTitle>
            
            <InfoList>
              <InfoItem>
                <MapPin size={18} />
                <InfoContent>
                  <h4>{kitPickup.name}</h4>
                  <p>{kitPickup.address}</p>
                  <p>{kitPickup.city}</p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <Calendar size={18} />
                <InfoContent>
                  <h4>Datas de Retirada</h4>
                  <p>{kitPickup.dates}</p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <Clock size={18} />
                <InfoContent>
                  <h4>Horário de Funcionamento</h4>
                  <p>{kitPickup.time}</p>
                </InfoContent>
              </InfoItem>
            </InfoList>
            
            <MapButton 
              href={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={16} />
              Ver no Google Maps
            </MapButton>
          </Card>
        </Grid>
      </Container>
    </Section>
  )
}
