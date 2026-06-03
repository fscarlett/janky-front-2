import { Link } from 'react-router'
import chanceStyles from '../styles/ChanceCard.module.css'

function ChanceDrawCard() {
  return (
    <div className={chanceStyles.chance_card_wrapper}>
      <Link
        to='/experiences/0'
        title='have a random experience or are you a pantywaist'
        className={chanceStyles.chance_link}
      >
        Draw An Experience Card
      </Link>
    </div>
  )
}
export default ChanceDrawCard
