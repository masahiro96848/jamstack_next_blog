/**
 * common/atoms/InputForm
 * @package Components
 */
import React from 'react'
/* types */
import { EventType } from '@/types/Event'
/* styles */
import styles from '@/styles/objects/components/atoms/inputForm.module.scss'

/**
 * Props
 */
export type InputFormProps = {
  text: string
  placeholder: string
  onClick?: () => void
  onChange?: EventType['onChange']
}

/**
 * InputForm
 * @param {InputFormProps} props
 * @returns
 */
export const InputForm: React.FC<InputFormProps> = (props: InputFormProps) => {
  /* props */
  const { text, placeholder, onClick, onChange } = props

  return (
    <input
      className={styles.input}
      type="text"
      value={text}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
    />
  )
}
