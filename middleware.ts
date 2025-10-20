import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    // ✅ Clerk 최신 방식 - redirectTo 설정
    await auth.protect({
      unauthorizedUrl: '/sign-in',
    })
  }
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)', '/'],
}
