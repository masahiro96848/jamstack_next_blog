/**
 * 日付関連のロジック
 * @package logic
 */
import { format, startOfMonth, endOfMonth } from 'date-fns'

/**
 * 現在日時を取得
 * @returns
 */
export const getCurrentDateLogic = () => {
  return format(new Date(), 'yyyy-MM-dd')
}

/**
 * 月初の日時を取得
 * @param {Date} date
 */
export const getStartMonthLogic = (date: Date): Date => {
  return startOfMonth(date)
}

/**
 * 月末の日時を取得
 * @param {Date} date
 */
export const getEndMonthLogic = (date: Date): Date => {
  return endOfMonth(date)
}
