import { Metadata } from 'next'
import '@/styles/globals.scss'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `免責事項・プライバシーポリシー | ZEROne Blog`,
    description: 'ZEROneは学んだこと、役に立つ知識を発信していくブログです',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
