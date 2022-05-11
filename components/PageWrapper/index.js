import styles from './styles.module.css'

export default function PageWrapper({ children }) {
  return <main className={styles['page-wrapper']}>{children}</main>
}
