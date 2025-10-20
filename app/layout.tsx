export const dynamic = 'force-dynamic' // ✅ 배포 캐시 문제 방지

import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '../components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clerk App',
  description: 'Clerk Authentication Example',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className="bg-slate-50">
          <Header />
          <main className="w-full flex justify-center">
            <div className="w-full max-w-2xl px-6 pt-16 pb-24">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
