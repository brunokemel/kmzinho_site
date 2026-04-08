'use client'


import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import {
  HeaderWrapper,
  Container,
  Logo,
  Nav,
  NavLink,
  RightSection,
  CTAButton,
  MobileMenuButton

} from './Style'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Container>
        <Logo href="#">
          <span><strong>1km</strong>zinho</span>
        </Logo>
        
        <Nav $isOpen={isMenuOpen}>
          <NavLink href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</NavLink>
          <NavLink href="#corridas" onClick={() => setIsMenuOpen(false)}>Corridas</NavLink>
          <NavLink href="#local" onClick={() => setIsMenuOpen(false)}>Local</NavLink>
          <NavLink href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</NavLink>
        </Nav>
        
        <RightSection>
          <CTAButton href="#corridas">
            Inscreva-se
          </CTAButton>
          
          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </RightSection>
      </Container>
    </HeaderWrapper>
  )
}
