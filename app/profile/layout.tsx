import { Metadata } from 'next'
import { getProfileApi } from '@/apis/ProfileApi'
import '@/styles/globals.scss'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getProfileApi()
  const profile = data[0]

  return {
    title: `プロフィール | ZEROne Blog`,
    description: profile.description,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
