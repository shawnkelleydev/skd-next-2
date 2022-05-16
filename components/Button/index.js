import styles from './styles.module.css'

export default function Button({ children, url, ...rest }) {
  return (
    <a
      href={url}
      rel='noreferrer'
      target='_blank'
    >
      <button
        className={styles.button}
        {...rest}
      >
        {children}
      </button>
    </a>
  )
}
