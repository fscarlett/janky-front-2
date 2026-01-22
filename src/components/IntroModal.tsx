import styles from '../styles/App.module.css'
import modalStyles from '../styles/Modal.module.css'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

interface IntroModalProps {
  isOpen: boolean
  onClose: () => void
}

export function IntroModal({ isOpen, onClose }: IntroModalProps) {
  if (!isOpen) return null

  return (
    <div
      className={modalStyles.modalOverlay}
      // onClick={onClose}
    >
      <div
        className={modalStyles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={modalStyles.closeButton} onClick={onClose}></button>

        <h1 className={styles.title}>Janky</h1>

        <h2 className={styles.description}>you gone done it now</h2>

        <div className={styles.synopsis}>
          The moment has finally arrived. You are too bored for real life so you
          have uploaded your consciousness into the cloud. Unsurprisingly, the
          virtual environment was programmed by a trust fund hipster in LA whose
          skewed worldview is only exceeded by their laziness and unreliable
          coding skills.
        </div>

        <div className={styles.linkwrapper}>
          <SignedOut>
            <a href='/login' className={styles.link}>
              <h3>Enter The Cloud</h3>
              <h4>and have your dreams come true</h4>
            </a>
          </SignedOut>
          <SignedIn>
            <a href='/play' className={styles.link}>
              <h3>Enter The Cloud</h3>
              <h4>and return to paradise</h4>
            </a>
          </SignedIn>
        </div>
      </div>
    </div>
  )
}
