import { Link } from 'react-router'
import chanceStyles from '../styles/ChanceCard.module.css'

function ChanceDrawCard() {
  return (
    <div className={chanceStyles.chance_card_wrapper}>
      <Link
        to='/chance'
        title='have a random experience or are you a pantywaist'
        className={chanceStyles.chance_link}
      >
        Draw a Chance Card
      </Link>
    </div>
  )
}
export default ChanceDrawCard
