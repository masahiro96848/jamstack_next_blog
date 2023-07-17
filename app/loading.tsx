import styles from '@/styles/layouts/loading.module.scss'
export default function Loading() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}>Loading...</div>
    </div>
  )
}
