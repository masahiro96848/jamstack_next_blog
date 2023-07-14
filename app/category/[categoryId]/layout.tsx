import { Metadata } from 'next'
import { getBlogsContainCategoriesApi } from '@/apis/BlogApi'
import { getCategoriesApi } from '@/apis/CategoryApi'
/* styles */
import '@/styles/globals.scss'
import { BlogItemType } from '@/types/Blog'

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string }
}): Promise<Metadata> {
  let blogList: BlogItemType[] = []

  // カテゴリー一覧取得
  const categoryData = await getCategoriesApi()
  const categoryName = categoryData.filter((category) => {
    return category.id === params.categoryId
  })
  const data = await getBlogsContainCategoriesApi(params.categoryId)
  blogList = data.blogList
  return {
    title: `「${categoryName[0].name}」の記事一覧 | ZEROne Blog`,
    description: 'ZEROneは学んだこと、役に立つ知識を発信していくブログです',
  }
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
