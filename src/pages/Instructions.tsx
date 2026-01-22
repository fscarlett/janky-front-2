import { Link } from 'react-router'
import styles from '../styles/App.module.css'

function Instructions() {
  return (
    <div className={styles.main}>
      <h1>Instructions</h1>

      <h2 className={styles.description}>ok, one more time</h2>

      <div className={styles.synopsis}>
        Um, you are in a virtual hipster enclave in a virtual major American
        city (hint: think palm trees and car chases). Your existence revolves
        around going to indie rock shows, buying music gear, and getting coffee
        at the coffee place that is called of course Janky. To get janky you
        need to buy Janky. That&apos;s it. That&apos;s the game.
      </div>

      <div className={styles.synopsis}>
        ...oh, and money shows up in your bank account on a regular basis. Where
        does it come from? We don&apos;t talk about that. Don&apos;t ask,
        don&apos;t tell. This being the cloud, we have our own coin called JC
        that is <span>totally not a scam</span> way cooler than fiat currency
        and makes your life frickin special. btw this is a virtual virtual coin
        (it&apos;s virtuals all the way down mkay), like so many other things it
        is worth nothing in the real world. Zero nada zilch.
      </div>

      <div className={styles.synopsis}>
        Every <span>day you exist in the cloud</span> so often, you will have to
        spend some on surviving, so x amount will disappear. Is there a
        discernable pattern to the amounts involved? Hmmmm.... Also you can
        randomly get a parking ticket maybe, who knows why. One thing that will
        not happen though is you getting arrested. That is just not how it works
        in the cloud. Cool cool. Don&apos;t get cocky though, you can totally
        become very unfortunate in this game. Some say that is your fate. What
        do they know, man.
      </div>

      <div className={styles.linkwrapper}>
        <Link to='/play' className={styles.link}>
          <h3>Yes yes I need to live the dream</h3>
        </Link>
      </div>
    </div>
  )
}
export default Instructions
