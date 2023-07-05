/**
 * common/molecules/DateArea
 * @package Component
 */
import React from 'react'

import styles from '@/styles/objects/components/molecules/dateArea.module.scss'

/**
 * Props
 */
type Props = {
  date: string
}

export const DateArea: React.FC<Props> = (props: Props) => {
  const { date } = props
  return (
    <div className={styles.container}>
      <p className={styles.date}>{date}</p>
    </div>
  )
}
