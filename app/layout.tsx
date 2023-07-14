import { Metadata } from 'next'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'ZEROne(トップページ)',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
