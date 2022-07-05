import styles from './styles.module.css'

export default function Down() {
  return (
    <div className={styles.down}>
      <h1>hello.</h1>
      <p>This website is down for maintenance.</p>
      <p>
        In the meantime, feel free to reach out to Shawn @{' '}
        <a href='https://www.linkedin.com/in/shawnkelleydev/'>
          https://www.linkedin.com/in/shawnkelleydev/
        </a>
      </p>
    </div>
  )
}
