// import { Link } from 'react-router'
import { SignUp } from '@clerk/clerk-react'
import styles from '../styles/App.module.css'

function RegisterPage() {
  return (
    <div className={styles.main}>
      <h1>Create Your Account For Free</h1>
      <div className={styles.clerk_wrapper}>
        <SignUp />
      </div>
      <p>The first one's always free</p>
    </div>
  )
}
export default RegisterPage
