import { Metadata } from 'next'
/* components */
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'ZEROneは学んだこと、役に立つ知識を発信していくブログです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>{children}</body>
    </html>
  )
}
