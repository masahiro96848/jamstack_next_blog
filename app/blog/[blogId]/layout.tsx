import { Metadata } from 'next'
import { getBlogByApi } from '@/apis/BlogApi'
/* styles */
import '@/styles/globals.scss'

export async function generateMetadata({
  params,
}: {
  params: { blogId: string }
}): Promise<Metadata> {
  const data = await getBlogByApi(params.blogId)
  return { title: data.title, description: data.description }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
