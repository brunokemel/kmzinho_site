'use client'

import styled from 'styled-components'
import { Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { eventInfo } from '@/data/race-data'

const Section = styled.section`
  background: #0a0a0a;
  padding: 5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`

const ContactCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(145deg, #141414 0%, #1a1a1a 100%);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(245, 1, 135, 0.4);
    transform: translateY(-5px);
    
    .icon-wrapper {
      background: linear-gradient(135deg, #F50187 0%, #00A4F5 100%);
      
      svg {
        color: #fff;
      }
    }
  }
`

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(245, 1, 135, 0.15);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    color: #F50187;
    transition: all 0.3s ease;
  }
`

const ContactTitle = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
`

const ContactValue = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  text-align: center;
`

const SocialGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`

const SocialButton = styled.a`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  svg {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #F50187 0%, #00A4F5 100%);
    border-color: #F50187;
    transform: translateY(-3px);
    
    svg {
      color: #fff;
    }
  }
`

export default function ContactSection() {
  const { contact } = eventInfo

  return (
    <Section id="contato">
      <Container>
        <SectionHeader>
          <SectionTitle>Entre em <strong>Contato</strong></SectionTitle>
          <SectionSubtitle>
            Ficou com alguma dúvida? Fale conosco através dos canais abaixo
          </SectionSubtitle>
        </SectionHeader>
        
        <Grid>
          <ContactCard href={`mailto:${contact.email}`}>
            <IconWrapper className="icon-wrapper">
              <Mail size={24} />
            </IconWrapper>
            <ContactTitle>E-mail</ContactTitle>
            <ContactValue>{contact.email}</ContactValue>
          </ContactCard>
          
          <ContactCard href={`tel:${contact.phone.replace(/\D/g, '')}`}>
            <IconWrapper className="icon-wrapper">
              <Phone size={24} />
            </IconWrapper>
            <ContactTitle>Telefone</ContactTitle>
            <ContactValue>{contact.phone}</ContactValue>
          </ContactCard>
          
          <ContactCard 
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper className="icon-wrapper">
              <MessageCircle size={24} />
            </IconWrapper>
            <ContactTitle>WhatsApp</ContactTitle>
            <ContactValue>Enviar mensagem</ContactValue>
          </ContactCard>
        </Grid>
        
        <SocialGrid>
          <SocialButton 
            href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </SocialButton>
          
          <SocialButton 
            href={`https://facebook.com${contact.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={22} />
          </SocialButton>
        </SocialGrid>
      </Container>
    </Section>
  )
}
