/**
 * components/molecules/ParsedBody.tsx
 * @package components
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
export const ParsedBody: React.FC<Props> = (props: Props) => {
  const { body } = props
  return (
    <main className={styles.main}>
      {/* 記事本文 */}
      <div className={styles.contents}>{parse(body)}</div>
    </main>
  )
}
