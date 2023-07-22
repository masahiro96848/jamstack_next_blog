/**
 * ProfileApi.test
 * @package apis
 */

/* apis */
import { getProfileApi } from '@/apis/ProfileApi'
import { initProfileState } from '@/constants/initState'
/* types */
import { ProfileType } from '@/types/Profile'

describe('【APIテスト】ProfileApi test', () => {
  let profileData: ProfileType
  describe('【関数テスト】getProfileApi', () => {
    // モック化
    const apiMock = jest.fn(getProfileApi)
    beforeEach(() => {
      profileData = initProfileState
    })

    // test('【正常系】データを取得できる', async () => {
    //   const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(profileData))
    //   expect(await apiMockFunc()).toEqual(profileData)
    // })

    test('【異常系】例外が発生する。', async () => {
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))
      try {
        await apiMockFunc()
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
