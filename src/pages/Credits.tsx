import { Link } from 'react-router'
import styles from '../styles/App.module.css'

function Credits() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Credits & Info</h1>

      <div className={styles.synopsis}>
        Game concepts:
        <Link
          to='https://www.foxscarlett.com'
          className={styles.ppl_link}
          target='_blank'
        >
          Fox Scarlett,
        </Link>
        <Link
          to='https://www.instagram.com/farismcreynolds/'
          className={styles.ppl_link}
          target='_blank'
        >
          Faris McReynolds
        </Link>
      </div>

      <div className={styles.synopsis}>Coding: Fox Scarlett</div>

      <div className={styles.synopsis}>
        STATUS: Right now you cannot actually &ldquo;get ahead&ldquo; in this
        game. (Can you imagine?!?! That&apos;s bullshit, man!) But you never
        know, I might code some incentives for you sometime. Yeah, you never
        know, it could happen! Better keep playing!
      </div>

      <div className={styles.linkwrapper}>
        <Link to='/play' className={styles.link}>
          <h3>back to the dream, baby</h3>
        </Link>
      </div>
    </div>
  )
}
export default Credits
