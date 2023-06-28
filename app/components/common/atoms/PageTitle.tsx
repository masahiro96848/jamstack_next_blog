/**
 * common/atoms/PageTitle
 * @package Component
 */
import React from 'react'
/* styles */
import styles from '@/styles/objects/components/atoms/pageTitle.module.scss'

/**
 * Props
 */
type PageTitleProps = {
  title: string
}

export const PageTitle: React.FC<PageTitleProps> = (props: PageTitleProps) => {
  /* props */
  const { title } = props
  return (
    <div className={styles.title}>
      <h2 className={styles.title__content}>{title}</h2>
      <p className={styles.title__border}></p>
    </div>
  )
}
