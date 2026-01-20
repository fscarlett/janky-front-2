import { useParams, Link } from 'react-router'

import '../styles/globals.css'
import styles from '../styles/Places.module.css'

import { destinations } from '../utils/places'

function Places() {
  const { place } = useParams<{ place: string }>()

  const placeName = destinations[place || '']?.name || 'Unknown Place'
  const placeDescription =
    destinations[place || '']?.description || 'watev dude'

  return (
    <>
      <div className={styles.main}>
        <h1> {placeName} </h1>
        <p>{placeDescription}</p>
        <Link to='/play' className={styles.back_link}>
          Gotta bounce!
        </Link>
      </div>
    </>
  )
}
export default Places
