import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AsideSectionArea } from '@/components/layouts/Aside/AsideSectionArea'
import styles from '@/styles/layouts/aside/profileArea.module.scss'

export const ProfileArea = () => {
  return (
    <>
      <AsideSectionArea title="プロフィール">
        <div className={styles.container}>
          <div className={styles.imageArea}>
            <Image
              src="/sample42.jpeg"
              width={100}
              height={100}
              alt="profile_image"
              className={styles.image}
            />
          </div>
          <div className={styles.bar} />
          <p className={styles.name}>Masahiro</p>
          <p className={styles.content}>フリーランスエンジニア</p>

          <Link href={'/profile'}>
            <p className={styles.more}>More</p>
          </Link>

          <div></div>
        </div>
      </AsideSectionArea>
    </>
  )
}
