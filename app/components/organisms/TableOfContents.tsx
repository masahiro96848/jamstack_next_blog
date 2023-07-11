/**
 * organisms/TitleArea
 * @package Component
 */
import React from 'react'

/* types */
import { TableOfContentsType } from '@/types/Blog'
/* styles */
import styles from '@/styles/objects/components/organisms/tableOfContents.module.scss'

/**
 * Props
 */
type Props = {
  // tableOfContents: TableOfContentsType[]
}

export const TableOfContents: React.FC<Props> = (props: Props) => {
  /* props */
  // const { tableOfContents } = props
  return (
    <>
      {/* {tableOfContents.length > 0 && (
        <div className={styles.container} id="create-table-of-contents">
          <h4>目次</h4>
          {tableOfContents.map((toc) => {
            const listStyle =
              toc.name === 'h2' ? styles.list__h2 : styles.list__h1

            return (
              <li className={listStyle} id={'list' + toc.name} key={toc.id}>
                {toc.text}
              </li>
            )
          })}
        </div>
      )} */}
    </>
  )
}
