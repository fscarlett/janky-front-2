import { Link } from 'react-router'
import styles from '../styles/NavFlyout.module.css'

interface NavFlyoutProps {
  isOpen: boolean
  onClose: () => void
}

const routes = [
  // { path: '/', label: 'Home' },
  { path: '/login', label: 'Login' },
  { path: '/play', label: 'Lets Play This Fucking Game' },
  { path: '/instructions', label: 'Instructions' },
  { path: '/credits', label: 'Credits and Info' },
  { path: '/', label: 'Log Out: I-5 North Bakersfield San Francisco' },
]

export function NavFlyout({ isOpen, onClose }: NavFlyoutProps) {
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <nav className={`${styles.flyout} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <ul className={styles.navList}>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={styles.navLink}
                onClick={onClose}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
