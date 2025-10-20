import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    courses: [
      {
        id: 1,
        title: 'Next.js Fundamentals',
        description: 'Learn Next.js basics step by step.',
      },
      {
        id: 2,
        title: 'Clerk Authentication',
        description: 'Secure login system using Clerk.',
      },
      {
        id: 3,
        title: 'API Routes in Next.js',
        description: 'Create backend API inside your Next.js app.',
      },
    ],
  })
}
