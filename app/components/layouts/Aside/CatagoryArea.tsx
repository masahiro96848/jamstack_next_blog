import Link from 'next/link'
import React from 'react'
import { AsideSectionArea } from '@/components/layouts/Aside/AsideSectionArea'
import styles from '@/styles/layouts/aside/categoryArea.module.scss'

export const CategoryArea = () => {
  const categories = ['Javascript', 'Typescript', 'Node.js', 'Docker', 'Jest']

  return (
    <>
      <AsideSectionArea title="カテゴリー">
        <div className={styles.container}>
          <ul className={styles.lists}>
            {categories.map((category, index) => {
              return (
                <li className={styles.list} key={index}>
                  <Link href="/">
                    <div className={styles.category}>
                      <span>{category}</span>
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
