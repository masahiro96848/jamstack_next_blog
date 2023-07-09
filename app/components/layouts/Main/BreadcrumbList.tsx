/**
 * layouts/Main/BreadcrumbList
 * @package component
 */
import React from 'react'
import Link from 'next/link'
/* styles */
import styles from '@/styles/modules/breadcrumbList.module.scss'

/**
 * Props
 */
type Props = {
  breadName: string
}

/**
 * BreadcrumbList
 * @param {Props} props
 * @returns
 */
export const BreadcrumbList: React.FC<Props> = (props: Props) => {
  /* props */
  const { breadName } = props

  return (
    <div className={styles.bread}>
      <ul className={styles.bread__list}>
        <li className={styles.bread__item}>
          <Link href="/">
            <span className={styles.bread__link}>HOME</span>
          </Link>
        </li>
        <li className={styles.breadName}>{breadName}</li>
      </ul>
    </div>
  )
}
