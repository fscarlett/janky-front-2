import { useParams } from 'react-router'

import '../styles/globals.css'
import styles from '../styles/Places.module.css'

function Places() {
  const { place } = useParams<{ place: string }>()

  return (
    <>
      <div className={styles.main}>
        <h1> {place} </h1>
        <p>This is the Places page content.</p>
      </div>
    </>
  )
}
export default Places
