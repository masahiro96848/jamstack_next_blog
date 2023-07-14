/**
 * layouts/MetaHead
 * @package Components
 */
import React from 'react'
import Head from 'next/head'
import { MetaHeadType } from '@/types/MetaHead'

/**
 * props
 */
type Props = {
  metaData: MetaHeadType
}

/**
 * MetaHead
 * @param {Props} props
 * @returns
 */
export const MetaHead = (props: Props) => {
  /* props */
  const { metaData } = props

  return (
    <Head>
      <title>{metaData.title}</title>
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta name="keywords" content={metaData.keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={metaData.url} />
      <meta property="og:image" content={metaData.image} />
      <meta property="og:site_name" content={metaData.title} />

      <link rel="canonical" href={metaData.url} />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  )
}
