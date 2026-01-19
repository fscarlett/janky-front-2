import styles from '../styles/BurgerButton.module.css'

interface BurgerButtonProps {
  onClick: () => void
}

export function BurgerButton({ onClick }: BurgerButtonProps) {
  return (
    <button
      className={styles.burgerButton}
      onClick={onClick}
      aria-label='Open menu'
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  )
}
