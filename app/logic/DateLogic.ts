/**
 * 日付関連のロジック
 * @package logic
 */
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

// 日本語化
dayjs().format()

/**
 * 現在日時を取得
 * @returns
 */
export const getCurrentDateLogic = () => {
  return dayjs()
}

/**
 * 月初の日時を取得
 * @param { string} date
 *
 * @returns {string}
 */
export const getStartMonthLogic = (date: string): string => {
  return dayjs(date).startOf('month').format()
}

/**
 * 月末の日時を取得
 * @param { string} date
 *
 * @returns {string}
 */
export const getEndMonthLogic = (date: string): string => {
  return dayjs(date).endOf('month').format()
}

/**
 * 日付フォーマット変換(YYYY.M.D)
 * @param {string} date
 *
 * @returns {string}
 */
export const showYearMonthDayLogic = (date: string): string => {
  return dayjs(date).format('YYYY.M.D')
}

/**
 * 日付フォーマット変換(YYYY-MM-DD)
 * @param {string} date
 *
 * @returns {string}
 */
export const changeYearMonthDateLogic = (date: string): string => {
  return dayjs(date).format('YYYY-MM-DD')
}
