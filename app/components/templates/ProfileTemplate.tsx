/**
 * templtes/ProfileTemplate
 * @package Component
 */
import React from 'react'
import Image from 'next/image'
/* components */
import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { ParsedBody } from '@/components/common/molecules/ParsedBody'
/* apis */
import { getProfileApi } from '@/apis/ProfileApi'
/* styles */
import styles from '@/styles/templates/profileTemplate.module.scss'

export const ProfileTemplate: React.FC = async () => {
  const profileData = await getProfileApi()
  const profile = profileData[0]

  return (
    <>
      <BaseBlogPostLayout breadName="プロフィール">
        {/* ページタイトル */}
        <PageTitle title="Profile" />
        <section className={styles.container}>
          <div className={styles.image}>
            <Image
              src={profile.articleImage.url}
              alt="Picture"
              height={profile.articleImage.height}
              width={profile.articleImage.width}
            />
          </div>

          {/* 記事本文 */}
          <ParsedBody body={profile.body} />
        </section>
      </BaseBlogPostLayout>
    </>
  )
}
