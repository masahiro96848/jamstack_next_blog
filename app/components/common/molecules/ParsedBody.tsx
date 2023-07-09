/**
 * common/molecules/ParsedBody
 * @package Components
 */
import React from 'react'
import parse from 'html-react-parser'
/* styles */
import styles from '@/styles/objects/components/molecules/parsedBody.module.scss'

/**
 * Props
 */
type Props = {
  body: string
}

/**
 *
 * @param {Props} props
 * @returns
 */
export const ParsedBody: React.FC<Props> = (props: Props) => {
  /* props */
  const { body } = props

  return (
    <main className={styles.main}>
      {/* 記事本文 */}
      <div className={styles.contents}>{parse(body)}</div>
    </main>
  )
}
