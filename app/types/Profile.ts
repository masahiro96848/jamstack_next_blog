/**
 * プロフィールのinterface
 * @package types
 */

import { ImageType } from './Image'

export interface ShortCode {
  code: string
  body: string
}

/**
 * ProfileType
 */
export interface ProfileType {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  englishName: string
  position: string
  introduction: string
  userImage: ImageType
  articleImage: ImageType
  description: string
  body: string
  shortCodes?: Array<ShortCode>
}
