import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/viniciusiess.png" alt="profile image Vinicius Siess" />
      <div>
        <strong>Vinicius Siess</strong>
        <p>
          <img src="icons/level.svg" alt="image level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}