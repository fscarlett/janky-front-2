import { Link } from 'react-router'
import chanceStyles from '../styles/ChanceCard.module.css'
import { experiences } from '../utils/experiences'

function ChanceDrawCard() {
  const experiencesAvailable = experiences.length
  console.log('experiences available:', experiencesAvailable)
  const cardNumber: number = Math.floor(Math.random() * experiencesAvailable)
  return (
    <div className={chanceStyles.chance_card_wrapper}>
      <Link
        to={`/experiences/${cardNumber}`}
        title='have a random experience or are you a pantywaist'
        className={chanceStyles.chance_link}
      >
        Draw An Experience Card
      </Link>
    </div>
  )
}
export default ChanceDrawCard
