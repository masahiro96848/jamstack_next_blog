/**
 * ArchiveService
 */

/* logic */
import {
  getCurrentDateLogic,
  getStartMonthLogic,
  getEndMonthLogic,
  showYearMonthDayLogic,
} from '@/logic/DateLogic'

/**
 * アーカイブリストを取得処理
 */
export const getArchiveListService = async () => {
  const currentDate = getCurrentDateLogic() // 現在日時
}
