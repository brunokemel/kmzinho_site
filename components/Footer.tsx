'use client'

import styled from 'styled-components'
import { eventInfo } from '@/data/race-data'

const FooterWrapper = styled.footer`
  background: #080808;
  padding: 3rem 0 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  
  strong {
    color: #00A4F5;
  }
`

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;
    
    &:hover {
      color: #F50187;
    }
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin: 1.5rem 0;
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.85rem;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <Logo>
            <strong>1km</strong>zinho
          </Logo>
          
          <FooterNav>
            <a href="#inicio">Início</a>
            <a href="#corridas">Corridas</a>
            <a href="#local">Local</a>
            <a href="#contato">Contato</a>
          </FooterNav>
          
          <Divider />
          
          <Copyright>
            &copy; {new Date().getFullYear()} {eventInfo.name}. Todos os direitos reservados.
          </Copyright>
        </FooterContent>
      </Container>
    </FooterWrapper>
  )
}
