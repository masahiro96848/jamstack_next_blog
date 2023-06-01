/**
 * axiosの設定
 */
import axios from 'axios'

const MICROCMS_API_KEY: string = process.env.MICROCMS_API_KEY || ''

const globalAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'MICRO-CMS-KEY': MICROCMS_API_KEY,
  },
})

export default globalAxios
