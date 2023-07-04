/**
 * BlogApi.test
 * @package apis
 */

/* apis */
import { getBlogsApi, getBlogByApi } from '@/apis/BlogApi'
/* constants */
import { initBlogItem, initBlogData } from '@/constants/initState'
/* types */
import { BlogItemType, BlogDataType } from '@/types/Blog'

describe('【APIテスト】BlogApi test', () => {
  let blogItem: BlogItemType
  let blogItemList: BlogDataType

  beforeEach(() => {
    blogItem = initBlogItem
    blogItemList = initBlogData
  })

  describe('【関数テスト】getBlogApi', () => {
    // mock化
    const apiMock = jest.fn(getBlogsApi)
    // 引数
    const offsetParam = 1

    test('【正常系】データを取得できる。', async () => {
      blogItemList.blogList = [blogItem]
      console.log(blogItemList.blogList)

      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(blogItemList))

      expect(await apiMockFunc()).toEqual(blogItemList)
    })

    test('【異常系】例外が発生する。', async () => {
      blogItemList.blogList = [blogItem]

      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))

      try {
        await apiMockFunc()
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
