/**
 * common/molecules/DateArea
 * @package Components
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
  createdAt: string
  updatedAt: string
  size?: number
}

/**
 *
 * @param {Props} props
 * @returns
 */
export const DateArea: React.FC<Props> = (props: Props) => {
  /* props */
  const { createdAt, updatedAt, size } = props

  return (
    <div className={styles.container}>
      <div className={styles.createdIcon}>
        <AiOutlineClockCircle size={size} />
      </div>
      <p className={styles.date}>{changeYearMonthDateLogic(createdAt)}</p>
      <div className={styles.updatedIcon}>
        <BsArrowClockwise size={size} />
      </div>
      <p className={styles.date}>{changeYearMonthDateLogic(updatedAt)}</p>
    </div>
  )
}
