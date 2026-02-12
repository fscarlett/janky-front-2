import { interactions } from '../utils/interactions'
import interactionsStyles from '../styles/Interactions.module.css'

function Interactions({ placeId }: { placeId: string }) {
  const interactionsQty = interactions.length
  const randomIndex = Math.floor(Math.random() * interactionsQty)

  const interactionKey: number = randomIndex
  const interaction = interactions[interactionKey] || {
    interaction: 'you blinked',
  }
  return (
    <div className={interactionsStyles.interactions_wrapper}>
      <p>{interaction.interaction}</p>
      <h4>choose:</h4>
      {interaction.options.map((option: string, index: number) => (
        <div key={index}>{option}</div>
      ))}
    </div>
  )
}
export default Interactions
