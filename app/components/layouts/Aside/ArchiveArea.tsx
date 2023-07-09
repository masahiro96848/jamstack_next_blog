/**
 * layouts/Aside/ArchiveArea
 * @package Components
 */
import Link from 'next/link'
import React from 'react'
/* components */
import { AsideSectionArea } from '@/components/layouts/Aside/AsideSectionArea'
/* styles */
import styles from '@/styles/layouts/aside/archiveArea.module.scss'

/**
 * ArchiveArea
 * @returns
 */
export const ArchiveArea = () => {
  const archives = ['> 2023年8月', '> 2023年7月', '> 2023年6月']

  return (
    <>
      <AsideSectionArea title="アーカイブ">
        <div className={styles.container}>
          <ul className={styles.lists}>
            {archives.map((archive, index) => {
              return (
                <li className={styles.list} key={index}>
                  <Link href="/">
                    <div className={styles.archive}>
                      <p>{archive}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </AsideSectionArea>
    </>
  )
}
