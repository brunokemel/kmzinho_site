'use client'

import styled from 'styled-components'
import { useState } from 'react'
import { Check, AlertCircle, Zap, UserPlus, CreditCard, X } from 'lucide-react'
import { raceKits } from '@/data/race-data'
import type { RaceKit, ShirtSize } from '@/types/race'

const Section = styled.section`
  background: #0a0a0a;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`

const Card = styled.div<{ $featured?: boolean }>`
  background: linear-gradient(145deg, #141414 0%, #1a1a1a 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${({ $featured }) => $featured ? 'rgba(245, 1, 135, 0.5)' : 'rgba(255, 255, 255, 0.08)'};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${({ $featured }) => $featured && `
    box-shadow: 0 0 40px rgba(245, 1, 135, 0.15);
  `}
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 164, 245, 0.4);
  }
`

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #39FF14;
  color: #000;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

const Distance = styled.div`
  display: inline-block;
  background: rgba(0, 164, 245, 0.15);
  color: #00A4F5;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`

const RaceName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`

const LotInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const LotBadge = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`

const Slots = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
`

const Price = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.5rem;
  
  small {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const Input = styled.input`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: #fff;
  font-size: 0.95rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #00A4F5;
    background: rgba(0, 0, 0, 0.5);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

const ActionButton = styled.button<{ $variant: 'subscribe' | 'buy'; $success?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ $variant, $success }) => {
    if ($success) return '#39FF14';
    return $variant === 'subscribe' 
      ? 'rgba(0, 164, 245, 0.15)' 
      : 'linear-gradient(135deg, #F50187 0%, #00A4F5 100%)';
  }};
  color: ${({ $variant, $success }) => {
    if ($success) return '#000';
    return $variant === 'subscribe' ? '#00A4F5' : '#fff';
  }};
  border: ${({ $variant }) => $variant === 'subscribe' ? '1px solid #00A4F5' : 'none'};
  padding: 1rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.02);
    ${({ $variant }) => $variant === 'subscribe' && `
      background: rgba(0, 164, 245, 0.25);
    `}
    ${({ $variant }) => $variant === 'buy' && `
      background: linear-gradient(135deg, #D00175 0%, #008CD5 100%);
    `}
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
    cursor: not-allowed;
    transform: none;
  }
`

const Message = styled.div<{ $type: 'error' | 'success' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
  margin-top: 1rem;
  background: ${({ $type }) => $type === 'error' ? 'rgba(231, 76, 60, 0.15)' : 'rgba(39, 174, 96, 0.15)'};
  color: ${({ $type }) => $type === 'error' ? '#e74c3c' : '#27ae60'};
  border: 1px solid ${({ $type }) => $type === 'error' ? 'rgba(231, 76, 60, 0.3)' : 'rgba(39, 174, 96, 0.3)'};
`

// Modal de compra com tamanho de camisa
const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  padding: 1rem;
`

const ModalContent = styled.div`
  background: linear-gradient(145deg, #141414 0%, #1a1a1a 100%);
  border-radius: 20px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`

const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s;
  
  &:hover {
    color: #fff;
  }
`

const ModalTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`

const ModalSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`

const SizeSelector = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const SizeButton = styled.button<{ $selected: boolean }>`
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid ${({ $selected }) => $selected ? '#F50187' : 'rgba(255, 255, 255, 0.1)'};
  background: ${({ $selected }) => $selected ? 'rgba(245, 1, 135, 0.2)' : 'rgba(0, 0, 0, 0.3)'};
  color: ${({ $selected }) => $selected ? '#F50187' : 'rgba(255, 255, 255, 0.6)'};
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #F50187;
    color: #F50187;
  }
`

const ShoeNumberInput = styled.div`
  margin-bottom: 1.5rem;
`

const ConfirmButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #F50187 0%, #00A4F5 100%);
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: linear-gradient(135deg, #D00175 0%, #008CD5 100%);
    transform: scale(1.02);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
    transform: none;
  }
`

const PriceTag = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(57, 255, 20, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(57, 255, 20, 0.2);
  
  span {
    font-size: 1.5rem;
    font-weight: 800;
    color: #39FF14;
  }
`

interface CardState {
  name: string
  email: string
  cpf: string
  phone: string
  message: { type: 'error' | 'success'; text: string } | null
  subscribeSuccess: boolean
}

interface ModalState {
  isOpen: boolean
  size: ShirtSize
  shoeNumber: string
  kit: RaceKit | null
  userData: { name: string; email: string; cpf: string; phone: string } | null
}

function RaceCard({ kit, featured = false }: { kit: RaceKit; featured?: boolean }) {
  const [state, setState] = useState<CardState>({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    message: null,
    subscribeSuccess: false
  })
  
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    size: 'M',
    shoeNumber: '',
    kit: null,
    userData: null
  })

  const formatCpf = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, cpf: formatCpf(e.target.value) }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, phone: formatPhone(e.target.value) }))
  }

  const isFormValid = state.name.trim() && 
    state.email.trim() && 
    state.cpf.replace(/\D/g, '').length === 11 &&
    state.phone.replace(/\D/g, '').length >= 10

  const handleSubscribe = () => {
    if (!isFormValid) {
      setState(prev => ({ 
        ...prev, 
        message: { type: 'error', text: 'Preencha todos os campos corretamente' } 
      }))
      return
    }

    // Simula inscrição sem pagamento
    setState(prev => ({ 
      ...prev, 
      subscribeSuccess: true,
      message: { type: 'success', text: 'Inscrição realizada com sucesso! Aguarde confirmacao por e-mail.' }
    }))

    setTimeout(() => {
      setState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        message: null,
        subscribeSuccess: false
      })
    }, 3000)
  }

  const handleBuyClick = () => {
    if (!isFormValid) {
      setState(prev => ({ 
        ...prev, 
        message: { type: 'error', text: 'Preencha todos os campos corretamente' } 
      }))
      return
    }

    setModal({
      isOpen: true,
      size: 'M',
      shoeNumber: '',
      kit: kit,
      userData: {
        name: state.name,
        email: state.email,
        cpf: state.cpf,
        phone: state.phone
      }
    })
  }

  const handleConfirmPurchase = () => {
    // TODO: Integrar com Mercado Pago aqui
    // Redirecionar para URL do Mercado Pago com os dados:
    // - modal.kit (informacoes da corrida)
    // - modal.userData (dados do usuario)
    // - modal.size (tamanho da camisa)
    // - modal.shoeNumber (numeracao)
    
    const paymentData = {
      kit: modal.kit,
      user: modal.userData,
      shirtSize: modal.size,
      shoeNumber: modal.shoeNumber,
      amount: modal.kit?.price
    }
    
    console.log('Dados para pagamento Mercado Pago:', paymentData)
    
    // TODO: Substituir esta URL pela URL de checkout do Mercado Pago
    // Exemplo: window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${preferenceId}`
    window.location.href = `/pagamento/processar?data=${encodeURIComponent(JSON.stringify(paymentData))}`
  }

  return (
    <>
      <Card $featured={featured}>
        {featured && (
          <FeaturedBadge>
            <Zap size={12} />
            Mais Popular
          </FeaturedBadge>
        )}
        
        <Distance>{kit.distance}</Distance>
        <RaceName>{kit.raceName}</RaceName>
        <Description>{kit.description}</Description>
        
        <LotInfo>
          <LotBadge>Lote {kit.lot}</LotBadge>
          <Slots>{kit.availableSlots} vagas disponíveis</Slots>
        </LotInfo>
        
        <Price>
          R$ {kit.price.toFixed(2).replace('.', ',')} <small>/ kit</small>
        </Price>
        
        <FormGroup>
          <Label>Nome Completo</Label>
          <Input 
            type="text" 
            placeholder="Seu nome completo"
            value={state.name}
            onChange={(e) => setState(prev => ({ ...prev, name: e.target.value }))}
          />
        </FormGroup>
        
        <FormGroup>
          <Label>E-mail</Label>
          <Input 
            type="email" 
            placeholder="seu@email.com"
            value={state.email}
            onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
          />
        </FormGroup>
        
        <FormGroup>
          <Label>CPF</Label>
          <Input 
            type="text" 
            placeholder="000.000.000-00"
            value={state.cpf}
            onChange={handleCpfChange}
            maxLength={14}
          />
        </FormGroup>

        <FormGroup>
          <Label>Telefone / WhatsApp</Label>
          <Input 
            type="text" 
            placeholder="(00) 00000-0000"
            value={state.phone}
            onChange={handlePhoneChange}
            maxLength={15}
          />
        </FormGroup>
        
        <ButtonGroup>
          <ActionButton 
            $variant="subscribe"
            $success={state.subscribeSuccess}
            onClick={handleSubscribe}
            disabled={!isFormValid && !state.subscribeSuccess}
          >
            {state.subscribeSuccess ? (
              <>
                <Check size={18} />
                Inscrito!
              </>
            ) : (
              <>
                <UserPlus size={18} />
                Inscrever
              </>
            )}
          </ActionButton>
          
          <ActionButton 
            $variant="buy"
            onClick={handleBuyClick}
            disabled={!isFormValid}
          >
            <CreditCard size={18} />
            Comprar Kit
          </ActionButton>
        </ButtonGroup>
        
        {state.message && (
          <Message $type={state.message.type}>
            <AlertCircle size={16} />
            {state.message.text}
          </Message>
        )}
      </Card>

      {/* Modal de Compra */}
      <ModalOverlay $isOpen={modal.isOpen} onClick={() => setModal(prev => ({ ...prev, isOpen: false }))}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalClose onClick={() => setModal(prev => ({ ...prev, isOpen: false }))}>
            <X size={24} />
          </ModalClose>
          
          <ModalTitle>Finalizar Compra</ModalTitle>
          <ModalSubtitle>Escolha o tamanho da camisa e numeracao</ModalSubtitle>
          
          <PriceTag>
            <span>R$ {kit.price.toFixed(2).replace('.', ',')}</span>
          </PriceTag>
          
          <FormGroup>
            <Label>Tamanho da Camisa</Label>
            <SizeSelector>
              {(['P', 'M', 'G'] as ShirtSize[]).map(size => (
                <SizeButton
                  key={size}
                  $selected={modal.size === size}
                  onClick={() => setModal(prev => ({ ...prev, size }))}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeSelector>
          </FormGroup>

          <ShoeNumberInput>
            <Label>Numeracao (opcional)</Label>
            <Input 
              type="text" 
              placeholder="Ex: 42"
              value={modal.shoeNumber}
              onChange={(e) => setModal(prev => ({ ...prev, shoeNumber: e.target.value.replace(/\D/g, '').slice(0, 2) }))}
              maxLength={2}
            />
          </ShoeNumberInput>
          
          <ConfirmButton onClick={handleConfirmPurchase}>
            <CreditCard size={18} />
            Ir para Pagamento
          </ConfirmButton>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}

export default function RaceCards() {
  return (
    <Section id="corridas">
      <Container>
        <SectionHeader>
          <SectionTitle>Escolha sua <strong>Corrida</strong></SectionTitle>
          <SectionSubtitle>
            Selecione a distância ideal para você e garanta seu kit com a camisa oficial do evento
          </SectionSubtitle>
        </SectionHeader>
        
        <Grid>
          {raceKits.map((kit, index) => (
            <RaceCard 
              key={kit.id} 
              kit={kit} 
              featured={index === 2}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
