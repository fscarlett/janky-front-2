import { useParams, Link } from 'react-router'

import '../styles/globals.css'
import styles from '../styles/Places.module.css'

import { destinations } from '../utils/places'
import Scores from '../components/Scores'
import BarMenu from '../components/BarMenu'
import GearMenu from '../components/GearMenu'
import Interactions from '../components/Interactions'

function Places() {
  const { place } = useParams<{ place: string }>()

  const placeName = destinations[place || '']?.name || 'Unknown Place'
  const placeDescription =
    destinations[place || '']?.description || 'watev dude'

  const venueCategory = destinations[place || '']?.category || 'unknown'

  return (
    <>
      <div className={styles.main}>
        <header className={styles.places_header}>
          <h1> {placeName} </h1>
          <p>{placeDescription}</p>
        </header>
        <Scores />
        <div className={styles.places_content}>
          {venueCategory === 'store' && (
            <div className={styles.gear_column}>
              <h2>gear!! gear!! gear!!</h2>
              <GearMenu storeId={place || ''} />
            </div>
          )}
          {(venueCategory === 'club' || venueCategory === 'coffee') && (
            <div className={styles.gear_column}>
              <h2>another</h2>
              <BarMenu barId={place || ''} />
            </div>
          )}

          <div className={styles.interactions_column}>
            <h2>wha happen</h2>
            <Interactions placeId={place || ''} />
          </div>
        </div>

        <footer className={styles.places_footer}>
          <Link to='/play' className={styles.back_link}>
            Gotta bounce!
          </Link>
        </footer>
      </div>
    </>
  )
}
export default Places
