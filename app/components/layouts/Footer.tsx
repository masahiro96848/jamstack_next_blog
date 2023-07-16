/**
 * layouts/Main/Footer
 * @package Components
 */
import Link from 'next/link'
import React from 'react'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'
/* styles */
import styles from '@/styles/modules/footer.module.scss'

/**
 * Footer
 * @returns
 */
export const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.lists}>
        <Link href={NAVIGATION_LINK.TOP}>
          <li className={styles.list}>Top</li>
        </Link>
        <li className={styles.border}>|</li>
        <Link href={NAVIGATION_LINK.POLICY}>
          <li className={styles.list}>免責事項・プライバシーポリシー</li>
        </Link>
      </ul>

      {/* copyright */}
      <p className={styles.copy}>
        © &nbsp;<span>2023 ZEROne.</span>
      </p>
    </div>
  )
}
