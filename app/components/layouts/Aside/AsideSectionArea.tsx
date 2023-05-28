import React from 'react'
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
  const { children, title } = props

  return (
    <>
      <h6 className={styles.title}>{title}</h6>
      <div className={styles.bar} />
      <div className={styles.content}>{children}</div>
    </>
  )
}
