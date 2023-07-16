import { NextRequest, NextResponse } from 'next/server'

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 */

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  // if (process.env.NODE_ENV === 'production') {
  //   if (basicAuth) {
  //     const authValue = basicAuth.split(' ')[1]
  //     const [user, pwd] = atob(authValue).split(':')

  //     if (
  //       user === process.env.NEXT_PUBLIC_BASIC_AUTH_USER &&
  //       pwd === process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD
  //     ) {
  //       return NextResponse.next()
  //     }
  //   }
  //   return new Response('Basic Auth required', {
  //     status: 401,
  //     headers: {
  //       'WWW-Authenticate': 'Basic realm="Secure Area"',
  //     },
  //   })
  // }
}
