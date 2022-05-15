import styles from './styles.module.css'

export default function ConnectButton({ children, step, url }) {
  return (
    <div
      className={styles['connect-button']}
      data-show={step >= 8}
    >
      <a
        href={url}
        rel='noreferrer'
        target='_blank'
      >
        <button
          className={styles.button}
          disabled={step < 8}
        >
          {children}
        </button>
      </a>
    </div>
  )
}
