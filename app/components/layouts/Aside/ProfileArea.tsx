/**
 * layouts/Aside/ProfileArea
 * @package Components
 */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
/* apis */
import { getProfileApi } from '@/apis/ProfileApi'
/* components */
import { AsideSectionArea } from '@/components/layouts/Aside/AsideSectionArea'
/* constants */
import { NAVIGATION_LINK } from '@/constants/navigation'
/* styles */
import styles from '@/styles/layouts/aside/profileArea.module.scss'

/**
 * ProfileArea
 * @returns
 */
export const ProfileArea = async () => {
  /* api */
  const data = await getProfileApi()
  const profile = data[0]
  return (
    <>
      <AsideSectionArea title="プロフィール">
        <div className={styles.container}>
          <div className={styles.imageArea}>
            <Image
              src={profile.userImage.url}
              width={100}
              height={100}
              alt="profile_image"
              className={styles.image}
            />
          </div>
          <div className={styles.bar} />
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.content}>{profile.position}</p>

          <Link href={NAVIGATION_LINK.PROFILE}>
            <p className={styles.more}>More</p>
          </Link>
        </div>
      </AsideSectionArea>
    </>
  )
}
