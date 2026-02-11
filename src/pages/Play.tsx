import { Link } from 'react-router'
import { useUser } from '@clerk/clerk-react'

// import styles from '../styles/App.module.css'
import playStyles from '../styles/Play.module.css'
// import { defaultScores } from '../utils/defaults'

import Scores from '../components/Scores'

function Play() {
  const { isSignedIn, user, isLoaded } = useUser()
  return (
    <div className={playStyles.main} id='play-main'>
      <div className={playStyles.play_top_nav}>
        <Link to='/instructions' className={playStyles.play_top_link}>
          Instructions
        </Link>
        <Link to='/credits' className={playStyles.play_top_link}>
          Credits
        </Link>
        <Link to='/logout' className={playStyles.play_top_link}>
          Log Out
        </Link>
      </div>
      <div className={playStyles.play_topbar}>
        <div className={playStyles.play_logo}>JANKY</div>
        <div className={playStyles.play_userinfo}>
          {isLoaded && isSignedIn && user && (
            <div>
              <p className={playStyles.user_greeting}>
                <span>👩‍🎤</span> {user.username || 'Janky Player'} in the house
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={playStyles.play_header}>
        <div className={playStyles.play_left_stats}>
          <p>My Stuff</p>
        </div>
        <div className={playStyles.play_center_nav}>
          <div className={playStyles.nav_wrapper}>
            <p className={playStyles.nav_label}>You Should Buy More Gear</p>
            <ul>
              <li>
                <Link
                  to='/places/store-sunset'
                  title='famous vintage gear store on Sunrise Blvd'
                  className={playStyles.play_link}
                >
                  Alvin&apos;s Guitars
                </Link>
              </li>
              <li>
                <Link
                  to='/places/store-figueroa'
                  title='indie-famous used gear store on Figueroa St'
                  className={playStyles.play_link}
                >
                  Retro Music
                </Link>
              </li>
              <li>
                <Link
                  to='/places/store-alley'
                  title='A super shady Aussie guy who wanders around in a messed up Range Rover'
                  className={playStyles.play_link}
                >
                  Gunther the Shady Gear Dude
                </Link>
              </li>
              <li>
                <Link
                  to='/places/store-corporate'
                  title='huge corporate music store in Hollywood that you say you never go to'
                  className={playStyles.play_link}
                >
                  Pro Gear Center
                </Link>
              </li>
            </ul>
          </div>
          <div className={playStyles.nav_wrapper}>
            <p className={playStyles.nav_label}>You Should Go To A Bar</p>
            <ul>
              <li>
                <Link
                  to='/places/bar-slbvd'
                  title='300 capacity club on Golden Lake Ave'
                  className={playStyles.play_link}
                >
                  Cloudland
                </Link>
              </li>
              <li>
                <Link
                  to='/places/bar-sunset-north'
                  title='120 capacity bar on Sunrise Blvd'
                  className={playStyles.play_link}
                >
                  Sunrise Lounge
                </Link>
              </li>
              <li>
                <Link
                  to='/places/bar-sunset-south'
                  title='Dive bar next to the stadium entrance by downtown'
                  className={playStyles.play_link}
                >
                  Whos On First
                </Link>
              </li>
              <li>
                <Link
                  to='/places/bar-dtla'
                  title='disgusting punk club in the heart of skid row DTLA'
                  className={playStyles.play_link}
                >
                  The Site
                </Link>
              </li>
            </ul>
          </div>
          <div className={playStyles.nav_wrapper}>
            <p className={playStyles.nav_label}>You Should Get Janky</p>
            <ul>
              <li>
                <Link
                  to='/places/janky-coffee'
                  title='coffee shop on Golden Lake Ave'
                  className={playStyles.play_link}
                >
                  Janky, Coffee of Champions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={playStyles.play_right_stats}>
          <Scores />
          {/* <div className={playStyles.level_wrapper}>
            <div className={playStyles.level_label}>Level:</div>
            <div className={playStyles.level_amount}>{defaultScores.level}</div>
          </div>
          <div className={playStyles.money_wrapper}>
            <div className={playStyles.money_label}>Money:</div>
            <div className={playStyles.money_amount}>
              {defaultScores.money.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div>

          <div className={playStyles.jank_wrapper}>
            <div className={playStyles.jank_label}>Jank:</div>
            <div className={playStyles.jank_amount}>{defaultScores.jank}</div>
          </div>

          <div className={playStyles.cred_wrapper}>
            <div className={playStyles.cred_label}>Cred:</div>
            <div className={playStyles.cred_amount}>
              {defaultScores.cred.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </div>
          </div> */}
        </div>
      </div>
      <div className={playStyles.play_board}>
        this is where you do your thing or your thing does you or whatever it is
      </div>
    </div>
  )
}
export default Play
