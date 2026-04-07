'use client'

import styled from 'styled-components'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(8, 8, 8, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  span {
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
    
    strong {
      color: #00A4F5;
    }
  }
`

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(8, 8, 8, 0.98);
    flex-direction: column;
    padding: 2rem;
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-120%)'};
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    color: #F50187;
  }
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #F50187 0%, #00A4F5 100%);
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(245, 1, 135, 0.3);
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

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
