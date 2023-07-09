/**
 * layouts/Aside/AsideSectionArea
 * @package Components
 */
import React from 'react'
/* styles */
import styles from '@/styles/layouts/aside/asideSectionArea.module.scss'

type Props = {
  children: React.ReactNode
  title: string
}

/**
 * AsideSectionArea
 * @param {Props} props
 * @returns
 */
export const AsideSectionArea = (props: Props) => {
  /* props */
  const { children, title } = props

  return (
    <>
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.bar} />
      <div className={styles.content}>{children}</div>
    </>
  )
}
