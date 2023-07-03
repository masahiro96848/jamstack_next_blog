/**
 * ProfileApi.ts
 * プロフィールAPI
 * @package apis
 */
/* config */
import globalAxios from '@/config/globalAxios'

import { initProfileState } from '@/constants/initState'
/* types */
import { ProfileType } from '@/types/Profile'

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}/profile/`

/**
 * プロフィール詳細取得
 * @returns {Promise<ProfileType>}
 */
export const getProfileApi = async (): Promise<ProfileType[]> => {
  let profile: ProfileType[] = []
  try {
    const res = await globalAxios.get(BASE_URL)
    profile = res.data.contents
  } catch (error) {
    throw new Error(`API ERROR: getProfileApi`)
  }
  return profile
}
