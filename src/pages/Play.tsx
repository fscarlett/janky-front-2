import { Link } from 'react-router'

// import styles from '../styles/App.module.css'
import playStyles from '../styles/Play.module.css'

function Play() {
  return (
    <div className={playStyles.main}>
      <div className={playStyles.play_header}>
        <div className={playStyles.play_left_stats}>
          <p>Gear List</p>
        </div>
        <div className={playStyles.play_center_nav}>
          <div className={playStyles.nav_wrapper}>
            <p className={playStyles.nav_label}>You Should Buy More Gear</p>
            <ul>
              <li>
                <Link
                  to='/store-sunset'
                  title='famous vintage gear store on Sunrise Blvd'
                  className={playStyles.play_link}
                >
                  Alvin&apos;s Guitars
                </Link>
              </li>
              <li>
                <Link
                  to='/store-figueroa'
                  title='indie-famous used gear store on Figueroa St'
                  className={playStyles.play_link}
                >
                  Retro Music
                </Link>
              </li>
              <li>
                <Link
                  to='/store-alley'
                  title='A super shady Aussie guy who wanders around in a messed up Range Rover'
                  className={playStyles.play_link}
                >
                  Gunther the Shady Gear Dude
                </Link>
              </li>
            </ul>
          </div>
          <div className={playStyles.nav_wrapper}>
            <p className={playStyles.nav_label}>You Should Go To A Bar</p>
            <ul>
              <li>
                <Link
                  to='/bar-slbvd'
                  title='300 capacity club on Golden Lake Ave'
                  className={playStyles.play_link}
                >
                  Cloudland
                </Link>
              </li>
              <li>
                <Link
                  to='/bar-sunset-north'
                  title='120 capacity bar on Sunrise Blvd'
                  className={playStyles.play_link}
                >
                  Sunrise Lounge
                </Link>
              </li>
              <li>
                <Link
                  to='/bar-sunset-south'
                  title='Dive bar next to the stadium entrance by downtown'
                  className={playStyles.play_link}
                >
                  Whos On First
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={playStyles.play_right_stats}>
          <div className={playStyles.level_wrapper}>
            <div className={playStyles.level_label}>Level:</div>
            <div className={playStyles.level_amount}>1</div>
          </div>
          <div className={playStyles.money_wrapper}>
            <div className={playStyles.money_label}>Money:</div>
            <div className={playStyles.money_amount}>100</div>
          </div>

          <div className={playStyles.jank_wrapper}>
            <div className={playStyles.jank_label}>Jank:</div>
            <div className={playStyles.jank_amount}>500</div>
          </div>
        </div>
      </div>
      <div className={playStyles.play_board}>
        this is where you do your thing or your thing does you or whatever it is
      </div>
    </div>
  )
}
export default Play
