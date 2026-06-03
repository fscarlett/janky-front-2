import { useParams, Link } from 'react-router'

import '../styles/globals.css'
import styles from '../styles/Experiences.module.css'

import { experiences } from '../utils/experiences'

function Experiences() {
  const { experienceId } = useParams<{ experienceId: string }>()

  const experience = experiences[parseInt(experienceId || '0', 10)]

  if (!experience) {
    return (
      <div className={styles.main}>
        <h1>Experience Not Found</h1>
        <Link to='/play' className={styles.back_link}>
          I'm out
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.main}>
      <h1>How Janky Is It</h1>
      <p>{experience.experience}</p>
      <p>{experience.result}</p>
      <Link to='/play' className={styles.back_link}>
        OK bro watev
      </Link>
    </div>
  )
}

export default Experiences
