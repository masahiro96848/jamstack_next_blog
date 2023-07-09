/**
 * common/atoms/InputForm
 * @package Components
 */
import React from 'react'

/* styles */
import styles from '@/styles/objects/components/atoms/inputForm.module.scss'
/**
 * InputForm
 */
export const InputForm: React.FC = () => {
  return (
    <input className={styles.input} type="text" placeholder="キーワード検索" />
  )
}
