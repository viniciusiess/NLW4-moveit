import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/viniciusiess.png" alt="profile image Vinicius Siess" />
      <div>
        <strong>Vinicius Siess</strong>
        <p>
          <img src="icons/level.svg" alt="image level" />
          Level 1
        </p>
      </div>
    </div>
  )
}