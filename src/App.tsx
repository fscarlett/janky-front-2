import './styles/globals.css'
import styles from './styles/App.module.css'

function App() {
  return (
    <>
      <main className={styles.main}>
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
          <a href='/menu' className={styles.link}>
            <h3>Enter The Cloud</h3>
            <h4>and have your dreams come true</h4>
          </a>
        </div>
      </main>
    </>
  )
}
export default App
