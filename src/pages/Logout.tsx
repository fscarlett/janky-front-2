import { Link } from 'react-router'
import { SignOutButton } from '@clerk/clerk-react'
import styles from '../styles/App.module.css'

function LogoutPage() {
  return (
    <div className={styles.main}>
      <h1>Happy Trails To You</h1>
      <div className={styles.clerk_wrapper}>
        <div className={styles.freeway_sign}>
          <SignOutButton>
            <button>
              Log Out: <br />
              <br />
              I-5 North <br />
              Bakersfield <br />
              San Francisco
            </button>
          </SignOutButton>
          <Link to='/play'>
            <p className={styles.not_done}>way way wait i am not done man</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default LogoutPage
