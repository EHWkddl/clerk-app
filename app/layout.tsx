export const dynamic = 'force-dynamic';
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
    <ClerkProvider>
      <html lang="en">
        {/* 배경 더 밝게 (slate-50) */}
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
