/**
 * CategoryApi.test
 * @package apis
 */

/* apis */
import { getCategoriesApi, getCategoryByApi } from './CategoryApi'
/* constants */
import { initCategoryData } from '@/constants/initState'
/* types */
import { CategoryType } from '@/types/Category'

describe('【APIテスト】CategoryApi test', () => {
  let categoryData: CategoryType
  let categoryDataList: CategoryType[]
  describe('【関数テスト】getCategoriesApi', () => {
    // モック化
    const apiMock = jest.fn(getCategoriesApi)

    beforeEach(() => {
      categoryData = initCategoryData
      categoryDataList = []
    })

    test('【正常系】データ取得ができる', async () => {
      categoryDataList.push(categoryData)
      const apiMockFunc = apiMock.mockReturnValue(
        Promise.resolve(categoryDataList),
      )
      expect(await apiMockFunc()).toEqual(categoryDataList)
    })

    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc()
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })

  describe('【関数テスト】 getCategoryByApi', () => {
    // モック化
    const apiMock = jest.fn(getCategoryByApi)
    // 引数
    const categoryIdParam = 'test'

    beforeEach(() => {
      categoryData = initCategoryData
      categoryDataList = []
    })

    test('【正常系】データ取得ができる', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(categoryData))
      expect(await apiMockFunc(categoryIdParam)).toEqual(categoryData)
    })

    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc(categoryIdParam)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
