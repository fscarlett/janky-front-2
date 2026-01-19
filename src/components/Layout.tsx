import { useState, ReactNode } from 'react'
import { BurgerButton } from './BurgerButton'
import { NavFlyout } from './NavFlyout'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false)

  return (
    <>
      <BurgerButton onClick={() => setIsFlyoutOpen(true)} />
      <NavFlyout isOpen={isFlyoutOpen} onClose={() => setIsFlyoutOpen(false)} />
      {children}
    </>
  )
}
