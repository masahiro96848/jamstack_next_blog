/**
 * common/molecules/DateArea
 * @package Component
 */

import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsArrowClockwise } from 'react-icons/bs'

/* logic */
import { changeYearMonthDateLogic } from '@/logic/DateLogic'
/* styles */
import styles from '@/styles/objects/components/molecules/dateArea.module.scss'

/**
 * Props
 */
type Props = {
  date: string
  size?: number
}

export const DateArea: React.FC<Props> = (props: Props) => {
  const { date, size } = props
  return (
    <div className={styles.container}>
      <div className={styles.createdIcon}>
        <AiOutlineClockCircle size={size} />
      </div>
      <p className={styles.date}>{changeYearMonthDateLogic(date)}</p>
      <div className={styles.updatedIcon}>
        <BsArrowClockwise size={size} />
      </div>
      <p className={styles.date}>2022-04-22</p>
    </div>
  )
}
