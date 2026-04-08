import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(8, 8, 8, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.a`
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

export const Nav = styled.nav<{ $isOpen: boolean }>`
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

export const NavLink = styled.a`
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

export const CTAButton = styled.a`
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

export const MobileMenuButton = styled.button`
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

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`