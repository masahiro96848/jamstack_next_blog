/**
 * common/molecules/DateArea
 * @package Component
 */
import React from 'react'

import styles from '@/styles/objects/components/molecules/dateArea.module.scss'

export const DateArea: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>2022/06/28</p>
    </div>
  )
}
