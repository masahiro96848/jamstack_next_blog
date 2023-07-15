import { NextRequest, NextResponse } from 'next/server'

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  // if (process.env.NODE_ENV === 'production') {
  console.log('本番環境')
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === '4dmin' && pwd === 'testpwd123') {
      return NextResponse.next()
    }
  }
  return new Response('Basic Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
  // }
}
