/**
 * BlogService
 */

/* apis */
import { getBlogsContainArchiveMonthApi } from '@/apis/BlogApi'
/* logic */
import { getStartMonthLogic, getEndMonthLogic } from '@/logic/DateLogic'
/* types */
import { BlogDataType } from '@/types/Blog'

/**
 * 対象月のブログ記事一覧を取得
 */
export const getBlogTargetMonthService = async (targetDate: Date) => {
  const startMonth = getStartMonthLogic(targetDate)
  const endMonth = getEndMonthLogic(targetDate)

  // 記事データを取得
  // const blogData = await getBlogsContainArchiveMonthApi(startMonth, endMonth)
  // return blogData
}
