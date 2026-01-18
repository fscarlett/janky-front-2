import { useState } from 'react'
import './styles/globals.css'
import styles from './styles/App.module.css'
import { IntroModal } from './components/IntroModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <>
      <main className={styles.main}>
        <button onClick={() => setIsModalOpen(true)}>Show Intro</button>
        <IntroModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </>
  )
}
export default App
