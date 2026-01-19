import { useState, ReactNode } from 'react'
import { useLocation } from 'react-router'
import { BurgerButton } from './BurgerButton'
import { NavFlyout } from './NavFlyout'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      {!isHomePage && <BurgerButton onClick={() => setIsFlyoutOpen(true)} />}
      <NavFlyout isOpen={isFlyoutOpen} onClose={() => setIsFlyoutOpen(false)} />
      {children}
    </>
  )
}
