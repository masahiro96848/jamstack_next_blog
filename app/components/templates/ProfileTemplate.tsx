/**
 * templtes/ProfileTemplate
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
/* apis */
import { getProfileApi } from '@/apis/ProfileApi'
/* styles */
import styles from '@/styles/templates/profileTemplate.module.scss'

export const ProfileTemplate: React.FC = async () => {
  const profileData = await getProfileApi()
  const profile = profileData[0]

  return (
    <BaseBlogPostLayout breadName="プロフィール">
      {/* ページタイトル */}
      <PageTitle title="Profile" />
      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            src={profile.articleImage.url}
            alt="Picture"
            height={480}
            width={800}
          />
        </div>

        <main className={styles.main}>
          {/* 記事本文 */}
          <div dangerouslySetInnerHTML={{ __html: profile.contents }} />
        </main>
      </section>
    </BaseBlogPostLayout>
  )
}
