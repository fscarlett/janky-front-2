import { Link } from 'react-router'
import { SignIn } from '@clerk/clerk-react'
import styles from '../styles/App.module.css'

function LoginPage() {
  return (
    <div className={styles.main}>
      <h1>Login / Register</h1>
      <div className={styles.clerk_wrapper}>
        <SignIn />
      </div>
    </div>
  )
}
export default LoginPage
