import { defaultScores } from '../utils/defaults'

import scoresStyles from '../styles/Scores.module.css'

function Scores() {
  return (
    <div className={scoresStyles.scores_wrapper}>
      <div className={scoresStyles.level_wrapper}>
        <div className={scoresStyles.level_label}>Level:</div>
        <div className={scoresStyles.level_amount}>{defaultScores.level}</div>
      </div>
      <div className={scoresStyles.money_wrapper}>
        <div className={scoresStyles.money_label}>Money:</div>
        <div className={scoresStyles.money_amount}>
          {defaultScores.money.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </div>
      </div>

      <div className={scoresStyles.jank_wrapper}>
        <div className={scoresStyles.jank_label}>Jank:</div>
        <div className={scoresStyles.jank_amount}>{defaultScores.jank}</div>
      </div>

      <div className={scoresStyles.cred_wrapper}>
        <div className={scoresStyles.cred_label}>Cred:</div>
        <div className={scoresStyles.cred_amount}>
          {defaultScores.cred.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </div>
      </div>
    </div>
  )
}
export default Scores
