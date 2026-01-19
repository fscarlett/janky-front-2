import { Link } from 'react-router'
import styles from '../styles/NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Page Not Found</h2>
      <p className={styles.description}>
        Oops you wound up in Orange County wtf. Course correction required.
      </p>
      <Link to='/play' className={styles.homeLink}>
        Return To The Cocoon
      </Link>
    </div>
  )
}

export default NotFound
