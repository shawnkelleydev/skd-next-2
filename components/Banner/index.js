import styles from './styles.module.css'

export default function PageWrapper({ children }) {
  return <div className={styles['page-wrapper']}>{children}</div>
}
